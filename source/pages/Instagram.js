//Core
import React from 'react';

//Components
import Header from '../components/Header';
import Content from '../components/Content';
import Footer from '../components/Footer';

export default class Instagram extends React.Component {
    render() {
        return (
            <>
                <Header />
                <Content />
                <Footer />
            </>
        );
    }
}