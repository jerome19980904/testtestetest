import React, { Component } from "react";
import {
  Button,
  Text,
  View,
  StatusBar,
  StyleSheet,
  FlatList
} from "react-native";
import DrawerButton from "../Components/DrawerButton";
import Header from "../Components/Header";
import EventCard from "../Components/EventCard";

export default class Sponsors extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    return <View style={styles.mainContainer}></View>;
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: "stretch",
    justifyContent: "center",
    flex: 1
  },
  eventList: {
    marginTop: 30
  }
});
