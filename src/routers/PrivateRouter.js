import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../contexts/UserContext';
import loader from '../images/loader.gif';

const PrivateRouter = ({children}) => {
    
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    if(user && user.uid){
        return children;
    }

    if(loading){
        return <div>
            <img src={loader} alt="loader" />
        </div>
    }
    
    return <Navigate to='/login' state={{from: location}} replace></Navigate>

};

export default PrivateRouter;