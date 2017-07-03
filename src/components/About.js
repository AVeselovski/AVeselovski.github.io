// libs
import React from 'react';
// assets
import FaceImg from '../assets/face.png';

export default class About extends React.Component {
    render() {
        return (
            <section className="about">
                <div className="container">
                    <div className="info-container-1">
                        <img src={FaceImg} alt={'My Face'} />
                        <div className="basic-info">
                            <h2>Welcome!</h2>
                            <p>My name is Artur and I'm studying Media Technology at Jyväskylä University of Applied Sciences, 
                            currently at my third academic year. My goal is to grow as a full-stack developer.</p>
                        </div>
                    </div>
                    <div className="info-container-2">
                        <p>I am very passionate about web/UI design and development. I enjoy both front-end and back-end programming. 
                        In web-design I love simple, yet elegant and most importantly working solutions with attention to details. 
                        I have experience with teamwork and so I'm comfortable working as in team as well as solo. 
                        Here are some technologies I love using...</p>
                    </div>
                    <div className="info-container-3">
                        <span className="devicons devicons-html5" title="HTML5" />
                        <span className="devicons devicons-css3" title="CSS3" />
                        <span className="devicons devicons-sass" title="Sass" />
                        <span className="devicons devicons-javascript_shield" title="JavaScript" />
                        <span className="devicons devicons-nodejs_small" title="NodeJS" />
                        <span className="devicons devicons-react" title="ReactJS" />
                    </div>
                </div>
            </section>
        );
    }
}