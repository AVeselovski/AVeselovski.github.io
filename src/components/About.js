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
              Hi, my name is Artur. I'm a software developer with 3.5 years of frontend developement experience in agile
              development teams. While my focus is on frontend development, I'm not totally lost when it comes to
              full-stack development. I also dabble in UI design.
              <br />
              <br />
              Like your run-of-the-mill frontend developer, I like building cool and pretty things with modern
              technologies, but won't shy away from older stuff either. I like to think that I'm capable of building
              good looking and functional fronts regardless of the tech.
              <br />
              <br />
              Studying Media Technology at Jyväskylä University of Applied Sciences (JAMK). One bachelor's thesis away
              from graduating, currently working on my thesis that is due spring 2021.
            </p>
          </div>
        </div>
      </section>
    );
  }
}
