import { useState } from "react";
import Button from "../components/Button";
import { useFormik } from "formik";
import * as Yup from "yup";
import FormInput from "../components/FormInput";
import Card from "../components/Card";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import google from "../assets/images/google.png";

const Login = (props) => {
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const loginInitialValues = {
    email: "",
    password: "",
  };

  const formValidationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required"),
  });

  const loginSubmitHandler = async (values, { setSubmitting }) => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        values.email,
        values.password
      );
      console.log(user);
      navigate("/");
    } catch (error) {
      setError(error.message);
      console.log(error.message);
    } finally {
      setSubmitting(false);
    }
  };

  const formik = useFormik({
    initialValues: loginInitialValues,
    validationSchema: formValidationSchema,
    onSubmit: loginSubmitHandler,
  });

  return (
    <div
      className="row mt-3 mb-5 pb-5 g-0 d-flex justify-content-center"
      style={{ height: "85vh" }}
    >
      <div
        className="col-md-3 d-flex align-items-stretch justify-content-center p-3"
        style={{ backgroundColor: "#3C37FF" }}
      >
        <div className="text-break">
          <p className="text-light text-center mt-5 display-4">TO-DO</p>
          <p className="text-light text-center mt-5">
            Stay on Track, Achieve Your Goals
          </p>
          <p className="text-light  text-center mt-5">
            Stay focused, stay motivated, and stay on track with our todo app.
            Set goals, track progress, and accomplish more by effectively
            managing your tasks.
          </p>
        </div>
      </div>

      <div className="col-md-6 col-sm-4 bg-warning d-flex align-items-stretch">
        <form onSubmit={formik.handleSubmit} className="w-100">
          <Card cardHeader="Login">
            <div className="ps-5 pe-5 pt-5 ">
              <FormInput
                inputType="email"
                placeholder="Email"
                id="email"
                name="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                validationMessage={
                  formik.touched.email && formik.errors.email
                    ? `${formik.errors.email}`
                    : null
                }
              />

              <FormInput
                inputType="password"
                placeholder="Password"
                id="password"
                name="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
                validationMessage={
                  formik.touched.password && formik.errors.password
                    ? `${formik.errors.password}`
                    : null
                }
              />
              <div className="d-grid gap-2 mx-auto ps-3 pe-3 pt-5">
                <Button
                  variant="primary"
                  buttonSize="block"
                  buttonType="submit"
                  isDisabled={formik.isSubmitting}
                >
                  LOGIN
                </Button>
              </div>
              <div className="d-flex justify-content-between align-items-center ps-5 pe-5 mt-3 mb-3">
                <hr className="flex-grow-1 mr-3 me-2" />
                <span className="text-muted">or</span>
                <hr className="flex-grow-1 ms-2 ml-3" />
              </div>

              <div className="d-grid gap-2 mx-auto ps-3 pe-3 pt-3">
                <div className="row">
                  <div className="col-4 d-flex justify-content-end">
                    <Button
                      variant="light"
                      buttonSize="block"
                      buttonType="submit"
                      isDisabled={formik.isSubmitting}
                    >
                      <FontAwesomeIcon
                        icon={["fab", "facebook"]}
                        size="2xl"
                        style={{ color: "#3b5998" }}
                      />
                    </Button>
                  </div>
                  <div className="col-4 d-flex justify-content-center">
                    <Button
                      variant="light"
                      buttonSize="block"
                      buttonType="submit"
                      isDisabled={formik.isSubmitting}
                    >
                      <img src={google} alt="" />
                      {/* <FontAwesomeIcon icon={["fab", "google"]}  size="2xl" style={{'color': '#4285f4'}} /> */}
                    </Button>
                  </div>

                  <div className="col-4 d-flex justify-content-start">
                    <Button
                      variant="light"
                      buttonSize="block"
                      buttonType="submit"
                      isDisabled={formik.isSubmitting}
                    >
                      <FontAwesomeIcon
                        icon={["fab", "twitter"]}
                        size="2xl"
                        style={{ color: "#55acee" }}
                      />
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-1 text-center mt-4">
              Don't have an account?<Link to="/signup"> Sign up for free</Link>
            </div>
          </Card>
        </form>
      </div>
    </div>
  );
};

export default Login;
