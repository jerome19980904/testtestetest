import React, { Component } from "react";
import {
  Button,
  Text,
  View,
  StatusBar,
  StyleSheet,
  ScrollView
} from "react-native";
import { DrawerItems } from "react-navigation-drawer";
import CustomDrawerItem from "./CustomDrawerItem";

export default class DrawerComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.header}>
          <Text style={styles.headerText}>AssosLife</Text>
        </View>
        <ScrollView style={styles.body} overScrollMode="always">
          <DrawerItems {...this.props} />
        </ScrollView>
        <View style={styles.footer}></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: "stretch",
    justifyContent: "space-between",
    flex: 1
  },
  header: {
    backgroundColor: "#393b3d",
    height: 100,
    justifyContent: "flex-end"
  },
  headerText: {
    fontSize: 24,
    marginLeft: 8,
    color: "white",
    marginBottom: 12
  },
  body: {
    backgroundColor: "#666869",
    flex: 1
  },
  footer: {
    backgroundColor: "#393b3d",
    height: 68
  }
});
