import React, { useState} from 'react';
import { Image } from 'react-bootstrap';
import Logo from '../images/Sinag-Logo.png';
import JEHAN from '../images/JHpic.JPG';
import MIAKA from '../images/MDVpic.jpg';
import EARL from '../images/EFNApic.png';
import JC from '../images/JCPpic.png';
import Laptop from '../images/laptop-header.png';
import hpi1 from '../images/hp-image-1.gif';
import hpi2 from '../images/hp-image-2.gif';
import hpi3 from '../images/hp-image-3.gif';
import usermanual from '../files/SinagUserManual.pdf';
import reactLogo from '../images/react-logo.png';
import loraLogo from '../images/lora-logo.png';
import arduinoLogo from '../images/arduino-logo.png';
import gsheetsLogo from '../images/gsheets-logo.jpg';
import vscodeLogo from '../images/vscode-logo.png';



function Home() {
    const openPDF = () => {
        window.open(usermanual);
    };

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
                <button className='learn-btn' onClick={openPDF}>Learn More </button>
                </div>
            </div>
            <div className='project-desc'>
                <div className='content-container'>
                    <img className='hpi1-img' src={hpi1} alt='image'/>  
                    <div className='desc-container'>
                        <p className='tl'>Centralized Monitoring System</p>  
                        <p className='desc'>
                            Sinag is a LoRa-based centralized monitoring system for solar street lights that allows users to monitor and manage all the solar lamps on a single platform. Both the street lights and gateway are embedded with a tranceiver module and an antenna. The gateway functions as a bridge by providing a communication link between the end nodes (street lights) and the centralized monitoring system. The gateway sends a request to the end node to send its data. Once the request has been received, the sensor readings will be encoded. The data will be sent to the gateway prior to the request, transmitting it to the centralized monitoring system for analyzation.   
                        </p>
                    </div>
                </div>

                <hr className='hr-divider'/>

                <div className='content-container'>
                    <img className='hpi2-img' src={hpi2} alt='image'  />
                    <div className='desc-container'>
                        <p className='tl'>LoRa Wireless Communication Technology</p>  
                        <p className='desc'>
                        One of Sinag's key features is the usage of LoRa technology as its medium of communication between the gateway and the end-devices. LoRa (Long Range) wireless communication technology gained popularity due to its advantages for different IoT applications. Some of these advantages include its long-range communication capability, low power consumption, cost-effectiveness, high capacity, and easy deployment. 
                        </p>
                    </div>
                </div>
                
                <hr className='hr-divider'/>
                
                <div className='content-container'>
                    <img className='hpi1-img' src={hpi3} alt='image'/>  
                    <div className='desc-container'>
                        <p className='tl'>Data Analysis for Early Anomaly Detection</p>  
                        <p className='desc'>
                            Data analysis plays a crucial role in a monitoring portal in detecting unusual events that cause system failure and performance issues. Early detection of anomalies not only prevents severe damage to the system, it also saves resources and ensures system availability and stability.
                        </p>
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

            <div className='slider-container'>
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
            </div>
        </div>
    )
}

export default Home;