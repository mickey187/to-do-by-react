import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { firestore } from "../firebase";
import { collection, query, where, getDocs } from "firebase/firestore";
import { format, startOfDay, endOfDay } from "date-fns";

const TodayTask = () => {
  const [unFilteredTaskList, setUnFilteredTaskList] = useState([]);
  const [filteredTaskList, setFiteredTaskList] = useState([]);
  const [filter, setFilter] = useState("all");
  const [error, setError] = useState(false);
  const [filterButton, setFilterButton] = useState(false);

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
      where("dueDate", "<=", endDateFormat)
    );
    // Execute the query
    // Execute the query
    const querySnapshot = await getDocs(q);
    const list = [];

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
        list.push({
          key: doc.id,
          userId: data.userId,
          title: data.title,
          description: data.description,
          dueDate: formDateTime(data.dueDate),
          priority: data.priority,
          status: data.status,
        });

        setFiteredTaskList(list);
      });
    }

    setUnFilteredTaskList(list);
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
  }
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
          <small className="">
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
          </small>
        </div>
        <p className="mb-1">
          <strong>Description: </strong>
          {task.description}
        </p>
        <p className="mb-1">
          <strong>Due Date: </strong>
          {task.dueDate}
        </p>
        <p className="mb-1">
          <div className="row">
            <div className="col-6">
              <strong>
                Status:{" "}
                <span
                  className={`${
                    task.status === "pending"
                      ? "bg-warning"
                      : task.status === "in-progress"
                      ? "bg-primary"
                      : "bg-success"
                  } text-light p-1 `}
                >
                  {task.status}
                </span>
              </strong>
            </div>

            <div className="col-6 d-flex-justify-content-end">
              <input
                className="form-check-input float-end"
                type="checkbox"
                value=""
                id={task.id}
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title="Mark as completed"
              />
            </div>
          </div>
        </p>
        <div className="divider"></div>
      </div>
    ));
  }

  if (filteredTaskList.length === 0) {
    taskListView = (
      <div className="alert alert-warning" role="alert">
        No tasks are {filter}
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
      <div className="row d-flex justify-content-center mt-5">
        <div className="col-6">
          <Card cardHeader="Today's Task">
            <div className="dropdown   mt-0 float-end position-relative">
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
                className={`dropdown-menu position-absolute ${filterButton? "show": ""}`}
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
