import React from 'react';
import {StyleSheet, css} from 'aphrodite';

const Button = (props) => {
    return (
        <button type={props.type} className={css(styles.primary, styles.button)}>
            {props.children}
        </button>
    )
};

const styles = StyleSheet.create({
    primary: {
        backgroundColor: '#3396FF'
    },
    button: {
        width: '180px',
        height: '50px',
        fontSize: '18px'
    }
});

export default Button;