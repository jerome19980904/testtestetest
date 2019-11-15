import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { Notifications } from "expo";
import * as Permissions from "expo-permissions";

class Home extends React.Component {
  constructor() {
    super();
    this.state = { visible: false };
    console.log("constructor finished");
  }

  async registerForPushNotificationsAsync() {
    const { status: existingStatus } = await Permissions.getAsync(
      Permissions.NOTIFICATIONS
    );
    let finalStatus = existingStatus;
    if (existingStatus !== "granted") {
      // Android remote notification permissions are granted during the app
      // install, so this will only ask on iOS
      console.log("Asking permission");
      const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
      finalStatus = status;
    }

    // Stop here if the user did not grant permissions
    if (finalStatus !== "granted") {
      return;
    }

    // Get the token that uniquely identifies this device
    let token = await Notifications.getExpoPushTokenAsync();
    console.log(token);
    console.log(finalStatus);
    console.log(existingStatus);
  }

  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
    if (status !== "granted") {
      this.setState({
        errorMessage: "Permission to access location was denied"
      });
    }
    console.log(status);

    // let location = await Location.getCurrentPositionAsync({});
    // this.setState({ location });
  };

  componentDidMount() {
    this._getLocationAsync();
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <Text>Hello le world !</Text>
      </View>
    );
  }
}

const styles = {
  mainContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
};

export default Home;
