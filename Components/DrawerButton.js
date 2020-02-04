import React from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import Modal from "react-native-modal";
import { withNavigation } from "react-navigation";

class DrawerButton extends React.Component {
  render() {
    console.log(this.props);
    return (
      <TouchableOpacity onPress={() => this.props.navigation.openDrawer()}>
        <Image style={styles.button} source={require("../assets/menu.png")} />
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  mainContainer: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1
  },
  button: {
    height: 30,
    width: 30
  }
});

export default withNavigation(DrawerButton);
