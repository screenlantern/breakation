import React, { Component } from "react";
import { StyleSheet, css } from "aphrodite";
import { Header, Navigation, Icon } from "react-mdl";

const Head = (props) => (
  <Header title="Breakation" className={css(styles.dashHeader)}
  >
    <Navigation>
      <a href="#"><Icon name="person" /></a>
    </Navigation>
  </Header>
);

const styles = StyleSheet.create({
  dashHeader: {
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
