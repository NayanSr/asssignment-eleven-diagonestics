import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div style={{ height: '78vh' }}>
            <h6>Page Not Found</h6>
            <br /><br /><br />
            <Link style={{ textDecoration: 'none', backgroundColor: 'tomato', padding: '4px 8px', color: 'white' }} to='/home'>Go to Home</Link>
        </div>
    );
};

export default NotFound;