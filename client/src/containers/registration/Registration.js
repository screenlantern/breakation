import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Button  from '../../components/button/Button';
import { StyleSheet, css } from 'aphrodite';
import {register} from '../../actions/ac_session';

class Registration extends Component {
  constructor(props){
    super(props);

      this.state = {
          credentials: {
              email: '',
              password: '',
              confirmed: ''
          }
      };

      this.onInputChange = this.onInputChange.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
  }

    onInputChange(e) {
        const creds = this.state.credentials;
        creds[e.target.name] = e.target.value;
        this.setState({
            credentials: creds
        });
    }

    onSubmit(e) {
        e.preventDefault();
        this.props.register(this.state.credentials, this.props.history);
    }

  render(){
    return (
      <div>
        <form className={css(styles.form)} onSubmit={this.onSubmit} onChange={this.onInputChange}>
          <div className={css(styles.div)}>
            <label>Email</label>
            <input className={css(styles.input)} type="email" placeholder="Type your email address here" name="email" value={this.state.credentials.email}
                   required/>
          </div>
          <div className={css(styles.div)}>
            <label>Password</label>
            <input className={css(styles.input)} type="password" placeholder="Type password here" name="password"
                   value={this.state.credentials.password} required/>
          </div>
          <div className={css(styles.div)}>
            <label>Confirm Password</label>
            <input className={css(styles.input)} type="password" placeholder="Type password here" name="password"
                   value={this.state.credentials.password} required/>
          </div>
          <Button type="submit" color="primary">Sign up now</Button>
          <p className={css(styles.p)}>Already have an account?<a href="/">&nbsp;&nbsp;Sign in</a></p>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = function (dispatch, ownProps) {
    return bindActionCreators({register}, dispatch);
};

const styles = StyleSheet.create({
    form: {
        maxWidth: '404px',
        maxHeight: '472px',
        margin: '0 auto',
        transform: 'translateY(50%)',
        textAlign: 'center',
        fontFamily: '\'Lato\', sans-serif;',
        color: '#31383D',
        overflow: 'hidden'
    },
    input: {
        height: '48px',
        width: '100%',
        border: '1px solid #D5DBE2',
        fontSize: '18px',
        color: 'rgba(151,164,177,0.5)',
        fontWeight: '300',
        padding: '0.5rem',
        boxSizing: 'border-box'
    },
    div: {
        textAlign: 'left'
    },
    right: {
        textAlign: 'right'
    },
    p: {
        fontSize: '21px',
        color: '#B1BECD',
        width: '100%'
    }
});

export default connect(null, mapDispatchToProps)(Registration);
