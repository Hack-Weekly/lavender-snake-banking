import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Signin = () => {
  const { user, setUser } = useContext(AuthContext);

  console.log(user);
  return (
    <div className="flex flex-col">
      <h1>Sign In</h1>
      <button onClick={() => setUser("123")}>Sign In</button>
    </div>
  );
};

export default Signin;
