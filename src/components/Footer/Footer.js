import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div>
            <div className='footer'>
                <div style={{ marginLeft: '20px' }}>
                    <ul>
                        <li>FAQ</li>
                        <li>Rewiews</li>
                        <li>Ranking</li>
                    </ul>
                </div>
                <div style={{ marginLeft: '60%' }}>
                    <h4>Our Location </h4>
                    <p>Road- 00, Block- 00</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;