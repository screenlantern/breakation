import React, {Component} from 'react';
import Login from '../auth/Login';
import Hero from '../../components/hero/Hero';
import { StyleSheet, css } from 'aphrodite';

class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="row">
                <Hero col='col'>
                    <div>
                        <h1 className={css(styles.title)}>Keep a Track with</h1>
                        <h1 className={css(styles.title)}>Breakation</h1>
                    </div>
                </Hero>
                <section className="col">
                    <div className="container">
                        <Login />
                    </div>
                </section>
            </div>
        );

    }

}

const styles = StyleSheet.create({
    title: {
        position: 'relative',
        margin: '0',
        top: '150px',
        zIndex: '5',
        fontSize: '72px',
        lineHeight: '80px',
        fontWeight: '100',
        color: '#fff'
    }
});

export default Home;
