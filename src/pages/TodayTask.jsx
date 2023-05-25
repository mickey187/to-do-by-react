import { useState, useEffect, useContext } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { firestore } from "../firebase";
import {
  collection,
  query,
  where,
  getDocs,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { format, startOfDay, endOfDay } from "date-fns";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { AuthContext } from "../context/AuthContext";

const TodayTask = () => {
  const [unFilteredTaskList, setUnFilteredTaskList] = useState([]);
  const [filteredTaskList, setFiteredTaskList] = useState([]);
  const [filter, setFilter] = useState("all");
  const [error, setError] = useState(false);
  const [filterButton, setFilterButton] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { editAlert } = location.state || false;
  const [showEditAlert, setShowEditAlert] = useState(editAlert);

  const currentUser = useContext(AuthContext); 

  const MySwal = withReactContent(Swal);

  // const [taskList, setTaskList] = useState([]);

  const formDateTime = (datetimeString) => {
    const datetime = new Date(datetimeString);
    const formattedDate = datetime.toLocaleDateString("en-US", {
      day: "numeric",
      month: "numeric",
      year: "numeric",
    });

    const formattedTime = datetime.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "numeric",
    });

    const formattedDateTime = `${formattedDate} ${formattedTime}`;
    return formattedDateTime;

    console.log(formattedDateTime); // Output: 5/18/2023, 4:19:00 PM
  };
  const fetchTodaysTask = async () => {
    setUnFilteredTaskList([]);
    setFiteredTaskList([]);
    setError(false);
    // Get today's date in the desired format (e.g., 2023-05-18T15:16)
    const today = new Date();
    const startDate = startOfDay(today);
    const endDate = endOfDay(today);

    // Format the start and end dates in the desired format for comparison
    const startDateFormat = format(startDate, "yyyy-MM-dd'T'HH:mm");
    const endDateFormat = format(endDate, "yyyy-MM-dd'T'HH:mm");

    // Firestore query to fetch tasks with matching date
    const tasksCollectionRef = collection(firestore, "tasks");
    const q = query(
      tasksCollectionRef,
      where("dueDate", ">=", startDateFormat),
      where("dueDate", "<=", endDateFormat),
      where("userId", "==", currentUser.uid)
    );
   
    // Execute the query
    // Execute the query
    const querySnapshot = await getDocs(q);
    const tasks = [];
   

    // Check if there are no matching documents
    if (querySnapshot.empty) {
      console.log("No matching documents found");
      setError(true);
    } else {
      // Process the query results
      querySnapshot.forEach((doc) => {
        // Access task data using doc.data()
        const data = doc.data();
        // Process the task as needed
        // console.log("Idddddddddddddddd",data)
        tasks.push({
          key: doc.id,
          userId: data.userId,
          title: data.title,
          description: data.description,
          dueDate: formDateTime(data.dueDate),
          priority: data.priority,
          status: data.status,
        });

        setFiteredTaskList(tasks);
      });
    }

    setUnFilteredTaskList(tasks);
  };

  const filterTaskHandler = (filterType) => {
    if (filterType === "all") {
      setFilter("all");
      setFiteredTaskList(unFilteredTaskList);
    }
    if (filterType === "pending") {
      setFilter("pending");
      setFiteredTaskList(
        unFilteredTaskList.filter((task) => task.status === "pending")
      );
    }

    if (filterType === "in-progress") {
      setFilter("in-progress");
      setFiteredTaskList(
        unFilteredTaskList.filter((task) => task.status === "in-progress")
      );
    }

    if (filterType === "complete") {
      setFilter("complete");
      setFiteredTaskList(
        unFilteredTaskList.filter((task) => task.status === "complete")
      );
    }
  };
  const filterButtonHandler = () => {
    if (!filterButton) {
      setFilterButton(true);
    }
    if (filterButton) {
      setFilterButton(false);
    }
  };

  const handleTaskStatusChange = async (taskId, newStatus) => {
    try {
      // Update the task status in Firestore
      const taskDocRef = doc(firestore, "tasks", taskId);
      await updateDoc(taskDocRef, { status: newStatus });

      fetchTodaysTask();
    } catch (error) {
      console.error("Error updating task status:", error);
      // Handle the error (e.g., show an error message to the user)
    }
  };

  const editTaskHandler = (task) => {
    const source = {
      source: "TodayTaskComponent",
    };
    navigate(`/edit-task/${task.key}`, {
      state: { task, source },
    });
  };

  const deleteTaskHandler = async (taskId) => {
    const result = await MySwal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });

    if (result.isConfirmed) {
      try {
        // Get a reference to the task document
        const taskRef = doc(firestore, "tasks", taskId);

        // Delete the task document
        await deleteDoc(taskRef);

        console.log("Task deleted successfully");
        Swal.fire("Deleted!", "Your file has been deleted.", "success");

        // Update the unFilteredTaskList state by removing the deleted task
        setUnFilteredTaskList((prevList) =>
          prevList.filter((task) => task.key !== taskId)
        );
        fetchTodaysTask();
      } catch (error) {
        console.error("Error deleting task:", error);
        Swal.fire("Error", "Failed to delete task", "error");
      }
    }
  };

  const dismissEditAlert = () => {
    history.replace({ state: { showAlert: false } });
  };

  useEffect(() => {
    fetchTodaysTask();
    filterTaskHandler("all");
  }, []);

  let taskListView = (
    <div className="d-flex justify-content-center">
      <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );

  if (error) {
    taskListView = (
      <div className="alert alert-danger" role="alert">
        No Tasks found for today!
      </div>
    );
  }

  if (filteredTaskList.length !== 0) {
    taskListView = filteredTaskList.map((task) => (
      <div
        key={task.key}
        className="mb-4 list-group-item list-group-item-action "
        aria-current="true"
      >
        <div className="d-flex  justify-content-between">
          <h5 className="mb-1">Title: {task.title}</h5>
          <div className="d-flex justify-content-end">
            <div className="ms-2 me-2">
              <button
                className="btn btn-sm btn-info float-end"
                onClick={editTaskHandler.bind(null, task)}
              >
                <FontAwesomeIcon icon={"edit"} />
              </button>
            </div>

            <div className="me-2">
              <button
                className="btn btn-sm btn-danger float-end"
                onClick={deleteTaskHandler.bind(null, task.key)}
              >
                <FontAwesomeIcon icon={"trash-can"} />
              </button>
            </div>
          </div>
        </div>
        <p className="mb-1">
          <strong>Description: </strong>
          {task.description}
        </p>
        <p className="mb-1">
          <strong>Due Date: </strong>
          {task.dueDate}
        </p>
        <div className="">
          <strong>Priority:</strong>{" "}
          <span
            className={`${
              task.priority === "high"
                ? "bg-danger"
                : task.priority === "medium"
                ? "bg-warning"
                : "bg-success"
            } text-light p-1 `}
          >
            {task.priority}
          </span>
        </div>
        <div className="mb-1">
          <div className="row">
            <div className="col-6">
              <label className="mb-1">
                <strong>Status:</strong>{" "}
              </label>
              <select
                name=""
                id=""
                className="form-control form-select"
                value={task.status}
                onChange={(event) =>
                  handleTaskStatusChange(task.key, event.target.value)
                }
              >
                <option value="pending">Pending</option>
                <option value="in-progress">In-Progress</option>
                <option value="complete">Complete</option>
              </select>
            </div>

            {/* <div className="col-6 d-flex-justify-content-end mt-3">
              <button
                className="btn btn-sm btn-info float-end"
                onClick={editTaskHandler.bind(null, task)}
              >
                <FontAwesomeIcon icon={"edit"} />
              </button>
            </div> */}
          </div>
        </div>
        <div className="divider"></div>
      </div>
    ));
  }

  if (filteredTaskList.length === 0) {
    taskListView = (
      <div className="alert alert-warning" role="alert">
        No tasks found for {filter}
      </div>
    );
  }

  
  return (
    <>
      <Navbar>
        <li className="nav-item">
          <Link to="/add-task" className="nav-link d-flex">
            <span className="d-flex align-items-center">
              <FontAwesomeIcon icon={"plus-circle"} className="m-1" />
              <p className="text-light m-1">Task</p>
            </span>
          </Link>
        </li>
        <li className="nav-item active">
          <Link to="/today" className="nav-link d-flex">
            <span className="d-flex align-items-center">
              <FontAwesomeIcon icon={"list-dots"} className="m-1" />
              <p className="text-light m-1">Today</p>
            </span>
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/upcoming" className="nav-link d-flex">
            <span className="d-flex align-items-center">
              <FontAwesomeIcon icon={"calendar"} className="m-1" />
              <p className="text-light m-1">Upcoming</p>
            </span>
          </Link>
        </li>
      </Navbar>
      {showEditAlert && (
        <div className="row d-flex justify-content-end mt-3 me-3">
          <div className="col-4">
            <div
              className={`alert alert-success alert-dismissible fade${
                showEditAlert ? "show" : ""
              }`}
              role="alert"
            >
              Task Edited Successfully!
              <button
                className="btn btn-outline float-end p-0 m-0 btn-md fs-6"
                onClick={() => {
                  setShowEditAlert(false);
                }}
              >
                &times;
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="row d-flex justify-content-center mt-5">
        <div className="col-6">
          <Card cardHeader="Today's Task">
            <div className="dropdown mt-0 float-end position-relative">
              <button
                className="btn btn-primary dropdown-toggle"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                onClick={filterButtonHandler}
              >
                <FontAwesomeIcon icon={"filter"} />
              </button>
              <ul
                className={`dropdown-menu position-absolute ${
                  filterButton ? "show" : ""
                }`}
                aria-labelledby="dropdownMenuButton1"
                style={{ zIndex: 999 }}
              >
                <li>
                  <button
                    className="dropdown-item bg-secondary"
                    onClick={filterTaskHandler.bind(null, "all")}
                  >
                    All
                  </button>
                </li>
                <li>
                  <button
                    className="dropdown-item bg-warning"
                    onClick={filterTaskHandler.bind(null, "pending")}
                  >
                    Pending
                  </button>
                </li>
                <li>
                  <button
                    className="dropdown-item bg-primary"
                    onClick={filterTaskHandler.bind(null, "in-progress")}
                  >
                    In-Progress
                  </button>
                </li>
                <li>
                  <button
                    className="dropdown-item bg-success"
                    onClick={filterTaskHandler.bind(null, "complete")}
                  >
                    Complete
                  </button>
                </li>
              </ul>
            </div>
            <div className="list-group mt-5">{taskListView}</div>
          </Card>
        </div>
      </div>
    </>
  );
};

export default TodayTask;
