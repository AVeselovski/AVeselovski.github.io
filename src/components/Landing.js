import React from 'react';

export default class Landing extends React.Component {
    render() {
        return (
            <section className="landing">
                <div className="ghost-div"></div>
                <div className="title-holder">
                    <h1>{this.props.title}</h1>
                    <h2>{this.props.titleKicker}</h2>
                </div>
                <ul className="landing-nav">
                    <li><a href="#about">About</a></li>
                    <li className="bullets">&bull;</li>
                    <li><a href="#projects">Projects</a></li>
                    <li className="bullets">&bull;</li>
                    <li><a href="#cv">CV</a></li>
                </ul>
            </section>
        );
    }
}