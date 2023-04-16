import React from 'react';
import '../App.scss';
import JEHAN from '../images/JHpic.JPG';
import MIAKA from '../images/MDVpic.jpg';
import EARL from '../images/EFNApic.png';
import JC from '../images/JCPpic.png';

function AboutUs() {

    return(
        <div className='aboutus-container'> 
        
            <div className='header'>
                    <p className='header-desc'>About Us</p>
                    {/* <p className='header-desc2'>Illuminating your community, one street light at a time.</p> */}
            </div>

            <div className='content-container'>
                <p className='title'>Meet the Developers</p>
                <div className='dev-card'>
                    <img className='dev-img' src={EARL} alt='image'/>
                    <div className='dev-info'>
                        <p className='dev-name'>ALLADA, Earl Frances Nicoli C.</p>
                        <p className='dev-desc'>short desc</p>
                        </div>
                </div>
                <div className='dev-card'>
                    <img className='dev-img' src={MIAKA} alt='image'/>
                    <div className='dev-info'>
                        <p className='dev-name'>DE VERA, Miaka Nicole L.</p>
                        <p className='dev-desc'>short desc</p>
                    </div>
                </div>
                <div className='dev-card'>
                    <img className='dev-img' src={JEHAN} alt='image'/>
                    <div className='dev-info'>
                        <p className='dev-name'>HADJISAID, Jehan L.</p>
                        <p className='dev-desc'>short desc</p>
                    </div>
                </div>
                <div className='dev-card'>
                    <img className='dev-img' src={JC} alt='image'/>
                    <div className='dev-info'>
                        <p className='dev-name'>PANGANIBAN, John Carlo D.</p>
                        <p className='dev-desc'>short desc</p>
                    </div>
                </div>
            </div>


        </div>

       
    )
}

export default AboutUs;