// libs
import React from 'react';
// components
import { Badge } from 'reactstrap';
// assets
import GoFilePdf from 'react-icons/lib/go/file-pdf';

export default class CV extends React.Component {
  render() {
    return (
      <section className="skills">
        <div className="container skills-container">
          <h1>Skills & Experience</h1>
          <p>
            With 3.5 years as a software developer my main focus is on frontend technologies, so my area of expertise is
            in working with modern frameworks such as React (also dabbling in React Native) or Vue. I worked with these,
            building pure SPA applications (JS all the way) and with MVC frameworks, such as Ruby on Rails or Spring.
            Learning new JS frameworks is never problematic.
            <br />
            <br />
            I'm quite familiar with basic backend tech nad concepts, such as RESTful APIs, NoSQL, SQL. I dabbled in
            backend development and CI/CD, but my focus and passion remains on forntend and UI.
            <br />
            <br />
            "Too much to try out and learn and too little time" is the fact that is constantly tormenting me, when it
            comes to technologies, frameworks, languages etc. Below are simplified representation of my tech stack and
            CV.
          </p>
          <div className="badge-holder">
            <Badge className="badge" pill style={{ backgroundColor: '#f7df1e', color: '#323639' }}>
              JS
            </Badge>
            <Badge className="badge" pill style={{ backgroundColor: '#6cc24a' }}>
              Node
            </Badge>
            <Badge className="badge" pill style={{ backgroundColor: '#00d8ff', color: '#323639' }}>
              React
            </Badge>
            <Badge className="badge" pill style={{ backgroundColor: '#00d8ff', color: '#323639' }}>
              React Native
            </Badge>
            <Badge className="badge" pill style={{ backgroundColor: '#42b883' }}>
              Vue
            </Badge>
            <Badge className="badge" pill style={{ backgroundColor: '#cc0000' }}>
              Ruby on Rails
            </Badge>
            <Badge className="badge" pill style={{ backgroundColor: '#589636' }}>
              NoSQL
            </Badge>
            <Badge className="badge" pill style={{ backgroundColor: '#f29111' }}>
              SQL
            </Badge>
            <Badge className="badge" pill style={{ backgroundColor: '#4f5b93' }}>
              PHP
            </Badge>
            <Badge className="badge" pill style={{ backgroundColor: '#21759b' }}>
              WordPress
            </Badge>
          </div>
          <h2>CV in PDF</h2>
          <div className="icon-container">
            <a href="https://www.visualcv.com/pdfs/6287575/" target="_blank" rel="noopener noreferrer">
              <GoFilePdf />
            </a>
          </div>
        </div>
      </section>
    );
  }
}
