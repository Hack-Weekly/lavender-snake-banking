import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";

const Signin = () => {
  const { setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const signIn = () => {
    setUser("123");
    navigate("/");
  };

  return (
    <div className="flex flex-col items-center gap-6">
      <h1 className="text-5xl font-bold">Welcome Back!</h1>
      <p className="text-grey text-lg text-center">Sign in to continue</p>
      <form className="flex flex-col gap-3 w-80">
        <div className="flex flex-col gap-0.5">
          <label htmlFor="email" className="">
            Email
          </label>
          <input type="email" className="input" id="email" />
        </div>
        <div className="flex flex-col gap-0.5">
          <label htmlFor="password" className="">
            Password
          </label>
          <input type="password" className="input" id="password" />
        </div>
        <button className="btn mt-5" onClick={signIn}>
          Sign In
        </button>
      </form>
      <p className="font-medium text-gray mt-2">
        Haven&apos;t signed up yet?
        <Link to="/signup" className="link">
          {" "}
          Sign Up now
        </Link>
      </p>
    </div>
  );
};

export default Signin;
