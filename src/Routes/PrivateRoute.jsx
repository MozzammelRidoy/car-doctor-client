import { useContext } from 'react';
import { AuthContext } from './AuthProviders';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext); 
    if(loading){
        return <div><span className="loading loading-bars text-center loading-lg"></span>
</div>
    }

    if(user){
        return children; 
    }

    return <Navigate to={'/login'} replace></Navigate>
};

export default PrivateRoute;