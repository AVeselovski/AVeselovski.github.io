// libs
import React from 'react';
import PropTypes from 'prop-types';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
// assets
import IoSocialLinkedinCircular from 'react-icons/lib/io/social-linkedin';

const linkStyles = {
    activePadding: '38px',
    activeColor: '#d8d8d8',
    activeColorMobile: '#202124',
    activeShadow: '4px solid #d8d8d8',
    activeUnderline: '2px solid #202124',
};

export default class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clickEvents: 'auto',
            menuOpen: false,
        };
    }
    openSlideMenu() {
        if (this.props.isMobile) {
            var contentSlide = '0';
        } else {
            contentSlide = '240px';
        }

        this.setState({
            menuOpen: true,
        });
        this.props.slideOff(contentSlide);
    }
    closeSlideMenu() {
        var contentSlide = '0';
        this.setState({
            menuOpen: false,
        });
        this.props.slideOff(contentSlide);
    }
    updatePage(value) {
        this.props.updatePage(value);
        this.closeSlideMenu();
    }
    render() {
        return (
            <div>
                <nav className="header-nav">
                    <span className={`btn-menu${this.state.menuOpen ? ' open' : ''}`}>
                        <a onClick={() => this.openSlideMenu()}>
                            <svg width="30" height="30">
                                <path d="M2,2 28,2" strokeWidth="3" strokeLinecap="round" />
                                <path d="M2,15 28,15" strokeWidth="3" strokeLinecap="round" />
                                <path d="M2,28 28,28" strokeWidth="3" strokeLinecap="round" />
                            </svg>
                        </a>
                    </span>
                    <ReactCSSTransitionGroup
                        transitionName="fade"
                        transitionEnterTimeout={350}
                        transitionLeaveTimeout={350}
                    >
                        {this.props.activePage !== 'landing' && (
                            <span className="back-btn">
                                <a onClick={() => this.updatePage('landing')}>
                                    <svg width="30" height="16">
                                        <path d="M2,14 15,2 28,14" strokeWidth="3" strokeLinecap="round" fill="none" />
                                    </svg>
                                </a>
                            </span>
                        )}
                    </ReactCSSTransitionGroup>
                </nav>
                <div id="side-nav" className={`side-nav${this.state.menuOpen ? ' open' : ''}`}>
                    <a className="btn-close" onClick={() => this.closeSlideMenu()}>
                        <svg width="30" height="30">
                            <path d="M2,28 28,2" strokeWidth="3" strokeLinecap="round" />
                            <path d="M2,2 28,28" strokeWidth="3" strokeLinecap="round" />
                        </svg>
                    </a>
                    {this.props.isMobile && (
                        <ul className="mobile-nav-ul">
                            <li>
                                <a
                                    onClick={() => this.updatePage('about')}
                                    style={
                                        this.props.activePage === 'about'
                                            ? {
                                                  color: linkStyles.activeColorMobile,
                                                  borderBottom: linkStyles.activeUnderline,
                                              }
                                            : {}
                                    }
                                >
                                    About
                                </a>
                            </li>
                            <li>
                                <a
                                    onClick={() => this.updatePage('projects')}
                                    style={
                                        this.props.activePage === 'projects'
                                            ? {
                                                  color: linkStyles.activeColorMobile,
                                                  borderBottom: linkStyles.activeUnderline,
                                              }
                                            : {}
                                    }
                                >
                                    Projects
                                </a>
                            </li>
                            <li>
                                <a
                                    onClick={() => this.updatePage('cv')}
                                    style={
                                        this.props.activePage === 'cv'
                                            ? {
                                                  color: linkStyles.activeColorMobile,
                                                  borderBottom: linkStyles.activeUnderline,
                                              }
                                            : {}
                                    }
                                >
                                    Skills & Experience
                                </a>
                            </li>
                        </ul>
                    )}
                    {!this.props.isMobile && (
                        <ul className="desktop-nav-ul">
                            <li>
                                <a
                                    onClick={() => this.updatePage('about')}
                                    style={
                                        this.props.activePage === 'about'
                                            ? {
                                                  paddingLeft: linkStyles.activePadding,
                                                  color: linkStyles.activeColor,
                                                  borderLeft: linkStyles.activeShadow,
                                              }
                                            : {}
                                    }
                                >
                                    About
                                </a>
                            </li>
                            <li>
                                <a
                                    onClick={() => this.updatePage('projects')}
                                    style={
                                        this.props.activePage === 'projects'
                                            ? {
                                                  paddingLeft: linkStyles.activePadding,
                                                  color: linkStyles.activeColor,
                                                  borderLeft: linkStyles.activeShadow,
                                              }
                                            : {}
                                    }
                                >
                                    Projects
                                </a>
                            </li>
                            <li>
                                <a
                                    onClick={() => this.updatePage('cv')}
                                    style={
                                        this.props.activePage === 'cv'
                                            ? {
                                                  paddingLeft: linkStyles.activePadding,
                                                  color: linkStyles.activeColor,
                                                  borderLeft: linkStyles.activeShadow,
                                              }
                                            : {}
                                    }
                                >
                                    Skills & Experience
                                </a>
                            </li>
                        </ul>
                    )}
                    <div className="info">
                        <div className="icon-holder">
                            <a
                                href="https://www.linkedin.com/in/artur-veselovski"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <IoSocialLinkedinCircular />
                            </a>
                        </div>
                        <p>artur.veselovski(at)me.com</p>
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
    isMobile: PropTypes.bool.isRequired,
};
