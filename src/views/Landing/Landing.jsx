import React from 'react';
import { Link } from 'react-router-dom';
import './Landing.css';
import logo from '../../assets/Imagologo_motion.svg';

const LandingPage = () => {
    return (
        
        <div className="landing-container">
            <div>
                <Link className='redirection' to='/home'>
                    <img src={logo} alt="logo" className='logo-direction' />
                    <h2>Ir a la App</h2>
                </Link>
                <div className="text-background">
                    <h1>BIENVENIDO A</h1>
                </div>
                <div className="text-foreground">
                    <h2 >Monitoring Innovation</h2>
                </div>
            </div>
            <div className="contenedor-enlaces">
                <a href="https://monitoringinnovation.com/" className="enlace">MONITORING INNOVATION</a>
                <a href="https://gpscontrol.co/" className="enlace">GPS CONTROL</a>
                <a href="https://github.com/Imcamiloup/cars_dealership-frontend" className="enlace">Link repo front</a>
                <a href="https://github.com/Imcamiloup/cars_dealership-backend " className="enlace">Link repo back</a>
            </div>
            
        </div>
    );
};

export default LandingPage;
