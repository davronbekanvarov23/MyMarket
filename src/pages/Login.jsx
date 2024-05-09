import { Link, Form } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import FormInput from "../components/FormInput";

function Login() {
  return (
    <div className="min h-screen grid place-content-center w-full">
      <div className="mb-3">
        <Form method="post" className="mb-3 w-96">
          <h1 className="text-4xl font-bold text-center"> Login</h1>
          <FormInput label="Email" type="email" name="email" />
          <FormInput label="Password" type="password" name="password" />
          <div className="mt-5">
            <button type="submit" className="btn btn-secondary w-full">
              Submit
            </button>
          </div>
        </Form>
      </div>
      <div>
        <button type="button" className="btn btn-secondary w-full">
          <FaGoogle className="h-5 w-5" />
          Login
        </button>
        <p className="mt-4 text-center">
          Do not have account yet?{" "}
          <Link to="/signup" className="link link-primary">
            signUp
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
