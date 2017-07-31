// libs
import React from 'react';

const iconColors = {
    html5: '#fb7a5a',
    css3: '#5ac1fb',
    JS: '#fbcc5a',
    sass: '#CE669C',
    node: '#8BC930',
    react: '#62DAFC'
}

export default class About extends React.Component {
    render() {
        return (
            <section className="about">
                <div className="my-container">
                    <div className="info-container-1">
                        <h2>Welcome!</h2>
                        <div className="basic-info">
                            <p>My name is Artur Veselovski and I'm studying Media Technology at Jyväskylä University of Applied Sciences (JAMK).  
                                Currently I am at my third academic year.</p>
                            <p>I am very passionate about web/UI design, front-end and full-stack development. 
                                In web-design I love simple, yet elegant and most importantly working solutions with attention to details.</p>
                            <p>I have experience working as part of a team and I'm familiar with Agile & Lean methods. 
                                I enjoy learning and trying out new technologies and here are some of the technologies I use frequently...</p>
                        </div>
                    </div>
                    <div className="info-container-2">
                        <span className="devicons devicons-html5" title="HTML5" style={{color: iconColors.html5}} />
                        <span className="devicons devicons-css3" title="CSS3" style={{color: iconColors.css3}} />
                        <span className="devicons devicons-javascript_shield" title="JavaScript" style={{color: iconColors.JS}} />
                        <span className="devicons devicons-nodejs_small" title="NodeJS" style={{color: iconColors.node}} />
                        <span className="devicons devicons-react" title="ReactJS" style={{color: iconColors.react}} />
                        <span className="devicons devicons-sass" title="Sass" style={{color: iconColors.sass}} />                        
                    </div>
                </div>
            </section>
        );
    }
}
