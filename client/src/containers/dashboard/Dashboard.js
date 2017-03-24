import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Dashboard extends Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){
        
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

export default connect(mapStateToProps)(Dashboard);