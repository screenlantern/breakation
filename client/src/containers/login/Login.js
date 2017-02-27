import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { login } from '../../actions/Login';

class Login extends Component {
  constructor(props){
    super(props);

    this.state = {
      email: '',
      username: '',
      password: ''
    }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e){
    this.setState({ 
      username: e.target.value,
      email: e.target.value,
      password: e.target.value 
    });
  }

  onSubmit(e){
    this.props.login();
  }

  render(){
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input type="text"  value={this.state.username} onChange={this.onInputChange}/> 
          <input type="email"  value={this.state.email} onChange={this.onInputChange} />
          <input type="password"  value={this.state.password} onChange={this.onInputChange} />
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = function(dispatch, ownProps) {
  return bindActionCreators({ login }, dispatch);
}

export default connect(null, mapDispatchToProps)(Login);
