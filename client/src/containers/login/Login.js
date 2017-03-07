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
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onInputChange(e){
    this.setState({
        [e.target.name]: e.target.value
    });
  }

  onSubmit(e){
    e.preventDefault();
    this.props.login(this.state);
  }

  render(){
    return (
      <div>
        <h4>{(this.props.status.loggedin)? 'Logged in' : 'not Logged in'}</h4>
        <form onSubmit={this.onSubmit} onChange={this.onInputChange}>
          <input type="text" placeholder="Username" name="username"  value={this.state.username} /> 
          <input type="email" placeholder="Email"  name="email" value={this.state.email} />
          <input type="password" placeholder="Password" name="password" value={this.state.password} />
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = function(dispatch, ownProps) {
  return bindActionCreators({ login }, dispatch);
}

const mapStateToProps = function(state, ownProps) {
  return {status: state.login};
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
