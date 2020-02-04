import React from "react";
import { View, StyleSheet, Image, TouchableOpacity, Text } from "react-native";

class EventCard extends React.Component {
  render() {
    console.log(this.props);
    return (
      <View style={styles.main_container}>
        <TouchableOpacity
          style={{ flex: 1 }}
          onPress={() => this.props.onPress()}
        >
          <Text style={styles.date}>{this.props.event.date}</Text>
          <View
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Text style={styles.title}>{this.props.event.name}</Text>
          </View>

          <Image
            style={styles.image}
            source={require("../assets/Covers/gameloft.jpg")}
          />
          <View style={styles.overlay}></View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main_container: {
    height: 110,
    flex: 1,
    marginRight: 5,
    marginLeft: 5,
    flexDirection: "column",
    marginBottom: 4,
    borderRadius: 4
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    height: undefined,
    width: undefined,
    borderRadius: 4
  },
  date: {
    position: "absolute",
    left: 6,
    top: 3,
    zIndex: 3,
    color: "white"
  },
  title: {
    position: "absolute",
    bottom: 3,
    zIndex: 3,
    color: "white",
    fontSize: 20
  },
  overlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "black",
    opacity: 0.5,
    flex: 1,
    borderRadius: 4
  }
});
export default EventCard;
