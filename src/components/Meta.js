import React from 'react';
import { Helmet } from "react-helmet";

export default class Meta extends React.Component {
    render() {
        return (
            <Helmet>
                <meta charSet="utf-8" />
                <meta name="description" content="Artur Veselovski - media technology, my portfolio. Full-Stack developer, web design." />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon.ico" />
                <title>AV | Portfolio</title>
            </Helmet>
        );
    }
}