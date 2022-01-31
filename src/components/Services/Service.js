import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = (props) => {
    const { id, name, img, description } = props.test;
    return (
        <div className='single-service'>
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h3>{name}</h3>
                <p> {description.slice(0, 150)} </p>
                <Link to={`/service/${id}`}>
                    <button>Details</button>
                </Link>
            </div>
        </div>
    );
};

export default Service;