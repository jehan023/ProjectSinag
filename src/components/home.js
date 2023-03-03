import React from 'react';
import { Image } from 'react-bootstrap';
import Logo from '../images/Sinag-Logo.png';
import JEHAN from '../images/JHpic.JPG';

function Home() {
    const developer = [
        { name: 'ALLADA, EARL FRANCES NICOLI', email: 'email@gmail.com', role: 'Developer', dp: Logo },
        { name: 'DE VERA, MIAKA NICOLE', email: 'email@gmail.com', role: 'Developer', dp: Logo },
        { name: 'HADJISAID, JEHAN', email: 'jehanlaohadjisaid@gmail.com', role: 'Developer', dp: JEHAN },
        { name: 'PANGANIBAN, JOHN CARLO', email: 'email@gmail.com', role: 'Developer', dp: Logo }
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
                <h3 className='mb-4'>What is SINAG?</h3>
                <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.
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