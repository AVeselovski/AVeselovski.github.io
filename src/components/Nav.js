// libs
import React from 'react';
// assets
import FaceImg from '../assets/face.png';

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
                    <img className="avatar" src={FaceImg} alt={'My Face'} />
                </nav>
                <div id="side-nav" className="side-nav" style={{width: this.state.sideNavWidth}}>
                    <a className="btn-close" onClick={() => this.closeSlideMenu()}>
                        <svg width="30" height="30">
                            <path d="M0,29 30,1" strokeWidth="2" />
                            <path d="M0,1 30,29" strokeWidth="2" />
                        </svg>
                    </a>
                    <ul>
                        <li><a href="#about">About</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#cv">CV</a></li>
                    </ul>
                </div>
            </div>
        );
    }
}
