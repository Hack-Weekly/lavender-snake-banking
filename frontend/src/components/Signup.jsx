import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="flex flex-col items-center gap-6">
      <h1 className="text-5xl font-bold">Welcome!</h1>
      <p className="text-grey text-lg text-center">
        Please provide following details for creating new account
      </p>
      <form className="flex flex-col gap-3 w-80">
        <div className="flex flex-col gap-0.5">
          <label htmlFor="fullname" className="">
            Full Name
          </label>
          <input type="text" className="input" id="fullname" />
        </div>
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
        <div className="flex flex-col gap-0.5">
          <label htmlFor="password-confirmation" className="">
            Confirm Password
          </label>
          <input type="password" className="input" id="password-confirmation" />
        </div>
        <button className="btn mt-5">Sign Up</button>
      </form>
      <p className="font-medium text-gray mt-2">
        Signed up already?{" "}
        <Link to="/signin" className="link">
          Sign In
        </Link>
      </p>
    </div>
  );
};

export default Signup;
