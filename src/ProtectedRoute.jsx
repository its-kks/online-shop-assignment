import { Navigate } from "react-router-dom";
import { getCookie } from "./functions";

function ProtectedRoute({children}){
    const token = getCookie("token");

    if(token){
        return children;
    }
    else{
        return <Navigate to="/" replace />;
    }
}

export default ProtectedRoute;