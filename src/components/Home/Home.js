import React from 'react';
import './Home.css'
import banner1 from '../../Images/Banner/B1.jpg'
import banner2 from '../../Images/Banner/B2.jpg'
import banner3 from '../../Images/Banner/B3.jpg'
import lab from '../../Images/Laboratory.jpg'


const Home = () => {
    return (
        <div>

            <section >
                <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img style={{ height: '500px', marginTop: '0px' }} src={banner1} class="d-block w-100" alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img style={{ height: '500px', marginTop: '0px' }} src={banner2} class="d-block w-100" alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img style={{ height: '500px', marginTop: '0px' }} src={banner3} class="d-block w-100" alt="..." />
                        </div>
                    </div>
                </div>
            </section>

            <section className='cards'>
                <div>
                    <h3>Appointments</h3><br />
                    <button>Appoint now</button>
                </div>
                <div>
                    <h3>Our Doctors</h3>
                    <br />
                    <button>Find doctors</button>
                </div>
                <div>
                    <h3>Our Activities</h3>
                    <br />
                    <button>Visit now</button>
                </div>
            </section>

            <section className='lab'>
                <div>
                    <img src={lab} alt="" />
                </div>
                <div style={{ backgroundColor: 'GhostWhite' }}>
                    <h3 style={{ textAlign: 'start', padding: '10px', color: 'DarkGreen' }}>Before appointing please visit our environment</h3>
                    <br />
                    <p>Our main goal is customer satisfection. We always try to give a better service for all our customer. For  better we give 24 hour service. All our lab designed with update equipment and all our staff are well experienced.</p>
                </div>
            </section>

        </div>
    );
};

export default Home;