import React, { useState, Button} from 'react';
import { Image } from 'react-bootstrap';
import Logo from '../images/Sinag-Logo.png';
import JEHAN from '../images/JHpic.JPG';
import MIAKA from '../images/MDVpic.jpg';
import EARL from '../images/EFNApic.png';
import JC from '../images/JCPpic.png';
import Laptop from '../images/laptop-header.png';

import fd1img from '../images/fd1img.png';
import fd2img from '../images/fd2img.png';
import fd3img from '../images/fd3img.png';
import fd4img from '../images/fd4img.png';
import fd5img from '../images/fd5img.png';
import fd6img from '../images/fd6img.png';

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

    const handleMoreBtnClick = (id) => {
        // toggle the showDetailed property for the corresponding feature object
        setFeatures(prevFeatures => {
          const updatedFeatures = [...prevFeatures];
          updatedFeatures[id - 1] = { ...updatedFeatures[id - 1], showDetailed: !updatedFeatures[id - 1].showDetailed };
          return updatedFeatures;
        });
      };
    const [features, setFeatures] = useState ([
        {
          id: 1,
          img: fd1img,
          title: 'Live Status Updates',
          desc: 'Our dashboard provides live updates on the current power, energy yield, battery life, and environmental parameters.',
          descDetailed: 'With this feature, you can monitor your solar street lights from the comfort of your office all while ensuring that your solar streetlights are always working efficiently, providing a safe and well-lit environment for your community',
          showDetailed: false
        },
        {
          id: 2,
          img: fd2img,
          title: 'Long Range Communication',
          desc: 'Ensure that you are in control of your street lights even if they are situated on different areas.',
          descDetailed: 'LoRa\'s reliable and secure data transmission is made possible by its long-range capabilities, low power consumption, and robustness, which are further enhanced by its unique modulation scheme called "Chirp Spread Spectrum" (CSS), enabling reliable transmission over long distances while using low power and resisting interference.',
          showDetailed: false
        },
        {
          id: 3,
          img: fd3img,
          title: 'Alerting System',
          desc: 'Sends real-time notifications to you about any issues with the system. Notifications can be accessed on the Reports Page.',
          descDetailed: 'The proactive alert feature in our monitoring portal empowers users to respond promptly to any issues that may affect their solar street lights, minimizing downtime and ensuring optimal performance.',
          showDetailed: false
        },
        {
          id: 4,
          img: fd4img,
          title: 'Remote Control',
          desc: 'A physical remote control is included for on-site management of your solar street lights.',
          descDetailed: 'The remote features buttons for Auto, On, Off, Brightness (+), Brightness (-), 3H, 5H, and 8H. The Auto button adjusts lighting output based on ambient light levels, while the On/Off and Brightness (+/-) buttons offer manual control. The 3H, 5H, and 8H buttons allow easy scheduling of lighting, ensuring proper illumination for community safety.',
          showDetailed: false
        },
        {
          id: 5,
          img: fd5img,
          title: 'Cost-Effective Solution',
          desc: 'Our solar streetlight monitoring system offers a cost-effective solution for communities seeking reliable and efficient lighting.',
          descDetailed: ' By using renewable energy and optimizing energy consumption, our system reduces electricity and maintenance costs. Additionally, our remote management feature enables easy on-site control, reducing the need for manual adjustments and maintenance visits.',
          showDetailed: false
        },
        {
          id: 6,
          img: fd6img,
          title: 'Data Analysis',
          desc: 'Sinag includes a powerful data analysis capabilities that enables you to continuously monitor critical system parameters.',
          descDetailed: 'These parameters include battery charge and discharge, energy generation, and battery level. By utilizing data collected from solar street lights, we can promptly detect and address any problems, thereby ensuring that your streetlights function at their best at all times.',
          showDetailed: false
        }
    ])
    
    const FeaturesCard = features.map((fc, id) =>
    <div key={id} className={`feature-card${fc.showDetailed ? ' show-detailed' : ''}`}>
        <img src={fc.img} alt='feature-img' className='fc-img' />
        <p className='feature-title'>{fc.title}</p>
        <p className='feature-desc'>{fc.desc}</p>
        <div className='feature-btn-container'>
            <button className='feature-btn' onClick={() => handleMoreBtnClick(id + 1)}> {fc.showDetailed ? 'See Less' : 'More'}</button>
        </div>
        <p className='feature-desc-detailed'>{fc.descDetailed}</p>
    </div>
    );
    // const FeaturesCard = features.map((fc, id) =>
    //     <div key={id} className={`feature-card${showDesc ? ' show-detailed' : ''}`}>
    //         <img src={fc.img} alt='feature-img' className='fc-img'/>
    //         <p className='feature-title'>{fc.title}</p>
    //         <p className='feature-desc'>{fc.desc}</p>
    //         <button className='feature-btn' onClick={() => handleMoreBtnClick(id)}> {showDesc ? 'Back' : 'More'}</button>
    //         <p className='feature-desc-detailed'>{fc.descDetailed}</p>
    //     </div>
    // );

  

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
                    {FeaturesCard}
                </div>
            </div>

            <div className='dev-section'>
                <h3 className='devs-section-header'>Meet the Developers</h3>
                <div className='dev-card-section d-flex justify-content-center gap-5'>
                    { DeveloperCard }
                </div>
            </div>

            <div className='tools-section'>
                <p className='t-title'>Our Project Toolbox</p>
                <div className='tools-row'>
                    <div className='tools-card'>
                        <img src={reactLogo} alt='ReactLogo'/>
                    </div>
                    <div className='tools-card'>
                        <img src={loraLogo} alt='LoRaLogo'/>
                    </div>
                    <div className='tools-card'>
                        <img src={vscodeLogo} alt='VSLogo'/>
                    </div>
                    <div className='tools-card'>
                        <img src={gsheetsLogo} alt='GSheetsLogo'/>
                    </div>
                    <div className='tools-card'>
                        <img src={arduinoLogo} alt='ArduinoLogo'/>
                    </div>
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