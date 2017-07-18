import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const Button = (props) => {
    return(
        <button type={props.type} className={css(styles.primary)}>
            {props.children}
        </button>
    )
};

const styles = StyleSheet.create({
    primary: {
        backgroundColor: '#3396FF'
    }
});

export default Button;