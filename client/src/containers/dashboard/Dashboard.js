import React, { Component } from "react";
import { connect } from "react-redux";
import { StyleSheet, css } from "aphrodite";
import Header from "../../components/header/Header";
import Sidebar from "../../components/sidebar/Sidebar";
import { Layout, Content, Icon, IconButton } from "react-mdl";

class Dashboard extends Component {
  componentDidMount() {}

  render() {
    return (
      <div className={css(styles.dash)}>
        <Layout fixedHeader>
          <Header />
          <Sidebar />
          <Content>
            <div className={css(styles.content)}>
            </div>
          </Content>
        </Layout>
      </div>
    );
  }
}

const styles = StyleSheet.create({
  dash: {
    fontFamily: "lato"
  },
  content: {
    padding: "30px"
  },
});

const mapStateToProps = function(state, ownProps) {
  return {
    status: state.session,
    dashboard: state.dashboard
  };
};

export default connect(mapStateToProps, false)(Dashboard);
