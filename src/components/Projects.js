// libs
import React from 'react';
// components
import { Card, CardImg, CardTitle, CardText, CardColumns, 
        CardBlock, Badge } from 'reactstrap';
// assets
import IoT from '../assets/projects/iotitude-2.png';
import ToDo from '../assets/projects/dynamic-todo-1.png';

export default class Projects extends React.Component {
    render() {
        return (
            <section className="projects">
                <div className="my-container">
                    <CardColumns>
                        <Card>
                            <a href="http://viktrainer.fi" target="_blank" rel="noopener noreferrer">
                                <CardBlock>
                                    <CardTitle>VIKTRAINER</CardTitle>
                                    <CardText>A website for a personal trainer. From design all the way to deploying, using basic techniques such as PHP, JS and SASS with minimal Bootstrap skeleton.</CardText>
                                    <div className="badge-holder">
                                        <Badge pill>HTML5</Badge>
                                        <Badge pill>Sass</Badge>
                                        <Badge pill>JS</Badge>
                                        <Badge pill>PHP</Badge>
                                        <Badge pill>Bootstrap</Badge>
                                    </div>
                                </CardBlock>
                            </a>
                        </Card>
                        <Card>
                            <a href="https://github.com/AVeselovski/dynamic-todo" target="_blank" rel="noopener noreferrer">
                                <CardImg top width="100%" src={ToDo} alt="Dynamic To-Do" />
                                <CardBlock>
                                    <CardTitle>Dynamic To-Do</CardTitle>
                                    <CardText>Simple To-Do connected to REST API. Back-end built with Node, Express and MongoDB. 
                                        Front-end built with React and Material-UI.</CardText>
                                    <div className="badge-holder">
                                        <Badge pill>Node</Badge>
                                        <Badge pill>React</Badge>
                                        <Badge pill>Express</Badge>
                                        <Badge pill>MongoDB</Badge>
                                        <Badge pill>Material-UI</Badge>
                                    </div>
                                </CardBlock>
                            </a>
                        </Card>
                        <Card>
                            <a href="https://wimmalab.github.io" target="_blank" rel="noopener noreferrer">
                                <CardBlock>
                                    <CardTitle>WIMMA Lab</CardTitle>
                                    <CardText>During my internship at WIMMA Lab (2.5 months) I completed several projects. The WIMMA Lab website (2 person project), 
                                        data visualization for another team, as well as a blog and a temporary website for the organization.
                                        </CardText>
                                    <div className="badge-holder">
                                        <Badge pill>Node</Badge>
                                        <Badge pill>React</Badge>
                                        <Badge pill>Jekyll</Badge>
                                        <Badge pill>Bootstrap</Badge>
                                        <Badge pill>Sass</Badge>
                                    </div>
                                </CardBlock>
                            </a>
                        </Card>
                        <Card>
                            <a href="https://github.com/wimmalab/iotitude" target="_blank" rel="noopener noreferrer">
                                <CardImg top width="100%" src={IoT} alt="Iotitude" />
                                <CardBlock>
                                    <CardTitle>IoTitude</CardTitle>
                                    <CardText>Data visualization using IoTitude's REST API. This small project was done during WIMMA Lab 
                                        by request of virtual company IoTitude for demoing their IoT product.</CardText>
                                    <div className="badge-holder">
                                        <Badge pill>Node</Badge>
                                        <Badge pill>React</Badge>
                                        <Badge pill>ChartJS</Badge>
                                        <Badge pill>Sass</Badge>
                                        <Badge pill>Material UI</Badge>
                                    </div>
                                </CardBlock>
                            </a>
                        </Card>
                        <Card className="special-card">
                            <CardBlock>
                                <CardTitle>More on...</CardTitle>
                                <a href="https://github.com/AVeselovski" target="_blank" rel="noopener noreferrer">
                                    <span className="devicons devicons-github_badge" />
                                </a>
                            </CardBlock>
                        </Card>
                    </CardColumns>
                </div>
            </section>
        );
    }
}
