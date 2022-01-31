import React from 'react';
import './Upcomming.css'
import hospital from '../../Images/hospital.jpg'
import ambulance from '../../Images/ambulance.jpg'

const Upcomming = () => {
    return (
        <div>
            <div>
                <section className='hospital'>
                    <div>
                        <img src={hospital} alt="" />
                    </div>
                    <div>
                        <p>We are hery greatull to inform you that, we are planning to open a hospital service. There we will give patient better service at a lower cost with all modern facilities. a discounted ambulance service will given to our patient.</p>
                    </div>
                </section>

                <section className='ambulance'>
                    <div>
                        <p>At present we have ambulance service only for our patient. After a few monthe month we are adding more ambulance to give service not only for our patient but also for other patient as on call. This service will available inside city and also outside with a minimum cost. </p>
                    </div>
                    <div>
                        <img src={ambulance} alt="" />
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Upcomming;