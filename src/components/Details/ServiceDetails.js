import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ServiceDetails = () => {
    const { serviceId } = useParams();
    const [test, setTest] = useState({});


    useEffect(() => {
        const url = `allTest.json/${serviceId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setTest(data))
    }, []);

    return (
        <div style={{ height: '78vh' }}>
            <h6>this service details of : {serviceId}</h6>
            <h4>Name: {test.name}</h4>
        </div>
    );
};

export default ServiceDetails;