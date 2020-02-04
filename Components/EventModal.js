import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  StatusBar,
  Image,
  TouchableOpacity
} from "react-native";
import Modal from "react-native-modal";

class EventModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isModalVisible: this.props.isVisible };
  }

  toggleModal() {
    this.setState({ isModalVisible: !this.state.isModalVisible });
  }

  render() {
    return (
      <Modal
        isVisible={this.props.isVisible}
        onBackdropPress={() => this.props.toggle()}
        backdropTransitionOutTiming={0}
      >
        <View style={styles.mainContainer}>
          <TouchableOpacity
            style={styles.close}
            onPress={() => this.props.toggle()}
          >
            <Image
              source={require("../assets/close.png")}
              style={styles.close}
            />
          </TouchableOpacity>
          <View style={styles.header}>
            <Image
              source={require("../assets/Covers/gameloft.jpg")}
              style={styles.cover}
            />
          </View>
          <View style={styles.body}>
            <Text style={styles.title}>{this.props.event.name}</Text>
            <View style={styles.info}>
              <View style={styles.infoLeft}>
                <Text style={styles.infoText}>
                  Date : {this.props.date.day}/{this.props.date.month}/
                  {this.props.date.year}
                </Text>
                <Text style={styles.infoText}>
                  Heure : {this.props.event.time}
                </Text>
                <Text style={styles.infoText}>
                  Adresse : {this.props.event.place}
                </Text>
              </View>
              <View style={styles.infoRight}>
                <Text style={styles.infoText}>
                  Participants : {this.props.event.attendants}
                </Text>
                <Text style={styles.infoText}>
                  Organisateur : {this.props.event.organizer}
                </Text>
                <Text style={styles.infoText}>
                  Prix : {this.props.event.price}
                </Text>
              </View>
            </View>
            <Text style={styles.description}>
              {this.props.event.description}
            </Text>
          </View>
          <View style={styles.footer}>
            <Text style={styles.description}>Pour plus d'infos</Text>
            <TouchableOpacity onPress={() => console.log("Ouvre event sur FB")}>
              <Image
                source={require("../assets/fb.png")}
                style={styles.socialIcon}
              />
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#383838",
    flex: 1,
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 10
  },
  close: {
    position: "absolute",
    height: 24,
    width: 24,
    zIndex: 4,
    right: 3,
    top: 3
  },
  header: {
    flex: 2,
    flexDirection: "row",
    zIndex: 1
  },
  cover: {
    flex: 1,
    width: undefined,
    height: undefined,
    resizeMode: "cover",
    zIndex: 2,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10
  },
  body: {
    flex: 5,
    alignSelf: "stretch",
    alignItems: "center",
    paddingLeft: 10,
    paddingRight: 10
  },
  info: {
    alignItems: "flex-start",
    flexDirection: "row",
    marginTop: 10,
    marginBottom: 15
  },
  title: {
    color: "white",
    fontSize: 20,
    marginTop: 4
  },
  infoLeft: {
    flex: 1
  },
  infoRight: {
    flex: 1,
    alignItems: "flex-end"
  },
  infoText: {
    fontSize: 13,
    color: "white"
  },
  description: {
    color: "white",
    fontSize: 12
  },
  footer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  socialIcon: {
    height: 33,
    width: 33,
    marginLeft: 10
  }
});
export default EventModal;
