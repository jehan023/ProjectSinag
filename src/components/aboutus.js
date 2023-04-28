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
                        <p className='dev-desc'>Earl Frances Nicoli C. Allada is a 4th Year Computer Engineering student at Polytechnic University of the Philippines. Currently, she works remotely for a US-based company to fund her studies and daily expenses. Her interests involve being a product analyst which monitors product performance and recommend solutions to meet the company forecasts.</p>
                        </div>
                </div>
                <div className='dev-card'>
                    <img className='dev-img' src={MIAKA} alt='image'/>
                    <div className='dev-info'>
                        <p className='dev-name'>DE VERA, Miaka Nicole L.</p>
                        <p className='dev-desc'>Miaka Nicole L. de Vera is a 4th Year Computer Engineering student studying at Polytechnic University of the Philippines. Throughout her student years, she has been a consistent honor student. At present, she is passionate on creating different user interface design and is exploring different sites and software that will help enhance her skills and creativity. With good determination and proper mindset, she believes that she will become what she aspires to be on her own pace.</p>
                    </div>
                </div>
                <div className='dev-card'>
                    <img className='dev-img' src={JEHAN} alt='image'/>
                    <div className='dev-info'>
                        <p className='dev-name'>HADJISAID, Jehan L.</p>
                        <p className='dev-desc'>Jehan Hadjisaid is a computer engineering student at the Polytechnic University of the Philippines. During his senior year of high school, he had a co-authorship on a research paper that was published in the Central Asian Journal of Global Health 2020. The research paper is entitled "Online Game Addiction and the Level of Depression Among Adolescents in Manila, Philippines." Also, he was a Philippine Robotics Olympiad finalist in 2016.</p>
                    </div>
                </div>
                <div className='dev-card'>
                    <img className='dev-img' src={JC} alt='image'/>
                    <div className='dev-info'>
                        <p className='dev-name'>PANGANIBAN, John Carlo D.</p>
                        <p className='dev-desc'>John Carlo Panganiban is a Polytechnic University of the Philippines student studying Computer Engineering. He had been academically proficient in his high school years to attain a medal merited "with Honors" during his high school years. He is currently interested about the application of LoRa in centralized monitoring systems for street lights.</p>
                    </div>
                </div>
            </div>


        </div>

       
    )
}

export default AboutUs;