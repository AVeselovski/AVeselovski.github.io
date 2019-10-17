// libs
import React from 'react';
import { Route, withRouter } from 'react-router-dom';
// components
import Nav from './Nav';
import Page from './Page';
import Landing from './Landing';
import About from './About';
import Projects from './Projects';
import CV from './CV';
import Meta from './Meta';

class App extends React.Component {
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
                    location={this.props.location}
                    updatePage={this.updatePage}
                    activePage={this.state.page}
                    slideOff={this.slideOff}
                    slideIn={this.slideIn}
                    isMobile={this.state.isMobile}
                />
                <div className="wrapper" style={{ marginLeft: this.state.slide }}>
                    <Route
                        exact
                        path="/"
                        component={Page(() => (
                            <Landing isMobile={this.state.isMobile} updatePage={this.updatePage} />
                        ))}
                    />
                    <Route exact path="/about" component={Page(About)} />
                    <Route exact path="/projects" component={Page(Projects)} />
                    <Route exact path="/skills" component={Page(CV)} />
                </div>
                {/**
                    <TransitionGroup>
                        <CSSTransition
                            key={location.key}
                            timeout={{ enter: 350, exit: 350 }}
                            classNames="fade">
                            <div className="wrapper">
                                <Switch location={location}>
                                    <Route exact path="/" component={() =>
                                        <Landing isMobile={this.state.isMobile} updatePage={this.updatePage} />
                                    } />
                                    <Route path="/first" component={About} />
                                    <Route path="/second" component={Projects} />
                                    <Route path="/third" component={CV} />
                                </Switch>
                            </div>
                        </CSSTransition>
                    </TransitionGroup>
                */}
            </div>
        );
    }
}

export default withRouter(App);
