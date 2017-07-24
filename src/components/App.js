// libs
import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
// components
import Nav from './Nav';
import Landing from './Landing';
import About from './About';
import Projects from './Projects';
import CV from './CV';
import Meta from './Meta';

export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            viewport: '',
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
    componentDidMount () {
        const w = window,
              d = document,
              documentElement = d.documentElement,
              body = d.getElementsByTagName('body')[0],
              width = w.innerWidth || documentElement.clientWidth || body.clientWidth
        this.setState({
            viewport: width
        });
    }
    render() {
        return (
            <div>
                <Meta />
                <Nav updatePage={this.updatePage} activePage={this.state.page} slideOff={this.slideOff} slideIn={this.slideIn} viewport={this.state.viewport} />
                <div className="wrapper" style={{marginLeft: this.state.slide}}>
                    <ReactCSSTransitionGroup transitionName="fade" transitionEnterTimeout={300} transitionLeave={false}>
                        {this.state.page === 'landing' &&
                            <Landing viewport={this.state.viewport} updatePage={this.updatePage} title={'ARTUR VESELOVSKI'} titleKicker={'ICT-Student / Media Technology'} />
                        }
                        {this.state.page === 'about' &&
                            <About />
                        }
                        {this.state.page === 'projects' &&
                            <Projects />
                        }
                        {this.state.page === 'cv' &&
                            <CV viewport={this.state.viewport} />
                        }
                    </ReactCSSTransitionGroup>
                </div>
            </div>
        );
    }
}