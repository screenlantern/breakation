import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Button from '../../../components/button/Button';
import {StyleSheet, css} from 'aphrodite';
import {register} from '../../../actions/ac_register';

class Registration extends Component {
    constructor(props) {
        super(props);

         this.state = {
            credentials: {
                email: '',
                password: '',
                username: '',
                admin: true
            },
            confirmedPassword: '',
            confirmedStatus: false
        };

        this.onInputChange = this.onInputChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.confirmPassword = this.confirmPassword.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.status.success) {
            this._resetState();
        }
    }

    _resetState() {
        this.setState({
            credentials: {
                email: '',
                password: '',
                username: '',
                admin: true
            },
            confirmedPassword: '',
            confirmedStatus: false
        });
    }

    onInputChange(e) {
        const creds = this.state.credentials;
        creds[e.target.name] = e.target.value;
        this.setState({
            credentials: creds
        });
    }

    confirmPassword(e) {
        this.setState({confirmedPassword: e.target.value});
        if (e.target.value === this.state.credentials.password) {
            console.log('password match');
        }
    }

    onSubmit(e) {
        e.preventDefault();
        this.props.register(this.state.credentials, this.props.history);
    }

    render() {
        return (
            <div>
                <form className={css(styles.form)} onSubmit={this.onSubmit}>
                    <div className={css(styles.div)}>
                        <label>Team name</label>
                        <input onChange={this.onInputChange} className={css(styles.input)} type="text"
                               placeholder="Type your team name here" name="username"
                               value={this.state.credentials.username}
                               required/>
                    </div>
                    <div className={css(styles.div)}>
                        <label>Email</label>
                        <input onChange={this.onInputChange} className={css(styles.input)} type="email"
                               placeholder="Type your email address here" name="email"
                               value={this.state.credentials.email}
                               required/>
                    </div>
                    <div className={css(styles.div)}>
                        <label>Password</label>
                        <input onChange={this.onInputChange} className={css(styles.input)} type="password"
                               placeholder="Type password here" name="password"
                               value={this.state.credentials.password} required/>
                    </div>
                    <div className={css(styles.div)}>
                        <label>Confirm Password</label>
                        <input onChange={this.confirmPassword} className={css(styles.input)} type="password"
                               placeholder="Type password here" name="confirm"
                               value={this.state.confirmedPassword} required/>
                    </div>
                    <Button type="submit" color="primary">Sign up now</Button>
                    <p className={css(styles.p)}>Already have an account?<a href="/">&nbsp;&nbsp;Sign in</a></p>
                </form>
            </div>
        );
    }
}

const mapDispatchToProps = function (dispatch) {
    return bindActionCreators({register}, dispatch);
};

const mapStateToProps = function (state) {
    return {status: state.register}
};

const styles = StyleSheet.create({
    form: {
        maxWidth: '404px',
        margin: '0 auto',
        transform: 'translateY(40%)',
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

export default connect(mapStateToProps, mapDispatchToProps)(Registration);
