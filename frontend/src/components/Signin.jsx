import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";

const Signin = () => {
  const { setUser } = useContext(AuthContext);

  const signIn = () => {
    setUser("123");
  };

  return (
    <div className="flex flex-col items-center">
      <h1>Sign In</h1>
      <button onClick={signIn}>Sign In</button>
      <p>
        Haven&apos;t signed up yet? <Link to="/signup">Sign Up now</Link>
      </p>
      <Link to="/dashboard">Go to dashboard</Link>
    </div>
  );
};

export default Signin;
