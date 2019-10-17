import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const PageShell = Page => {
    return props => (
        <div className="page">
            <ReactCSSTransitionGroup
                transitionAppear={true}
                transitionAppearTimeout={350}
                transitionEnterTimeout={350}
                transitionLeave={false}
                transitionName="fade"
            >
                <Page {...props} />
            </ReactCSSTransitionGroup>
        </div>
    );
};

export default PageShell;
