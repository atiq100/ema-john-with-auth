import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../contexts/UserContext';
import Spinner from '../Spinner/Spinner';

const PrivateRoute = ({children}) => {
    const {user,loading}=useContext(AuthContext)
    const location = useLocation()

    if(loading){
        return <Spinner></Spinner>
    }
    if(user && user.uid){
        return children
    }
    return <Navigate to='/login' state={{from: location}} replace></Navigate>
};

export default PrivateRoute;