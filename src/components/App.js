// libs
import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
// components
import Nav from './Nav';
import Landing from './Landing';
import About from './About';
import Projects from './Projects';
import CV from './CV';

export default class App extends React.Component {
    render() {
        return (
            <div>
                <Nav />
                <div className="wrapper">
                    <ScrollableAnchor id={'page-top'}>
                        <Landing title={'ARTUR VESELOVSKI'} titleKicker={'ICT-Student / Media Technology'} />
                    </ScrollableAnchor>
                    <ScrollableAnchor id={'about'}>
                        <About />
                    </ScrollableAnchor>
                    <ScrollableAnchor id={'projects'}>
                        <Projects />
                    </ScrollableAnchor>
                    <ScrollableAnchor id={'cv'}>
                        <CV />
                    </ScrollableAnchor>
                </div>
            </div>
        );
    }
}