import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <p className="text-xl">Welcome to Lavender Bank</p>
      <div>
        <Link to="/signin">Sign In</Link>
      </div>
      <div>
        <Link to="/dashboard">Go to Dashboard</Link>
      </div>
    </>
  );
};

export default Home;
