// libs
import React from 'react';
import PropTypes from 'prop-types';

export default class Landing extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            viewport: ''
        }
    }
    updatePage(value) {
        this.props.updatePage(value);
    }
    render() {
        return (
            <section className="landing">
                {this.props.viewport < 768 &&
                    <div className="mobile-wrap">
                        <h1>{this.props.title}</h1>
                        <a onClick={() => this.updatePage('about')}><div className="box"><span>ABOUT</span></div></a>
                        <a onClick={() => this.updatePage('projects')}><div className="box"><span>PROJECTS</span></div></a>
                        <a onClick={() => this.updatePage('cv')}><div className="box"><span>CV</span></div></a>
                        <h2>{this.props.titleKicker}</h2>
                    </div>
                }
                {this.props.viewport >= 768 &&
                    <div className="desktop-wrap">
                        <div className="title-holder">
                            <h3>PORTFOLIO</h3>
                            <h1>{this.props.title}</h1>
                            <h2>{this.props.titleKicker}</h2>
                        </div>
                        <a onClick={() => this.updatePage('about')}><div className="box"><span>ABOUT</span></div></a>
                        <a onClick={() => this.updatePage('projects')}><div className="box"><span>PROJECTS</span></div></a>
                        <a onClick={() => this.updatePage('cv')}><div className="box"><span>CV</span></div></a>
                    </div>
                }
            </section>
        );
    }
}

Landing.propTypes = {
    updatePage: PropTypes.func.isRequired,
    viewport: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    titleKicker: PropTypes.string.isRequired
}
