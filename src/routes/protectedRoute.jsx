import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../context/userContext";
import PropTypes from "prop-types";

function ProtectedRoute({ children }) {
  const { login } = useContext(UserContext);

  if (login === true) {
    return children;
  } else if (!login === false) {
    <Navigate to="/login" />;
  } else {
    return <></>;
  }
}

export default ProtectedRoute;

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
};
