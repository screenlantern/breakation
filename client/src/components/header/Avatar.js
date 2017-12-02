import React from 'react';
import {StyleSheet, css} from 'aphrodite';

const Avatar = (props) => {
    return(
       <div className={css(styles.avatar)} >
           <img src={'http://i.pravatar.cc/60'} alt="avatar image" />
        </div>                    
    );
};

const styles = StyleSheet.create({
    avatar: {
        width: '53px',
        height: '53px',
        borderRadius: '50%',
        backgroundColor: '#eee',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        float: 'right',
        marginRight: '100px'
    }
});

export default Avatar;