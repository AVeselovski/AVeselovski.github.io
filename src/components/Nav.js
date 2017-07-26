// libs
import React from 'react';
import PropTypes from 'prop-types';
// assets
import FaceImg from '../assets/face.png';
import TiSocialGithubCircular from 'react-icons/lib/ti/social-github-circular';
import TiSocialLinkedinCircular from 'react-icons/lib/ti/social-linkedin-circular';

const linkStyles = {
    activePadding: '40px',
    activeColor: '#e3e3e3',
    activeShadow: '2px 0 0 #e3e3e3 inset',
    activeUnderline: '0 -2px 0 #e3e3e3 inset'
}

export default class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sideNavWidth: '0px',
            burgerOpacity: 1,
            burgerFlipping: '',
            burgerMargin: '30px',
            clickEvents: 'auto'
        }
    }
    openSlideMenu() {
        if (this.props.viewport < 768) {
            var sideNavWidth = '100%';
            var burgerMargin = 'calc(100% + 30px)';
            var contentSlide = '0';
        } else if (this.props.viewport >= 768 && this.props.viewport <= 1024) {
            sideNavWidth = '250px';
            burgerMargin = '280px';
        } else {
            sideNavWidth = '250px';
            burgerMargin = '280px';
            contentSlide = '250px';
        }
        var burgerOpacity = 0.25;
        var burgerFlipping = 'rotate(90deg)';
        var clickEvents = 'none';
        this.setState({
            sideNavWidth: sideNavWidth,
            burgerOpacity: burgerOpacity,
            burgerFlipping: burgerFlipping,
            burgerMargin: burgerMargin,
            clickEvents: clickEvents
        });
        this.props.slideOff(contentSlide);
    }
    closeSlideMenu() {
        var sideNavWidth = '0px';
        var burgerOpacity = 1;
        var burgerFlipping = 'rotate(0deg)';
        var burgerMargin = '30px';
        var clickEvents = 'auto';
        var contentSlide = '0';
        this.setState({
            sideNavWidth: sideNavWidth,
            burgerOpacity: burgerOpacity,
            burgerFlipping: burgerFlipping,
            burgerMargin: burgerMargin,
            clickEvents: clickEvents
        });
        this.props.slideOff(contentSlide);
    }
    updatePage(value) {
        this.props.updatePage(value);
        this.closeSlideMenu();
    }
    render() {
        return(
            <div>
                <nav className="my-navbar">
                    <span className="open-slide" style={{
                            opacity: this.state.burgerOpacity, 
                                transform: this.state.burgerFlipping, 
                                    marginLeft: this.state.burgerMargin, 
                                        pointerEvents: this.state.clickEvents
                        }}>
                        <a onClick={() => this.openSlideMenu()} >
                            <svg width="30" height="30">
                                <path d="M0,1 30,1" strokeWidth="2" />
                                <path d="M0,15 30,15" strokeWidth="2" />
                                <path d="M0,29 30,29" strokeWidth="2" />
                            </svg>
                        </a>
                    </span>
                    <img className="avatar" src={FaceImg} onClick={() => this.updatePage('landing')} alt={'My Face'} />
                </nav>
                <div id="side-nav" className="side-nav" style={{width: this.state.sideNavWidth}}>
                    <a className="btn-close" onClick={() => this.closeSlideMenu()}>
                        <svg width="30" height="30">
                            <path d="M0,29 30,1" strokeWidth="2" />
                            <path d="M0,1 30,29" strokeWidth="2" />
                        </svg>
                    </a>
                    {this.props.viewport < 768 &&
                        <ul className="mobile-nav-ul">
                            <li>
                                <a onClick={() => this.updatePage('about')} style={(this.props.activePage === 'about') ? {
                                        color: linkStyles.activeColor,
                                        boxShadow: linkStyles.activeUnderline
                                    } : {} }>About</a>
                            </li>
                            <li>
                                <a onClick={() => this.updatePage('projects')} style={(this.props.activePage === 'projects') ? {
                                        color: linkStyles.activeColor,
                                        boxShadow: linkStyles.activeUnderline
                                    } : {} }>Projects</a>
                            </li>
                            <li>
                                <a onClick={() => this.updatePage('cv')} style={(this.props.activePage === 'cv') ? {
                                        color: linkStyles.activeColor,
                                        boxShadow: linkStyles.activeUnderline
                                    } : {} }>CV</a>
                            </li>
                        </ul>
                    }
                    {this.props.viewport >= 768 &&
                        <ul className="desktop-nav-ul">
                            <li>
                                <a onClick={() => this.updatePage('about')} style={(this.props.activePage === 'about') ? {
                                        paddingLeft: linkStyles.activePadding, 
                                        color: linkStyles.activeColor, 
                                        boxShadow: linkStyles.activeShadow
                                    } : {} }>About</a>
                            </li>
                            <li>
                                <a onClick={() => this.updatePage('projects')} style={(this.props.activePage === 'projects') ? {
                                        paddingLeft: linkStyles.activePadding, 
                                        color: linkStyles.activeColor, 
                                        boxShadow: linkStyles.activeShadow
                                    } : {} }>Projects</a>
                            </li>
                            <li>
                                <a onClick={() => this.updatePage('cv')} style={(this.props.activePage === 'cv') ? {
                                        paddingLeft: linkStyles.activePadding, 
                                        color: linkStyles.activeColor, 
                                        boxShadow: linkStyles.activeShadow
                                    } : {} }>CV</a>
                            </li>
                        </ul>
                    }
                    <div className="info">
                        <div className="icon-holder">
                            <a href="https://github.com/AVeselovski" target="_blank" rel="noopener noreferrer"><TiSocialGithubCircular /></a>
                            <a href="https://www.linkedin.com/in/artur-veselovski" target="_blank" rel="noopener noreferrer"><TiSocialLinkedinCircular /></a>
                        </div>
                        <p>This portfolio was built with React</p>
                        <p>artur.veselovski@hotmail.fi</p>
                        <p>+358 500 594327</p>
                        <p>© Artur Veselovski</p>
                    </div>
                </div>
            </div>
        );
    }
}

Nav.propTypes = {
    updatePage: PropTypes.func.isRequired,
    activePage: PropTypes.string.isRequired,
    slideOff: PropTypes.func.isRequired,
    slideIn: PropTypes.func.isRequired,
    viewport: PropTypes.number.isRequired
}
