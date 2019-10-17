// libs
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default class Landing extends React.Component {
    updatePage(value) {
        this.props.updatePage(value);
    }
    render() {
        return (
            <section className="landing">
                {this.props.isMobile && (
                    <div className="container landing-container-mobile">
                        <h1>
                            <strong>
                                Artur
                                <br /> Veselovski
                            </strong>
                            <br /> Software
                            <br /> Developer
                        </h1>
                        <hr></hr>
                        <Link
                            to="/about"
                            onClick={() => this.updatePage('about')}
                            className="landing-container-mobile__box"
                        >
                            <h2>About</h2>
                            <p>Very little about me</p>
                        </Link>
                        <Link
                            to="/projects"
                            onClick={() => this.updatePage('projects')}
                            className="landing-container-mobile__box"
                        >
                            <h2>Projects</h2>
                            <p>Little personal projects</p>
                        </Link>
                        <Link
                            to="/skills"
                            onClick={() => this.updatePage('cv')}
                            className="landing-container-mobile__box"
                        >
                            <h2>Skills & Experience</h2>
                            <p>Might be interesting to know</p>
                        </Link>
                        <a onClick={() => {}} className="landing-container-mobile__box--disabled">
                            <h2>Styleguide</h2>
                            <p>My personal component library</p>
                        </a>
                    </div>
                )}
                {!this.props.isMobile && (
                    <div className="container landing-container-desktop">
                        <h1>
                            <strong>Artur Veselovski</strong> <br />
                            Software Developer
                        </h1>
                        <hr></hr>
                        <Link
                            to="/about"
                            onClick={() => this.updatePage('about')}
                            className="landing-container-desktop__box"
                        >
                            <h2>About</h2>
                            <p>Very little about me</p>
                        </Link>
                        <Link
                            to="/projects"
                            onClick={() => this.updatePage('projects')}
                            className="landing-container-desktop__box"
                        >
                            <h2>Projects</h2>
                            <p>Little personal projects</p>
                        </Link>
                        <Link
                            to="/skills"
                            onClick={() => this.updatePage('cv')}
                            className="landing-container-desktop__box"
                        >
                            <h2>Skills & Experience</h2>
                            <p>Might be interesting to know</p>
                        </Link>
                        <a onClick={() => {}} className="landing-container-desktop__box--disabled">
                            <h2>Styleguide</h2>
                            <p>My personal component library</p>
                        </a>
                    </div>
                )}
            </section>
        );
    }
}

Landing.propTypes = {
    updatePage: PropTypes.func.isRequired,
    isMobile: PropTypes.bool.isRequired,
};
