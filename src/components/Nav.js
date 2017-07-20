// libs
import React from 'react';
// assets
import FaceImg from '../assets/face.png';

const linkStyles = {
    activePadding: '10px',
    activeColor: '#e3e3e3'
}

export default class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sideNavWidth: '0px',
            burgerOpacity: 1,
            burgerRotation: '',
            burgerMargin: '30px',
            clickEvents: 'auto'
        }
    }
    openSlideMenu() {
        var sideNavWidth = '250px';
        var burgerOpacity = 0.25;
        var burgerRotation = 'rotate(90deg)';
        var burgerMargin = '280px';
        var clickEvents = 'none';
        this.setState({
            sideNavWidth: sideNavWidth,
            burgerOpacity: burgerOpacity,
            burgerRotation: burgerRotation,
            burgerMargin: burgerMargin,
            clickEvents: clickEvents
        });
        this.props.slideOff('250px');
    }
    closeSlideMenu() {
        var sideNavWidth = '0px';
        var burgerOpacity = 1;
        var burgerRotation = 'rotate(0deg)';
        var burgerMargin = '30px';
        var clickEvents = 'auto';
        this.setState({
            sideNavWidth: sideNavWidth,
            burgerOpacity: burgerOpacity,
            burgerRotation: burgerRotation,
            burgerMargin: burgerMargin,
            clickEvents: clickEvents
        });
        this.props.slideOff('0');
    }
    updatePage(value) {
        this.props.updatePage(value);
        this.closeSlideMenu();
    }
    render() {
        return(
            <div>
                <nav className="navbar">
                    <span className="open-slide" style={{
                            opacity: this.state.burgerOpacity, 
                            transform: this.state.burgerRotation, 
                            marginLeft: this.state.burgerMargin, 
                            pointerEvents: this.state.clickEvents}}>
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
                    <ul>
                        <li><a onClick={() => this.updatePage('about')} style={(this.props.activePage === 'about') ? {paddingLeft: linkStyles.activePadding, color: linkStyles.activeColor} : {} }>About</a></li>
                        <li><a onClick={() => this.updatePage('projects')} style={(this.props.activePage === 'projects') ? {paddingLeft: linkStyles.activePadding, color: linkStyles.activeColor} : {} }>Projects</a></li>
                        <li><a onClick={() => this.updatePage('cv')} style={(this.props.activePage === 'cv') ? {paddingLeft: linkStyles.activePadding, color: linkStyles.activeColor} : {} }>CV</a></li>
                    </ul>
                </div>
            </div>
        );
    }
}
