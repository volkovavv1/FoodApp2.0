import { useContext } from "react"
import { Navigate } from "react-router-dom";

import { AuthContext } from "../context/AuthContext";
"../context/"

const PrivateRoute = ({ children }) => {
    let { currentUser } = useContext(AuthContext);

    if (currentUser === null) {
        return <Navigate to='/login'  />
    }

    return children
}

export default PrivateRoute