import { useContext } from "react";
import { AuthContext } from "../Routes/AuthProviders";

const useAuth = () => {
   const auth = useContext(AuthContext);

   return auth; 

    
};

export default useAuth;