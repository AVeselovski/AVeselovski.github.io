// libs
import React from 'react';
// components
import { Alert, Card, CardTitle, CardSubtitle, CardText, CardBody, Badge } from 'reactstrap';
import FaExternalLinkAlt from 'react-icons/lib/fa/external-link';

export default class Projects extends React.Component {
  render() {
    return (
      <section className="projects">
        <div className="container projects-container">
          <h1>Projects</h1>
          <Alert color="danger" className="alert">
            There is not much in here besides an old project that is not working at the moment (as it turned out) and an
            early WIP. There's always something I'm working on in my free time, but none of it is in presentable state.
            Unfortunately work and thesis, surprisingly, takes time from doing something "flashier" and worth showing.
          </Alert>
          <Card className="projects-container__card">
            <CardBody>
              <CardTitle>Styles & Components</CardTitle>
              <CardText>
                <strong>WIP</strong> CSS library & React components library (that might never be finished) for my
                glorious future projects, which might never start. A pure personal enjoyment project that has no real
                functional application just yet. It's just fun.
              </CardText>
              <div className="card-links">
                <a href="https://comradeguide.now.sh/" target="_blank" rel="noopener noreferrer">
                  Project <FaExternalLinkAlt />
                </a>
                <a href="https://comradeguide.now.sh/docs" target="_blank" rel="noopener noreferrer">
                  Docs <FaExternalLinkAlt />
                </a>
                <a href="https://github.com/AVeselovski/comrade-components" target="_blank" rel="noopener noreferrer">
                  Code <FaExternalLinkAlt />
                </a>
              </div>
              <div className="badge-holder">
                <Badge color="info" pill>
                  React
                </Badge>
                <Badge color="info" pill>
                  CSS
                </Badge>
              </div>
            </CardBody>
          </Card>
          <Card className="projects-container__card">
            <CardBody>
              <CardTitle>Zero Tasks</CardTitle>
              <CardSubtitle tag="h6" className="mb-4 mt-2 text-danger">
                Just found out this old boi isn't even working at the moment. Seems like the motto on the login screen
                "Because there is probably going to be next to zero support for this app." was very right all along.
              </CardSubtitle>
              <CardText>
                A task manager / notes app. NoSQL REST backend (MongoDb, Node, Express) with different frontend
                endpoints in mind (never got to doing React Native app, which was the main goal). JWT authentication,
                expandable with Google Auth (never got to it either). Frontend is build with popular React workflow at
                the time (Redux and Saga).
                <br />
                <br />
                Just a glorified To-Do app I wanted to try 2 years ago, primarily to act as a "show of skill", if
                nothing else. Never was truly finished. Test user: "test1@example.com:password". Real email not required
                for creating users.
              </CardText>
              <div className="card-links">
                <a href="https://zero-tasks-front.now.sh/auth/login" target="_blank" rel="noopener noreferrer">
                  Project <FaExternalLinkAlt />
                </a>
                <a href="https://github.com/AVeselovski/zero-tasks-front" target="_blank" rel="noopener noreferrer">
                  Code (front) <FaExternalLinkAlt />
                </a>
                <a href="https://github.com/AVeselovski/zero-tasks-back" target="_blank" rel="noopener noreferrer">
                  Code (backend) <FaExternalLinkAlt />
                </a>
              </div>
              <div className="badge-holder">
                <Badge color="info" pill>
                  React
                </Badge>
                <Badge color="info" pill>
                  MongoDb
                </Badge>
                <Badge color="info" pill>
                  Node
                </Badge>
                <Badge color="info" pill>
                  Express
                </Badge>
                <Badge color="info" pill>
                  JWT
                </Badge>
              </div>
            </CardBody>
          </Card>
          <Card className="projects-container__card placeholder">
            <CardBody>
              <CardTitle>More to come...</CardTitle>
              <CardText>
                Code for most can be found on{' '}
                <a href="https://github.com/AVeselovski" target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
                .
              </CardText>
            </CardBody>
          </Card>
        </div>
      </section>
    );
  }
}
