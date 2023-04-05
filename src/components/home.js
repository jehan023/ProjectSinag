import React, { useState, Button} from 'react';
import { Image } from 'react-bootstrap';
import Logo from '../images/Sinag-Logo.png';
import JEHAN from '../images/JHpic.JPG';
import MIAKA from '../images/MDVpic.jpg';
import EARL from '../images/EFNApic.png';
import JC from '../images/JCPpic.png';
import Laptop from '../images/laptop-header.png';

import reactLogo from '../images/react-logo.png';
import loraLogo from '../images/lora-logo.png';
import arduinoLogo from '../images/arduino-logo.png';
import gsheetsLogo from '../images/gsheets-logo.jpg';
import vscodeLogo from '../images/vscode-logo.png';





function Home(props) {
    const {page, handlePage} = props; 


    const developer = [
        { name: 'ALLADA, EARL FRANCES NICOLI', email: 'alladaearlfrances@gmail.com', role: 'Developer', dp: EARL },
        { name: 'DE VERA, MIAKA NICOLE', email: 'devera.mnl@gmail.com', role: 'Developer', dp: MIAKA },
        { name: 'HADJISAID, JEHAN', email: 'jehanlaohadjisaid@gmail.com', role: 'Developer', dp: JEHAN },
        { name: 'PANGANIBAN, JOHN CARLO', email: 'JcPanganiban6@gmail.com', role: 'Developer', dp: JC }
    ];

    const DeveloperCard = developer.map(dev =>
        <div className='dev-card text-center d-flex align-items-center flex-column'>
            {/* <div className='dev-image'><img src='' alt='img-dev'/></div> */}
            <Image src={dev.dp} alt='img-dev' className='dev-image mb-2' roundedCircle></Image>
            <p>{dev.name}</p>
            <p>{dev.email}</p>
            <p>{dev.role}</p>
        </div>
    );

    

    return (
        <div className='home-container'>
            <div className='header'>
                <img className='laptop-img' src={Laptop} alt='Laptop'/>
                <div className='header-content'>
                <p className='title'>SINAG</p>
                <p className='mb-4'>Bringing sustainable illumination <br></br> for a brighter and greener future</p>
                <div className='learn-btn-container'>
                    <button className={page === 'Home'? 'learn-btn' : 'learn-btn hide-on-page'} onClick={() => { handlePage('ProductOverview') }}>Learn More </button>
                </div>
                </div>
            </div>
            
            <div className='features-desc'>
                <p className='fd-title'>Our Features</p>
                <p className='fd-desc'>Discover how our innovative technology allows you to remotely monitor and optimize the performance of your solar streetlights, reducing costs and increasing efficiency.</p>
                
                <div className='feature-card-container'>
                    <div className='feature-card'>
                        {/* <img className='fc-img1' src={hpi2} alt='image'  /> */}
                        
                        <p className='feature-desc'>Our dashboard provides live updates on the current power, energy yield, battery life, environmental parameters and lighting output of each streetlight. With this feature, you can monitor your solar street lights from the comfort of your office all while ensuring that your solar streetlights are always working efficiently, providing a safe and well-lit environment for your community</p>
                        <p className='feature-title'>Live Status Updates</p>
                    </div>

                    <div className='feature-card'>
                        
                        <p className='feature-desc'>With our LoRa-based monitoring System, you can manage you street lights even if they are located in different area. This also ensures reliable and secure data transmission, so you can guarantee that all data transmitted and received are safe and accurate. </p>
                        <p className='feature-title'>Long Range Communication</p>
                    </div>

                    <div className='feature-card'>
                        
                        <p className='feature-desc'>Our system optimizes energy consumption by ensuring that all energy are used productively. An automated dimming function is implemented to adjust the lighting output based on the available energy, ensuring that the solar street lights are always operating efficiently. This feature reduces energy waste, prolonging the battery life of the solar streetlights.</p>
                        <p className='feature-title'>Energy Optimization</p>
                    </div>

                    <div className='feature-card'>
                        
                        <p className='feature-desc'>An alerting system is included with our system that notifies you of any issues with your solar street lights. This enables efficient response to issues, minimizing downtime. With our alerting system, you can have a peace of mind knowing that any problems with your solar street lights will be addressed promptly.</p>
                        <p className='feature-title'>Alerting System</p>
                    </div>

                    <div className='feature-card'>
                        
                        <p className='feature-desc'>Feature 5 Desc</p>
                        <p className='feature-title'>Cost-Effective Solution</p>
                    </div>

                    <div className='feature-card'>
                        
                        <p className='feature-desc'>Feature 6 Desc</p>
                        <p className='feature-title'>Data Analysis</p>
                    </div>
                </div>
            </div>

            <div className='dev-section'>
                <h3 className='devs-section-header'>Meet the Developers</h3>
                <div className='d-flex justify-content-between gap-4 mt-4'>
                    {/*<div className='img-dev-rect'>image</div>
                    <div>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nulla tortor, viverra facilisis laoreet id, facilisis et felis. Nunc feugiat purus vel nulla vestibulum, in venenatis nunc mollis. Mauris efficitur semper libero, eget pellentesque metus pellentesque vel. In dictum neque et nisl venenatis egestas. Sed et tincidunt orci. Suspendisse vel aliquam libero. Nunc vitae velit ligula. Pellentesque rutrum mattis iaculis. In consequat ac dolor quis gravida. Integer faucibus eleifend nulla ac tempor. Duis egestas purus nec ipsum blandit, vel sodales diam pulvinar.
                        </p>
                    </div>*/}
                </div>
                <div className='dev-card-section d-flex justify-content-center gap-5'>
                    { DeveloperCard }
                </div>
            </div>

            {/* <div className='slider-container'>
                <div className='slider'>
                   
                    <div className='slide'><img src={reactLogo} alt='ReactLogo'/></div>
                    <div className='slide'><img src={loraLogo} alt='LoRaLogo'/></div>
                    <div className='slide'><img src={arduinoLogo} alt='ArduinoLogo'/></div>
                    <div className='slide'><img src={gsheetsLogo} alt='GSheetsLogo'/></div>
                    <div className='slide'><img src={vscodeLogo} alt='VSLogo'/></div>
                    <div className='slide'><img src={reactLogo} alt='ReactLogo'/></div>

                    <div className='slide'><img src={loraLogo} alt='LoRaLogo'/></div>
                    <div className='slide'><img src={arduinoLogo} alt='ArduinoLogo'/></div>
                    <div className='slide'><img src={gsheetsLogo} alt='GSheetsLogo'/></div>
                    <div className='slide'><img src={vscodeLogo} alt='VSLogo'/></div>
                    <div className='slide'><img src={reactLogo} alt='ReactLogo'/></div>
                    
                </div>
            </div> */}
        </div>
    )
}

export default Home;