import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { authenticate } from '../../actions/ac_session';

export default function(WrappedComponent) {

    class Authenticated extends Component {
        constructor(props ){
            super(props)
        }

        componentDidMount() {
            let jwt = localStorage.getItem("jwt");
             this.props.authenticate(jwt);
        }

        render() {
            return <WrappedComponent {...this.props} />
        }

        
    }

    const mapStateToProps = function(state, ownProps) {
        return {status: state.session};
    }

    const mapDispatchToProps = function(dispatch, ownProps) {
        return bindActionCreators({ authenticate }, dispatch);
    }

    return connect(mapStateToProps, mapDispatchToProps)(Authenticated);

}