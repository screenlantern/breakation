import React, { Component } from 'react';
import {StyleSheet, css} from 'aphrodite';

import AppBar from 'material-ui/AppBar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import Menu, { MenuItem } from 'material-ui/Menu';
import Avatar from 'material-ui/Avatar';

class Header extends Component {
    state = {
        auth: true,
        anchorEl: null,
    };

    handleMenu = event => {
        this.setState({ anchorEl: event.currentTarget });
        console.log('oo');
    };

    handleClose = () => {
        this.setState({ anchorEl: null });
    };

    render() {
        const { auth, anchorEl } = this.state;
        const open = Boolean(anchorEl);
        return(
            <AppBar className={css(styles.dashHeader)}>
            <Avatar
                className={css(styles.avatar)}
                aria-owns={open ? 'menu-appbar' : null}
                aria-haspopup="true"
                onClick={this.handleMenu}
            >H</Avatar>   
            <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
                }}
                transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
                }}
                open={open}
                onClose={this.handleClose}
            >
                <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                <MenuItem onClick={this.handleClose}>My account</MenuItem>
            </Menu>
            </AppBar>
        )
    }
     
}

const styles = StyleSheet.create({
    dashHeader: {
       padding: '0 30px',
       minHeight: '64px',
       justifyContent: 'center',
       backgroundColor: '#1c4e80',
       color: '#fff'
    },
    avatar: {
        cursor: 'pointer',
        marginLeft: 'auto'
    }
});

export default Header;