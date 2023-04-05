import React from 'react';
import '../App.scss';
import hpi1 from '../images/hp-image-1.gif';
import hpi2 from '../images/hp-image-2.gif';
import hpi3 from '../images/hp-image-3.gif';

function productOverview() {
    
    
    return (
        <div className='productOverview-container'>
            <div className='header'>
                <p>Sinag Features</p>

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

        </div>
    )
}

export default productOverview;