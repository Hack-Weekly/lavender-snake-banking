import { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const ProtectedRoutes = () => {
	const { user } = useContext(AuthContext);

	return user ? <Outlet /> : <Navigate to="/signin" />;
};

export default ProtectedRoutes;
