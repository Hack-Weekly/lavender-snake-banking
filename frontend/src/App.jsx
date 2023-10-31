import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signup from "./components/Signup.jsx";
import Signin from "./components/Signin.jsx";
import AuthContextProvider from "./context/AuthContext.jsx";
import RootLayout from "./components/layouts/RootLayout.jsx";
import DashboardLayout from "./components/layouts/DashboardLayout.jsx";
import { navOptions } from "./constants/navOptions.js";

function App() {
  return (
    <>
      <Router>
        <AuthContextProvider>
          <Routes>
            <Route element={<RootLayout />}>
              <Route path="/signup" element={<Signup />} />
              <Route path="/signin" element={<Signin />} />
            </Route>
            {/* <Route element={<ProtectedRoutes />}> */}
            <Route element={<DashboardLayout />}>
              {navOptions.map((navOption) => {
                return (
                  <Route
                    key={navOption.name}
                    path={navOption.path}
                    element={<navOption.element />}
                  />
                );
              })}
            </Route>
            {/* </Route> */}
          </Routes>
        </AuthContextProvider>
      </Router>
    </>
  );
}

export default App;
