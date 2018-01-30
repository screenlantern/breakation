import React, { Component } from "react";
import { StyleSheet, css } from "aphrodite";
import { Drawer, Navigation } from "react-mdl";
import { Link } from "react-router-dom";

const SideBar = props => (
  <Drawer title="Breakation">
    <Navigation>
      <Link to="#"> Current Members </Link>
      <Link to="/addMember"> Add Team Member </Link>
      <Link to="#"> Overview </Link>
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
