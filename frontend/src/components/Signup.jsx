import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="flex flex-col items-center">
      <p>Signup</p>
      <p>
        Signed up already? <Link to="/signin">Sign In</Link>
      </p>
    </div>
  );
};

export default Signup;
