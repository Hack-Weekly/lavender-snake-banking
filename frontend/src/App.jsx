import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Payments from "./components/Payments.jsx";
import Home from "./components/Home.jsx";
import Signup from "./components/Signup.jsx";
import Signin from "./components/Signin.jsx";
import Dashboard from "./components/Dashboard.jsx";
import Deposits from "./components/Deposits.jsx";
import AuthContextProvider from "./context/AuthContext.jsx";
import RootLayout from "./components/layouts/RootLayout.jsx";
import ProtectedRoutes from "./utils/ProtectedRoutes.jsx";

function App() {
  return (
    <>
      <Router>
        <AuthContextProvider>
          <Routes>
            <Route element={<RootLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/signin" element={<Signin />} />
            </Route>
            <Route element={<ProtectedRoutes />}>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/payments" element={<Payments />} />
              <Route path="/deposits" element={<Deposits />} />
            </Route>
          </Routes>
        </AuthContextProvider>
      </Router>
    </>
  );
}

export default App;
