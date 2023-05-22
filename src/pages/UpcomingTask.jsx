import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { firestore } from "../firebase";
import { collection, query, where, getDocs } from "firebase/firestore";
import { format, startOfDay, addDays } from "date-fns";

const UpcomingTask = () => {
  const [upComingTaskList, setUpcomingTaskList] = useState([]);
  const [error, setError] = useState(false);

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

  const fetchUpcomingTasks = async () => {
    setError(false);

    // Get tomorrow's date and extract the start of the day
    const tomorrow = startOfDay(addDays(new Date(), 1));

    // Format tomorrow's date in the desired format for comparison
    const tomorrowFormat = format(tomorrow, "yyyy-MM-dd'T'HH:mm");

    // Firestore query to fetch upcoming tasks excluding today
    const tasksCollectionRef = collection(firestore, "tasks");
    const q = query(tasksCollectionRef, where("dueDate", ">=", tomorrowFormat));

    // Execute the query
    const querySnapshot = await getDocs(q);

    const list = [];
    // Check if there are no matching documents
    if (querySnapshot.empty) {
      console.log("No upcoming tasks found");
      setError(true);
    } else {
      // Process the query results
      querySnapshot.forEach((doc) => {
        // Access task data using doc.data()
        const task = doc.data();
        // Process the task as needed
        console.log(task);
        list.push({
          key: task.id,
          userId: task.userId,
          title: task.title,
          description: task.description,
          dueDate: formDateTime(task.dueDate),
          priority: task.priority,
          status: task.status,
        });
      });
      setUpcomingTaskList(list);
    }
  };

  useEffect(() => {
    fetchUpcomingTasks();
  }, []);

  let upcomingTaskListView = (
    <div className="d-flex justify-content-center">
      <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );

  if (error) {
    upcomingTaskListView = (
      <div className="alert alert-danger" role="alert">
        No Upcoming Tasks Found!
      </div>
    );
  }

  if (upComingTaskList.length !== 0) {
    upcomingTaskListView = upComingTaskList.map((task) => (
      <div
        key={task.key}
        className="mb-4 list-group-item list-group-item-action "
        aria-current="true"
      >
        <div className="d-flex w-100 justify-content-between">
          <h5 className="mb-1">Title: {task.title}</h5>
          <small>
            <strong>
              Priority:{" "}
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
            </strong>
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
          <strong>
            Staus:{" "}
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
        </p>
        <div className="divider"></div>
      </div>
    ));
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
        <li className="nav-item">
          <Link to="/today" className="nav-link d-flex">
            <span className="d-flex align-items-center">
              <FontAwesomeIcon icon={"list-dots"} className="m-1" />
              <p className="text-light m-1">Today</p>
            </span>
          </Link>
        </li>

        <li className="nav-item active">
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
          <Card cardHeader="Upcoming Tasks">
            <div className="list-group">{upcomingTaskListView}</div>
          </Card>
        </div>
      </div>
    </>
  );
};

export default UpcomingTask;
