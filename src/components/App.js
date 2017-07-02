// libs
import React from 'react';
// components
import Nav from './Nav';
import Page from './Page';

export default class App extends React.Component {
    render() {
        return (
            <div>
                <Nav />
                <Page />
            </div>
        );
    }
}