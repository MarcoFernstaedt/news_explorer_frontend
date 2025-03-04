import { Navigate, useOutletContext } from "react-router-dom";

const ProtectedRoute = ({ element }) => {
  const { isLoggedIn } = useOutletContext(); // Get login state

  return isLoggedIn ? element : <Navigate to="/" replace />;
};

export default ProtectedRoute;
