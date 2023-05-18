import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useFormik } from "formik";
import * as Yup from "yup";
import FormInput from "../components/FormInput";
import Select from "../components/Select";
import Button from "../components/Button";
import { auth, firestore } from "../firebase";
import { addDoc, collection } from "firebase/firestore";
import { AuthContext } from "../context/AuthContext";

const AddTask = () => {
  const [error, setError] = useState(null);
  const Auth = useContext(AuthContext);
  const initialValues = {
    title: "",
    description: "",
    dueDate: "",
    priority: "",
  };

  const formValidationSchema = Yup.object().shape({
    title: Yup.string().required("Title is required"),
    description: Yup.string().required("Description is required"),
    dueDate: Yup.string().required("Due Date is required"),
    priority: Yup.string().required("Priority is required"),
  });

  const addTaskHandler = async (values, { setSubmitting }) => {
    setError(null);
    try {
      const docRef = await addDoc(collection(firestore, "tasks"), {
        userId: auth.currentUser.uid,
        title: values.title,
        description: values.description,
        dueDate: values.dueDate,
        priority: values.priority,
        status: "pending"
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (error) {
      setError(error);
      console.log(error);
    } finally {
      setSubmitting(false);
    }
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: formValidationSchema,
    onSubmit: addTaskHandler,
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
      <div className="row d-flex justify-content-center  mt-5">
        <div className="col-6">
          <Card cardHeader="Add Task">
            <form onSubmit={formik.handleSubmit}>
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
                  inputType="date"
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
                  ADD TASK
                </Button>
              </div>
            </form>
          </Card>
        </div>
      </div>
    </>
  );
};

export default AddTask;
