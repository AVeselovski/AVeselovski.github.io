// libs
import React from 'react';
// assets
import face from '../assets/face.jpg';

export default class About extends React.Component {
    render() {
        return (
            <section className="about">
                <div className="container about-container">
                    <h1>Artur Veselovski</h1>
                    <div className="about-container__img-container">
                        <img src={face} alt="Pic of me" />
                    </div>
                    <p className="about-container__current-status">
                        Currently working as a software developer at{' '}
                        <a href="https://www.qvantel.com/" target="_blank" rel="noopener noreferrer">
                            Qvantel
                        </a>
                        .
                    </p>
                    <div className="about-container__basic-info">
                        <p>
                            Hi, my name is Artur. I'm a software developer with 2+ years of frontend developement
                            experience in agile development teams. While my focus is on frontend development, I'm not
                            totally lost when it comes to full-stack development. I also make some attempts at UI design
                            in my free time, but I’m not a designer by a long shot, I just like to dabble. Good enough
                            for me, not so much for real world apps.
                            <br />
                            <br />
                            Still a student, studying Media Technology at Jyväskylä University of Applied Sciences
                            (JAMK), bachelor's thesis away from graduating.
                        </p>
                    </div>
                </div>
            </section>
        );
    }
}
