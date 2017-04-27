import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { validity } from '../../actions/ac_session';

class Dashboard extends Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){
        let jwt = localStorage.getItem("jwt");
        this.props.validity(jwt);
    }

    render(){
        return (
            <div>
            </div>
        );
    }
}

const mapStateToProps = function(state, ownProps) {
  return {status: state.login};
}

const mapDispatchToProps = function(dispatch, ownProps) {
  return bindActionCreators({ validity }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);