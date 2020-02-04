import React, { Component } from "react";
import {
  Button,
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Image
} from "react-native";
import { withNavigation } from "react-navigation";

class CustomDrawerItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TouchableOpacity style={styles.mainContainer}>
        <Image source={require("../assets/blog.png")} style={styles.icon} />
        <Text style={styles.label}>PNP</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "row",
    backgroundColor: "yellow",
    height: 40,
    justifyContent: "center",
    alignItems: "center"
  },
  icon: {
    height: 20,
    width: 20,
    marginRight: 14
  },
  label: {
    fontSize: 20
  }
});

export default withNavigation(CustomDrawerItem);
