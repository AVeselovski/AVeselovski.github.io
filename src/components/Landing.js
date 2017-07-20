import React from 'react';

export default class Landing extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            viewport: ''
        }
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
    updatePage(value) {
        this.props.updatePage(value);
    }
    render() {
        return (
            <section className="landing">
                {this.state.viewport < 768 &&
                    <div className="mobile-wrap">
                        <h1>{this.props.title}</h1>
                        <a onClick={() => this.updatePage('about')}><div className="box"><span>ABOUT</span></div></a>
                        <a onClick={() => this.updatePage('projects')}><div className="box"><span>PROJECTS</span></div></a>
                        <a onClick={() => this.updatePage('cv')}><div className="box"><span>CV</span></div></a>
                        <h2>{this.props.titleKicker}</h2>
                    </div>
                }
                {this.state.viewport >= 768 &&
                    <div className="desktop-wrap">
                        <div className="title-holder">
                            <h1>{this.props.title}</h1>
                            <h2>{this.props.titleKicker}</h2>
                        </div>
                        <a onClick={() => this.updatePage('about')}><div className="box"><span>ABOUT</span></div></a>
                        <a onClick={() => this.updatePage('projects')}><div className="box"><span>PROJECTS</span></div></a>
                        <a onClick={() => this.updatePage('cv')}><div className="box"><span>CV</span></div></a>
                    </div>
                }
            </section>
        );
    }
}