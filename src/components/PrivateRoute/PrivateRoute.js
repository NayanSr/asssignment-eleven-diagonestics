import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
    const { user, isLoading } = useAuth();

    let location = useLocation();

    if (isLoading) {
        return <Spinner animation="border" variant="danger" />
    };

    // if(isLoading){return <CircularProgress/>}
    if (user.email) {
        return children;
    }
    return <Navigate to='/login' state={{ from: location }} />

};

export default PrivateRoute;