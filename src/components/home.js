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


function Home() {
    const [page, setPage] = useState('');
    const handlePage = (Page) => {
        setPage(Page);
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
                <img className='laptop-img' src={Laptop} alt='Laptop'  />
                <p className='title'>SINAG</p>
                <p className='mb-4'>Bringing sustainable illumination <br></br> for a brighter and greener future</p>
                <button className='learn-btn'>Learn More </button>
            </div>
            <div className='project-desc'>
                <img className='hpi1-img' src={hpi1} alt='image'  />  
                <p className='tl-1'>Centralized Monitoring System</p>  
                <p className='desc1'>
                    Combining the design of the Internet of Things technology and wireless communication technology, SINAG is a smart solution that allows remote monitoring and management of solar-powered street lights. The system is equipped with sensors and communication devices that gather real-time data on the performance and status of the street lights which will then be transmitted to a centralized monitoring station for analyzation.
                </p>

                <img className='hpi2-img' src={hpi2} alt='image'  />  
                <p className='tl-2'>LoRa Wireless Communication Technology</p>  
                <p className='desc2'>
                One of Sinag's key features is the usage of LoRa technology as its medium of communication between the gateway and the end-devices. LoRa (Long Range) wireless communication technology gained popularity due to its advantages for different IoT applications. Some of these advantages include its long-range communication capability, low power consumption, cost-effectiveness, high capacity, and easy deployment. 
                </p>

                <img className='hpi1-img' src={hpi3} alt='image'  />  
                <p className='tl-1'>Data Analysis for Early Anomaly Detection</p>  
                <p className='desc1'>
                    Combining the design of the Internet of Things technology and wireless communication technology, SINAG is a smart solution that allows remote monitoring and management of solar-powered street lights. The system is equipped with sensors and communication devices that gather real-time data on the performance and status of the street lights which will then be transmitted to a centralized monitoring station for analyzation.
                </p>
                
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
        </div>
    )
}

export default Home;