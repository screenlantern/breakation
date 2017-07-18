import React from 'react';
import {StyleSheet, css} from 'aphrodite';
import bgImage from '../../img/herobg.jpg';

const Hero = (props) => {
    return (
        <section className={`col ${css(styles.hero)}`}>
            {props.children}
        </section>
    )
};

const styles = StyleSheet.create({
    hero: {
        position: 'relative',
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        fontSize: '24px',
        margin: '0',
        minHeight: '971px',
        color: '#fff',
        textAlign: 'center',
        ':before': {
            position: 'absolute',
            content: '" "',
            width: '100%',
            height: '100%',
            top: '0',
            left: '0',
            backgroundColor: '#292929',
            opacity: '0.6',
            zIndex: '2'
        }
    }
});

export default Hero;