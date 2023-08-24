import { useContext } from "react";
import { AuthContext } from "../contexProvider/AuthProvider";


const useAuth = () => {
    const auth = useContext(AuthContext);
    return auth;
};

export default useAuth;