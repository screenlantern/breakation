import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { StyleSheet, css } from 'aphrodite';
import Button  from '../../components/button/Button';
import {login} from '../../actions/ac_session';


class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            credentials: {
                email: '',
                password: ''
            }
        };

        this.onInputChange = this.onInputChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    }

    componentWillReceiveProps(nextProps) {
        //if (nextProps.status.loggedIn){ this.props.history.push({pathname: '/dashboard' }) };
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
        this.props.login(this.state.credentials, this.props.history);
    }

    render() {
        return (
            <div>
                <form className={css(styles.form)} onSubmit={this.onSubmit} onChange={this.onInputChange}>
                    <div className={css(styles.div)}>
                        <label>Email</label>
                        <input type="email" placeholder="Email" name="email" value={this.state.credentials.email}
                               required/>
                    </div>
                    <div className={css(styles.div)}>
                        <label>Password</label>
                        <input type="password" placeholder="Password" name="password"
                               value={this.state.credentials.password} required/>
                    </div>
                    <Button type="submit" color="primary">Log in</Button>
                </form>
            </div>
        );
    }
}

const styles = StyleSheet.create({
    form: {
        maxWidth: '400px',
        maxHeight: '472px',
        margin: '0 auto',
        transform: 'translateY(50%)',
        textAlign: 'center'
    },
    div: {
        textAlign: 'left'
    }
});

const mapDispatchToProps = function (dispatch, ownProps) {
    return bindActionCreators({login}, dispatch);
};

const mapStateToProps = function (state, ownProps) {
    return {status: state.session};
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
