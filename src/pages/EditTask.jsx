import Navbar from "../components/Navbar";
import { NavLink, useLocation, Link, useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Card from "../components/Card";
import FormInput from "../components/FormInput";
import Select from "../components/Select";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useFormik } from "formik";
import * as Yup from "yup";
import { auth, firestore } from "../firebase";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { AuthContext } from "../context/AuthContext";
import { useState, useEffect } from "react";

const EditTask = (props) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { task, source} = location.state;
  console.log(source);

  const [taskEdit, setTaskEdit] = useState(task);
  const [successAlert, setSuccessAlert] = useState(false);
  const [errorAlert, setErrorAlert] = useState(false);

  const initialValues = {
    id: taskEdit.key,
    title: taskEdit.title,
    description: taskEdit.description,
    dueDate: convertDateFormat(taskEdit.dueDate),
    priority: taskEdit.priority,
  };

  const formValidationSchema = Yup.object().shape({
    title: Yup.string().required("Title is required"),
    description: Yup.string().required("Description is required"),
    dueDate: Yup.string().required("Due Date is required"),
    priority: Yup.string().required("Priority is required"),
  });

  const editTaskHandler = async (values, { setSubmitting, resetForm }) => {
    try {
      const taskDocRef = doc(firestore, "tasks", values.id);
      await updateDoc(taskDocRef, values);
      setSuccessAlert(true);
      showAlert();
      if (source.source === 'TodayTaskComponent') {
        navigate("/today", { state: { editAlert: true } });
      } else if(source.source === 'UpcomingTaskComponent'){
        navigate("/upcoming", { state: { editAlert: true } });
      }
      
    } catch (error) {
      setErrorAlert(true);
      showAlert();
      console.error("Error updating task status:", error);
    } 
  };

  function convertDateFormat(dateString) {
    const date = new Date(dateString);

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");

    const formattedDate = `${year}-${month}-${day}T${hours}:${minutes}`;

    return formattedDate;
  }

  const showAlert = () => {
     if (errorAlert) {
      const timeout = setTimeout(() => {
        setErrorAlert(false);
      }, 5000);
      return () => {
        clearTimeout(timeout);
      };
    }
  };
  useEffect(() => {
    showAlert(); // Invoke showAlert function when component renders
  }, [successAlert, errorAlert]);

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: formValidationSchema,
    onSubmit: editTaskHandler,
  });
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

        <li className="nav-item">
          <Link to="/upcoming" className="nav-link d-flex">
            <span className="d-flex align-items-center">
              <FontAwesomeIcon icon={"calendar"} className="m-1" />
              <p className="text-light m-1">Upcoming</p>
            </span>
          </Link>
        </li>
      </Navbar>
      <div className="row d-flex justify-content-end mt-3 me-3">
        <div className="col-4">
          {errorAlert && (
            <div
              className="alert alert-danger alert-dismissible fade show"
              role="alert"
            >
              Task could not be edited. Please try again!
            </div>
          )}
        </div>
      </div>
      <div className="row d-flex justify-content-center mt-3">
        <div className="col-6">
          <Card cardHeader="Edit Task">
            <form onSubmit={formik.handleSubmit} className="ps-5 pe-5 pt-5">
              <div className="pb-0 mb-0">
                <FormInput
                  inputType="text"
                  placeholder="Title"
                  id="title"
                  name="title"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.title}
                  validationMessage={
                    formik.touched.title && formik.errors.title
                      ? `${formik.errors.title}`
                      : null
                  }
                />

                <FormInput
                  inputType="text"
                  placeholder="Description"
                  id="description"
                  name="description"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.description}
                  validationMessage={
                    formik.touched.description && formik.errors.description
                      ? `${formik.errors.description}`
                      : null
                  }
                />

                <FormInput
                  inputType="datetime-local"
                  placeholder=""
                  id="dueDate"
                  name="dueDate"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.dueDate}
                  validationMessage={
                    formik.touched.dueDate && formik.errors.dueDate
                      ? `${formik.errors.dueDate}`
                      : null
                  }
                />

                <Select
                  id="priority"
                  name="priority"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.priority}
                  validationMessage={
                    formik.touched.priority && formik.errors.priority
                      ? `${formik.errors.priority}`
                      : null
                  }
                >
                  <option value="">Priority</option>
                  <option value="high">High</option>
                  <option value="medium">Medium</option>
                  <option value="low">Low</option>
                </Select>
              </div>
              <div className="p-3 d-grid gap-2 mx-auto">
                <Button
                  variant="primary"
                  buttonSize="block"
                  buttonType="submit"
                  isDiasbled={formik.isSubmitting}
                >
                  SUBMIT
                </Button>
                <Button
                  variant="secondary"
                  buttonSize="block"
                  buttonType="button"
                  onClick={() => {
                    navigate(-1);
                  }}
                >
                  CANCEL
                </Button>
              </div>
            </form>
          </Card>
        </div>
      </div>
    </>
  );
};

export default EditTask;
