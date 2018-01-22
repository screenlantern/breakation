import React, { Component } from 'react';
import {StyleSheet, css} from 'aphrodite';
import Drawer from 'material-ui/Drawer';
import IconButton from 'material-ui/IconButton';
import Hidden from 'material-ui/Hidden';
import Divider from 'material-ui/Divider';


class SideBar extends Component {
    state = {
        mobileOpen: false
    };

    handleDrawerToggle = () => {
        this.setState({ mobileOpen: !this.state.mobileOpen });
    };

    render() {
        const { classes, theme } = this.props;
         
        return(
            <div className={css(styles.sidebar)}>
                <ul>
                    <li><a><i className="material-icons">add</i> Add New Member</a></li>
                </ul>
            </div>
        );
    }

} 

const drawerWidth = 240;

const styles = StyleSheet.create({
    sidebar: {
       background: 'white',
       maxWidth: '20%',
       width: '100%',
       height: 'calc(100vh - 5px)',
       paddingTop: '64px',
       position: 'fixed'
    }
});


export default SideBar; 