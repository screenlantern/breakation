import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { login } from '../../actions/Login';

class Login extends Component {
  constructor(props){
    super(props);

    this.state = {
      credentials: {
          email: '',
          username: '',
          password: ''
      }
    }

    this.onInputChange = this.onInputChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onInputChange(e){
    this.setState({
      credentials:{ 
        username: e.target.value,
        email: e.target.value,
        password: e.target.value 
      }
    });
  }

  onSubmit(e){
    e.preventDefault();
    this.props.login(this.state.credentials);
    console.log(this.state.credentials);
  }

  render(){
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input type="text" placeholder="Username"  value={this.state.credentials.username} onChange={this.onInputChange}/> 
          <input type="email" placeholder="Email"  value={this.state.credentials.email} onChange={this.onInputChange} />
          <input type="password" placeholder="Password" value={this.state.credentials.password} onChange={this.onInputChange} />
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = function(dispatch, ownProps) {
  return bindActionCreators({ login }, dispatch);
}

export default connect(null, mapDispatchToProps)(Login);
