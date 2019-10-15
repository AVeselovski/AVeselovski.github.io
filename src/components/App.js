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
            isMobile: true,
            page: 'landing',
            slide: '0',
        };
        this.updatePage = this.updatePage.bind(this);
        this.slideOff = this.slideOff.bind(this);
        this.slideIn = this.slideIn.bind(this);
        this.updateLayout = this.updateLayout.bind(this);
    }
    updatePage(value) {
        this.setState({
            page: value,
        });
    }
    slideOff(value) {
        this.setState({
            slide: value,
        });
    }
    slideIn(value) {
        this.setState({
            slide: value,
        });
    }
    updateLayout() {
        if (window.innerWidth < 768) {
            this.setState(prevState => {
                return { isMobile: true };
            });
        } else {
            this.setState(prevState => {
                return { isMobile: false };
            });
        }
    }
    componentDidMount() {
        this.updateLayout();
        window.addEventListener('resize', this.updateLayout);
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.updateLayout);
    }
    render() {
        return (
            <div>
                <Meta />
                <Nav
                    updatePage={this.updatePage}
                    activePage={this.state.page}
                    slideOff={this.slideOff}
                    slideIn={this.slideIn}
                    isMobile={this.state.isMobile}
                />
                <div className="wrapper" style={{ marginLeft: this.state.slide }}>
                    <ReactCSSTransitionGroup transitionName="fade" transitionEnterTimeout={350} transitionLeave={false}>
                        {this.state.page === 'landing' && (
                            <Landing isMobile={this.state.isMobile} updatePage={this.updatePage} />
                        )}
                        {this.state.page === 'about' && <About />}
                        {this.state.page === 'projects' && <Projects />}
                        {this.state.page === 'cv' && <CV />}
                    </ReactCSSTransitionGroup>
                </div>
            </div>
        );
    }
}
