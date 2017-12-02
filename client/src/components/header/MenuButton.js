// @flow
import React from 'react';
import {StyleSheet, css} from 'aphrodite';

type Props = {
    onClick: (event: Event) => void,
    children: React.Node
}

const Button = (props) => { 
    return (
        <a type={props.type} className={css( styles.button)}>
            {props.children}
        </a>
    )
};

const styles = StyleSheet.create({
    button:{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'row',
        backgroundColor: '#3396FF',
        maxWidth: '53px',
        height: '53px',
        width: '100%',
        borderRadius: '50%',
        float: 'right',
        ':hover':{
            backgroundColor: '#2d6eb5'
        }
    }
});

export default Button;