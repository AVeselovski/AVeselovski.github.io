// libs
import React, { Component } from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';

export default class ContentPage extends React.Component {
    render() {
        return(
            <div className="wrapper">
                <ScrollableAnchor id={'page-top'}>
                    <section className="landing">
                        <div className="ghost-div"></div>
                        <div className="title-holder">
                            <h1>{this.props.title}</h1>
                            <h2>{this.props.titleKicker}</h2>
                        </div>
                        <ul className="landing-nav">
                            <li><a href="#">About</a></li>
                            <li className="bullets">&bull;</li>
                            <li><a href="#">Projects</a></li>
                            <li className="bullets">&bull;</li>
                            <li><a href="#">CV</a></li>
                        </ul>
                    </section>
                </ScrollableAnchor>
                <ScrollableAnchor id={'about'}>
                    <section className="about">
                        <p>This is about section.</p>
                    </section>
                </ScrollableAnchor>
            </div>
        );
    }
}