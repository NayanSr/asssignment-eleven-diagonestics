import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Service from './Service';
import './Services.css'

const Services = () => {
    const [test, setTest] = useState([]);


    const url = 'allTest.json';
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setTest(data))
    }, [])
    return (
        <div>
            <h4 style={{ color: 'white', background: 'DarkGreen', paddingBottom: '10px' }}>Tests & description</h4>
            <div className='cards-grid'>
                {
                    test.map(singleTest => <Service
                        key={singleTest.id}
                        test={singleTest}
                    >
                    </Service>)
                }
            </div>
        </div>
    );
};

export default Services;