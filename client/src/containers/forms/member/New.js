import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Button } from "react-mdl";
import { StyleSheet, css } from "aphrodite";
import { addMember } from "../../../actions/ac_dashboard";

class New extends Component {
  constructor(props) {
    super(props);

    this.state = {
      credentials: {
        email: "",
        password: "blank",
        username: "",
        admin: false
      }
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.status.success) {
      this._resetState();
    }
  }

  _resetState() {
    this.setState({
      credentials: {
        email: "",
        password: "blank", //remove fixed values form state object and add through assign
        username: "",
        admin: false
      }
    });
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
    this.props.addMember(this.state.credentials, this.props.history);
  }

  render() {
    return (
      <div>
        <form className={css(styles.form)} onSubmit={this.onSubmit}>
          <div className={css(styles.div)}>
            <label>Member name</label>
            <input
              onChange={this.onInputChange}
              className={css(styles.input)}
              type="text"
              placeholder="Type the username here"
              name="username"
              value={this.state.credentials.username}
              required
            />
          </div>
          <div className={css(styles.div)}>
            <label>Email Address</label>
            <input
              onChange={this.onInputChange}
              className={css(styles.input)}
              type="email"
              placeholder="Type your email address here"
              name="email"
              value={this.state.credentials.email}
              required
            />
          </div>
          <Button type="submit" raised colored ripple>
            Add Member
          </Button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = function(dispatch) {
  return bindActionCreators({ addMember }, dispatch);
};

const mapStateToProps = function(state) {
  return { status: state.member };
};

const styles = StyleSheet.create({
  form: {
    maxWidth: "404px",
    margin: "0 auto",
    transform: "translateY(40%)",
    textAlign: "center",
    fontFamily: "'Lato', sans-serif;",
    color: "#31383D",
    overflow: "hidden"
  },
  input: {
    height: "48px",
    width: "100%",
    border: "1px solid #D5DBE2",
    fontSize: "18px",
    color: "rgba(151,164,177,0.5)",
    fontWeight: "300",
    padding: "0.5rem",
    boxSizing: "border-box"
  },
  div: {
    textAlign: "left"
  },
  right: {
    textAlign: "right"
  },
  p: {
    fontSize: "21px",
    color: "#B1BECD",
    width: "100%"
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(New);
