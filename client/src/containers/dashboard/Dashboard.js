import React, { Component } from "react";
import { connect } from "react-redux";
import { StyleSheet, css } from "aphrodite";

import { HashRouter as Router, Route } from "react-router-dom";
import Header from "../../components/header/Header";
import Sidebar from "../../components/sidebar/Sidebar";
import NewMember from "../forms/member/New";
import { Layout, Content, Icon, IconButton } from "react-mdl";

class Dashboard extends Component {
  componentDidMount() {}

  render() {
    return (
      <Router>
        <div className={css(styles.dash)}>
          <Layout fixedHeader>
            <Header />
            <Sidebar />
            <Content>
              <div className={css(styles.content)}>
                <Route path="/addMember" component={NewMember} />
              </div>
            </Content>
          </Layout>
        </div>
      </Router>
    );
  }
}

const styles = StyleSheet.create({
  dash: {
    fontFamily: "lato"
  },
  content: {
    padding: "30px"
  }
});

const mapStateToProps = function(state, ownProps) {
  return {
    status: state.session,
    dashboard: state.dashboard
  };
};

export default connect(mapStateToProps, false)(Dashboard);
