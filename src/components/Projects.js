// libs
import React from 'react';
// components
import { Card, CardTitle, CardText, CardBlock, Badge } from 'reactstrap';

export default class Projects extends React.Component {
    render() {
        return (
            <section className="projects">
                <div className="container projects-container">
                    <h1>Projects</h1>
                    <Card className="projects-container__card">
                        <a href="https://zero-tasks-dev.herokuapp.com" target="_blank" rel="noopener noreferrer">
                            <CardBlock>
                                <CardTitle>Zero Tasks</CardTitle>
                                <CardText>
                                    A task manager / notes app for my personal taste. NoSQL REST backend (MongoDb, Node,
                                    Express) with different frontend endpoints in mind (initially web with React and
                                    eventually plans for mobile app with React Native). JWT authentication, expandable
                                    with Google Auth later. Frontend is build with popular React workflow (Redux,
                                    Redux-Saga).
                                    <br />
                                    <br />
                                    Just a glorified ToDo app, nothing more. Sort of a playground of a project to
                                    possibly expand on later, a.k.a continuos WIP.
                                </CardText>
                                <div className="badge-holder">
                                    <Badge pill>React</Badge>
                                    <Badge pill>MongoDb</Badge>
                                    <Badge pill>Node</Badge>
                                    <Badge pill>Express</Badge>
                                    <Badge pill>JWT</Badge>
                                </div>
                            </CardBlock>
                        </a>
                    </Card>
                    <Card className="projects-container__card placeholder">
                        <CardBlock>
                            <CardTitle>More to come...</CardTitle>
                            <CardText>
                                Might be something unpresentable on{' '}
                                <a href="https://github.com/AVeselovski" target="_blank" rel="noopener noreferrer">
                                    GitHub
                                </a>
                                .
                            </CardText>
                        </CardBlock>
                    </Card>
                </div>
            </section>
        );
    }
}
