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
    render() {
        return (
            <section className="landing">
                {this.state.viewport < 768 &&
                    <div className="wrap">
                        <a href="#about"><div class="box">ABOUT</div></a>
                        <a href="#projects"><div class="box">PROJECTS</div></a>
                        <a href="#cv"><div class="box">CV</div></a>
                    </div>
                }
                {this.state.viewport >= 768 &&
                    <div className="wrap">
                        <div className="ghost-div"></div>
                        <div className="title-holder">
                            <h1>{this.props.title}</h1>
                            <h2>{this.props.titleKicker}</h2>
                        </div>
                        <ul className="landing-nav">
                            <li><a href="#about">About</a></li>
                            <li className="bullets">&bull;</li>
                            <li><a href="#projects">Projects</a></li>
                            <li className="bullets">&bull;</li>
                            <li><a href="#cv">CV</a></li>
                        </ul>
                    </div>
                }
            </section>
        );
    }
}