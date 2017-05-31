import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

export default function(WrappedComponent) {

    class Athenticated extends Component {
        constructor(props ){
            super(props)
        }

        componentDidMount() {

        }

        render() {
            return <WrappedComponent {...this.props} />
        }

        
    }

}