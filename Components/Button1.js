import React from "react";
import { View, StyleSheet, Image, TouchableOpacity, Text } from "react-native";
import Modal from "react-native-modal";

class Button1 extends React.Component {
  render() {
    console.log(this.props);
    return (
      <View>
        <TouchableOpacity onPress={() => this.props.onPress()}>
          <View style={styles.button}>
            <Text style={styles.text}>Vue Calendrier</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  button: {
    justifyContent: "center",
    alignItems: "center",
    borderColor: "blue",
    borderWidth: 3,
    borderRadius: 10,
    height: 40,
    width: 180,
    paddingLeft: 8,
    paddingRight: 8,
    marginTop: 8,
    marginBottom: 5
  },
  text: {
    fontSize: 16,
    color: "blue"
  }
});

export default Button1;
