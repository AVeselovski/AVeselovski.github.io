// libs
import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
// components
import Nav from './Nav';
import Landing from './Landing';
import About from './About';
import Projects from './Projects';
import CV from './CV';

export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            page: 'landing',
            slide: '0'
        }
        this.updatePage = this.updatePage.bind(this);
        this.slideOff = this.slideOff.bind(this);
        this.slideIn = this.slideIn.bind(this);
    }
    updatePage(value) {
        this.setState({
            page: value
        });
    }
    slideOff(value) {
        this.setState({
            slide: value
        });
    }
    slideIn(value) {
        this.setState({
            slide: value
        });
    }
    render() {
        return (
            <div>
                <Nav updatePage={this.updatePage} activePage={this.state.page} slideOff={this.slideOff} slideIn={this.slideIn} />
                <div className="wrapper" style={{marginLeft: this.state.slide}}>
                    <ReactCSSTransitionGroup transitionName="fade" transitionEnterTimeout={300} transitionLeave={false}>
                        {this.state.page === 'landing' &&
                            <Landing updatePage={this.updatePage} title={'ARTUR VESELOVSKI'} titleKicker={'ICT-Student / Media Technology'} />
                        }
                        {this.state.page === 'about' &&
                            <About />
                        }
                        {this.state.page === 'projects' &&
                            <Projects />
                        }
                        {this.state.page === 'cv' &&
                            <CV />
                        }
                    </ReactCSSTransitionGroup>
                </div>
            </div>
        );
    }
}