// libs
import React from 'react';
import { Helmet } from "react-helmet";

export default class Meta extends React.Component {
    render() {
        return (
            <Helmet>
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon.ico" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <meta name="theme-color" content="#1a1a1a" />
            </Helmet>
        );
    }
}
