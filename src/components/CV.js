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
                        With 2+ years as a software developer my main focus is on frontend technologies, React and Vue,
                        and all that comes with it. From popular workflows, such as Redux, Redux-Saga to component
                        development environments, such as React Styleguidist.
                        <br />
                        <br />
                        Working with RESTful APIs was always a must, so I do also have experience with NoSQL MongoDb, as
                        well as classic SQL databases. Mobile development with React Native is also familiar to me.
                        <br />
                        <br />
                        There is a lot of technologies / frameworks / programming languages / conventions etc I want to
                        try and learn and so little time. Lately I started growing my knowledge of CI/CD pipelines with
                        Docker at it's core to expand my full-stack skills.
                    </p>
                    <div className="badge-holder">
                        <Badge pill>React</Badge>
                        <Badge pill>React Native</Badge>
                        <Badge pill>Vue</Badge>
                        <Badge pill>Sass</Badge>
                        <Badge pill>JS</Badge>
                        <Badge pill>Node</Badge>
                        <Badge pill>MongoDb</Badge>
                        <Badge pill>PostgreSQL</Badge>
                        <Badge pill>PHP</Badge>
                        <Badge pill>WordPress</Badge>
                        <Badge pill>Docker</Badge>
                        <Badge pill>AWS</Badge>
                    </div>
                    <h2>CV in PDF</h2>
                    <div className="icon-container">
                        <a href="https://www.visualcv.com/artur-veselovski" target="_blank" rel="noopener noreferrer">
                            <GoFilePdf />
                        </a>
                    </div>
                </div>
            </section>
        );
    }
}
