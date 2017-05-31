import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { login } from '../../actions/ac_session';

class Login extends Component {
  constructor(props){
    super(props);

    this.state = {
        credentials: {
            email: '',
            username: '',
            password: ''
        }
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

  }

  componentDidMount(){
      
  }

 componentWillReceiveProps(nextProps){
    //if (nextProps.status.loggedIn){ this.props.history.push({pathname: '/dashboard' }) };
  }


  onInputChange(e){
    const creds = this.state.credentials;
    creds[e.target.name] = e.target.value;
    this.setState({
      credentials : creds
    });
  }

  onSubmit(e){
    e.preventDefault();
    this.props.login(this.state.credentials, this.props.history);
  }

  render(){
    return (
      <div>
        <form onSubmit={this.onSubmit} onChange={this.onInputChange}>
          <input type="text" placeholder="Username" name="username"  value={this.state.credentials.username} /> 
          <input type="email" placeholder="Email"  name="email" value={this.state.credentials.email} />
          <input type="password" placeholder="Password" name="password" value={this.state.credentials.password} />
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
