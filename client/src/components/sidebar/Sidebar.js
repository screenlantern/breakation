import React, { Component } from "react";
import { StyleSheet, css } from "aphrodite";
import { Drawer, Navigation } from "react-mdl";

const SideBar = props => (
  <Drawer title="Breakation">
    <Navigation>
      <a href="#"> Current Members </a>
      <a href="#"> Add Team Member </a>
      <a href="#"> Overview </a>
    </Navigation>
  </Drawer>
);

const drawerWidth = 240;

const styles = StyleSheet.create({
  sidebar: {
    background: "white",
    height: "calc(100vh - 5px)",
    paddingTop: "64px"
  }
});

export default SideBar;
