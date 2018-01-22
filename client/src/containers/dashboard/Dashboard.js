import React, { Component } from 'react';
import { connect } from 'react-redux';
import {StyleSheet, css} from 'aphrodite';
import Header from '../../components/header/Header';
import Sidebar from '../../components/sidebar/Sidebar';

class Dashboard extends Component {

    componentDidMount(){
       
    }

    render(){
        return (
            <div className={css(styles.dash)}>
                <Header />
                <Sidebar />
            </div>
        );
    }
}

const styles = StyleSheet.create({
    dash: {
        fontFamily: 'lato'
    }
});

const mapStateToProps = function(state, ownProps) {
  return {
      status: state.session,
      dashboard: state.dashboard
    };
};


export default connect(mapStateToProps, false)(Dashboard);