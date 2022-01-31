import React from 'react';
import useAuth from '../../../hooks/useAuth';
import './Lofin.css';

const Login = () => {
    const { signInUsingGoogle } = useAuth();
    return (
        <div className='login'>
            <h5>Please log in</h5>
            <button onClick={signInUsingGoogle} className='btn btn-primary'>Google Signin</button>
        </div>
    );
};

export default Login;