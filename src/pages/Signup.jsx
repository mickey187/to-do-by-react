import { useState, useEffect } from "react";
import Button from "../components/Button";
import Card from "../components/Card";
import FormInput from "../components/FormInput";
import { useFormik } from "formik";
import * as Yup from "yup";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword, sendSignInLinkToEmail } from "firebase/auth";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import withReactContent from "sweetalert2-react-content";
import { useNavigate, Link } from "react-router-dom";

const Signup = () => {
  const [hasUserSignedUp, setHasUserSignedUp] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();

  const signUpInitialValues = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const MySwal = withReactContent(Swal);

  const sweetAlertSuccess = () => {
    MySwal.fire({
      position: "top-end",
      icon: "success",
      title: "Account created successfully!",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  const sweetAlertFailure = () => {
    MySwal.fire({
      position: "top-end",
      icon: "error",
      title: errorMessage,
      showConfirmButton: false,
      timer: 1500,
    }).finally(() => {
      setHasUserSignedUp(false);
    });
  };

  const actionCodeSettings = {
    // URL you want to redirect back to. The domain (www.example.com) for this
    // URL must be in the authorized domains list in the Firebase Console.
    url: "https://todo.bunaweb.com/signup",
    // This must be true.
    handleCodeInApp: true,
    iOS: {
      bundleId: "com.todo.ios",
    },
    android: {
      packageName: "com.todo.android",
      installApp: true,
      minimumVersion: "12",
    },
    dynamicLinkDomain: "https://ex.amp.le/?link=https://bunaweb.com/services",
  };

  useEffect(() => {
    if (hasUserSignedUp === true) {
      sweetAlertSuccess();
    } else if (hasUserSignedUp === false) {
      sweetAlertFailure();
    }
  }, [hasUserSignedUp]);

  const formValidationSchema = Yup.object().shape({
    username: Yup.string().required("Username is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
  });

  const signUpSubmitHandler = async (values, { setSubmitting }) => {
    try {
      setHasUserSignedUp(null);
      const userSignUp = await sendSignInLinkToEmail(auth, values.email,actionCodeSettings);
      console.log(userSignUp);
      // trying the githubworkflo
      // const userCredential = await createUserWithEmailAndPassword(
      //   auth,
      //   values.email,
      //   values.password
      // );
      // const user = userCredential.user;
      // setHasUserSignedUp(true);
      // navigate("/home");
      // sweetAlertSuccess();

      // console.log(`User with email ${user.email} created successfully.`);
    } catch (error) {
      setHasUserSignedUp(false);
      // sweetAlertFailure();
      setErrorMessage(error.message);
      console.error(error.code, error.message);
      console.log(error.message);
    } finally {
      setSubmitting(false); // Mark submission as complete
    }
  };

  const formik = useFormik({
    initialValues: signUpInitialValues,
    validationSchema: formValidationSchema,
    onSubmit: signUpSubmitHandler,
  });

  return (
    <div>
      <div className="row mt-5  mb-5 pb-5 d-flex justify-content-center g-0" style={{ height: "85vh" }}>
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
          Stay focused, stay motivated, and stay on track with our todo app. Set goals, track progress, and accomplish more by effectively managing your tasks.
          </p>
        </div>
      </div>
        <div className="col-md-6 col-sm-4 bg-warning d-flex align-items-stretch">
          <form onSubmit={formik.handleSubmit} className="w-100">
            <Card cardHeader="Signup">
              <div className="pb-0 mb-0 ">
                <FormInput
                  inputType="text"
                  placeholder="Username"
                  id="username"
                  name="username"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.username}
                  validationMessage={
                    formik.touched.username && formik.errors.username
                      ? `${formik.errors.username}`
                      : null
                  }
                />
              </div>
              <div>
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
              </div>
              <div>
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
              </div>
              <div>
                <FormInput
                  id="confirmPassword"
                  name="confirmPassword"
                  inputType="password"
                  placeholder="Confirm Password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.confirmPassword}
                  validationMessage={
                    formik.touched.confirmPassword &&
                    formik.errors.confirmPassword
                      ? `${formik.errors.confirmPassword}`
                      : null
                  }
                />
              </div>

              <div className="p-3 d-grid gap-2 mx-auto">
                <Button
                  variant="primary"
                  buttonSize="block"
                  buttonType="submit"
                  isDiasbled={formik.isSubmitting}
                >
                  SIGNUP
                </Button>
              </div>

              <div className="p-1 text-center mt-4">
                Already have an account?<Link to="/login"> Login</Link>
              </div>
            </Card>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
