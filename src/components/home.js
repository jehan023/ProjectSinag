import React from 'react';
import { Image } from 'react-bootstrap';
import Logo from '../images/Sinag-Logo.png';
import JEHAN from '../images/JHpic.JPG';
import MIAKA from '../images/MDVpic.jpg';
import EARL from '../images/EFNApic.png';
import JC from '../images/JCPpic.png';

function Home() {
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
            <div className='project-desc'>
                <h2 className='mb-4'>What is SINAG?</h2>
                <p>
                Combining the design of the Internet of Things technology and wireless communication technology, SINAG is a smart solution that allows remote monitoring and management of solar-powered street lights. The system is equipped with sensors and communication devices that gather real-time data on the performance and status of the street lights which will then be transmitted to a centralized monitoring station for analyzation. This also enables fault detection and alert notification to promote proactive response and guarantee long-term viability. 
                </p>
                <p>
                With SINAG, public energy consumption will be reduced, sense of security will be established, clearer view of hazards will be provided, and the community's quality of life will be increased.
                </p>
            </div>

            <div className='dev-section'>
                <h3 className='devs-section-header'>Meet the Developers</h3>
                <div className='d-flex justify-content-between gap-4 mt-4'>
                    <div className='img-dev-rect'>image</div>
                    <div>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nulla tortor, viverra facilisis laoreet id, facilisis et felis. Nunc feugiat purus vel nulla vestibulum, in venenatis nunc mollis. Mauris efficitur semper libero, eget pellentesque metus pellentesque vel. In dictum neque et nisl venenatis egestas. Sed et tincidunt orci. Suspendisse vel aliquam libero. Nunc vitae velit ligula. Pellentesque rutrum mattis iaculis. In consequat ac dolor quis gravida. Integer faucibus eleifend nulla ac tempor. Duis egestas purus nec ipsum blandit, vel sodales diam pulvinar.
                        </p>
                    </div>
                </div>
                <div className='dev-card-section d-flex justify-content-center gap-5'>
                    { DeveloperCard }
                </div>
            </div>
        </div>
    )
}

export default Home;