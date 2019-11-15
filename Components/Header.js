import React from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";
import Modal from "react-native-modal";
import DrawerButton from "./DrawerButton";
import { withNavigation } from "react-navigation";

class Header extends React.Component {
  render() {
    return (
      <View style={styles.header}>
        <DrawerButton />
        <Text style={styles.title}>
          {this.props.navigation.state.routeName}
        </Text>
        <Image style={styles.logo} source={require("../assets/logoPNP.png")} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    width: "100%",
    height: 80,
    alignItems: "center",
    backgroundColor: "#939596",
    justifyContent: "space-between",
    paddingRight: 12,
    paddingLeft: 12,
    paddingTop: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3
  },
  title: {
    fontSize: 24
  },
  logo: {
    height: 30,
    width: 30
  }
});

export default withNavigation(Header);
