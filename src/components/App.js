// libs
import React from 'react';
// components
import Nav from './Nav';
import ContentPage from './ContentPage';

export default class App extends React.Component {
    render() {
        return (
            <div>
                <Nav />
                <ContentPage title={'ARTUR VESELOVSKI'} titleKicker={'ICT-Student / Media Technology'} />
            </div>
        );
    }
}