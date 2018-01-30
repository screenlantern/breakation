import React, { Component } from "react";
import { StyleSheet, css } from "aphrodite";
import { Header, Navigation } from "react-mdl";

const Head = (props) => (
  <Header title="Breakation" className={css(styles.dashHeader)}
  >
    <Navigation>
      <a href="#">Profile</a>
    </Navigation>
  </Header>
);

const styles = StyleSheet.create({
  dashHeader: {
    padding: "0 30px",
    minHeight: "64px",
    justifyContent: "center",
    backgroundColor: "#1c4e80",
    color: "#fff"
  },
  avatar: {
    cursor: "pointer",
    marginLeft: "auto"
  }
});

export default Head;
