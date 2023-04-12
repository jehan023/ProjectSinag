import React from 'react';
import '../App.scss';
import hpi1 from '../images/hp-image-1.gif';
import hpi2 from '../images/hp-image-2.gif';
import hpi3 from '../images/hp-image-3.gif';
import header from '../images/product_header.svg';

function productOverview() {
    
    
    return (
        <div className='productOverview-container'>
            <div className='header'>
                <p className='header-desc'>WELCOME TO SINAG</p>
                <p className='header-desc2'>A Lora-based Centralized Monitoring System for Solar Street Lights</p>
            </div>

            <div className='content-container'>
                <div className='content-desc-container'>
                    <p className='content-desc'> We are excited to share with you our project which aims to provide sustainable and efficient illumination for streets while also reducing energy costs and carbon footprint. In this page, you will find detailed information about our project, including technical specifications of our system. Additionally, we will also explain the social and environmental impact of our project, discussing the community benefits and economic contributions that our system can provide. We hope that this web page will give you a better understanding of our project and how it can make a positive impact on your community.</p>
                </div>
                <p className='content-title'>Goals and Objective</p>
                <div className='content-desc-container'>
                    <p className='content-desc'>At our core, our project is driven by a mission to bring sustainable illumination to communities around the world while reducing maintenance costs. Our goals and objectives are centered around achieving this mission by creating a system for early anomaly detection that is efficient, effective, and user-friendly.</p>
                    <p className='content-desc-title'>Our Goals</p>
                    <ul className='content-desc-title-desc'>
                        <li>Develop a centralized monitoring system that detects anomalies in real-time</li>
                        <li>Reduce maintenance costs and prolong the lifespan of street lights</li>
                        <li>Promote sustainable and eco-friendly lighting solutions</li>
                        <li>Foster community development through the provision of better lighting and increased safety</li>
                    </ul>
                    <p className='content-desc-title'>Our Objectives</p>
                    <ul>
                        <li>Implement machine learning algorithms for early anomaly detection in the system</li>
                        <li>Utilize LoRa wireless communication protocol for efficient and secure communication between the lights and the central monitoring system</li>
                        <li>Utilize renewable energy sources, such as solar power, to reduce energy costs and environmental impact</li>
                        <li>Provide a user-friendly interface for easy system management and maintenance</li>
                    </ul>
                </div>
                
                <div className='content-desc-container'>
                    <p className='content-title'>Overview of the Project</p>
                    <p className='content-desc'>Our Lora-based Centralized Monitoring System for Solar Street Lights is an innovative solution that addresses the growing demand for sustainable and efficient street lighting. With our system, we provide real-time monitoring and control of solar street lights, reducing maintenance costs and extending the lifespan of the lights.</p>
                    <p className='content-desc'>Our system utilizes the LoRa wireless communication protocol, which enables efficient and secure communication between the solar street lights and the central monitoring system. This allows for real-time monitoring of the lights, as well as remote control of the lighting system.</p>
                    <p className='content-desc'>One of the key features of our system is the implementation of machine learning algorithms for early anomaly detection. This helps to detect issues with the lighting system before they become major problems, reducing the need for expensive maintenance and repair work.</p>
                    <p className='content-desc'>Our system is designed to be user-friendly and easy to manage. The centralized monitoring system provides a simple interface for system management and maintenance, allowing users to easily monitor the status of each light and make adjustments as needed.</p>
                    <p className='content-desc'>Overall, our Lora-based Centralized Monitoring System for Solar Street Lights is an innovative solution that promotes sustainable and eco-friendly lighting solutions while reducing maintenance costs and promoting community development. We are excited to share our project with you and look forward to contributing to a brighter and greener future.</p>
                </div>

                <div className='content-desc-container'>
                    <p className='content-title'>Techinical Specifications</p>
                    <p className='content-desc'>Desc</p>
                </div>

                <p className='content-title'>Community Impact</p>
                <div className='content-desc-container'>
                    <p className='content-desc'>Our Lora-based Centralized Monitoring System for Solar Street Lights is designed to make a positive impact on the communities where it is implemented. By providing better lighting and increased safety on the streets, the project can improve the quality of life for residents in the area. Here are some of the ways that our project can have a community impact:</p>
                    <p className='content-desc-title'>Better Lighting and Increased Safety</p>
                    <ul>
                        <li>Improved visibility for drivers and pedestrians</li>
                        <li>Reduced risk of accidents and crime</li>
                        <li>Increased feelings of security for residents</li>
                    </ul>
                    <p className='content-desc-title'>Sustainable and Greener Environment</p>
                    <ul>
                        <li>Reduced energy consumption and carbon footprint</li>
                        <li>Support for sustainable development and global climate goals</li>
                        <li>Increased awareness of environmental issues</li>
                    </ul>
                    <p className='content-desc-title'>Local Economic Development</p>
                    <ul>
                        <li>Reduced energy costs for municipalities</li>
                        <li>Local job opportunities in installation and maintenance</li>
                        <li>More resources available for other community projects</li>
                    </ul>
                    <p className='content-desc'>We believe that our project can create a more vibrant and livable community by bringing sustainable illumination for a brighter and greener future.</p>

                </div>

            </div>

            {/* <div className='project-desc'>
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
            </div> */}

        </div>
    )
}

export default productOverview;