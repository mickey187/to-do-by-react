import { useState } from "react";
import Button from "../components/Button";
import { useFormik } from "formik";
import * as Yup from "yup";
import FormInput from "../components/FormInput";
import Card from "../components/Card";
import { Link, useNavigate } from "react-router-dom";
import {auth} from "../firebase";
import {signInWithEmailAndPassword} from "firebase/auth"

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
      const user = await signInWithEmailAndPassword(auth, values.email, values.password);
      console.log(user);
      navigate('/');
      
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
    <div className="row mt-5 d-flex justify-content-center align-items-center vh-100">
      <div className="col-md-6 col-sm-4">
        <form onSubmit={formik.handleSubmit}>
          <Card cardHeader="Login">
            <div className="pb-0 mb-0">
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
            </div>
            <div className="p-3 d-grid gap-2 mx-auto">
              <Button
                variant="primary"
                buttonSize="block"
                buttonType="submit"
                isDiasbled={formik.isSubmitting}
              >
                LOGIN
              </Button>
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
