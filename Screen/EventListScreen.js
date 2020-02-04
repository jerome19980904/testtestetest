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
import Button1 from "../Components/Button1";
import events from "../Helpers/events";
import EventModal from "../Components/EventModal";

export default class EventListScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dateSelected: {},
      isModalVisible: false,
      displayedEvent: {}
    };
  }

  _eventPressed(selectedEvent) {
    this.setState(
      {
        displayedEvent: selectedEvent
      },
      console.log("Displayed Event"),
      console.log(this.state.displayedEvent),
      console.log(selectedEvent)
    );
    this.toggleModal();
  }

  toggleModal() {
    this.setState({ isModalVisible: !this.state.isModalVisible });
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <EventModal
          isVisible={this.state.isModalVisible}
          toggle={() => this.toggleModal()}
          date={this.state.dateSelected}
          event={this.state.displayedEvent}
        />
        <Header />
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            shadowColor: "#000",
            alignSelf: "stretch",
            borderBottomColor: "black",
            borderBottomWidth: 0.5,
            marginHorizontal: 12
          }}
        >
          <Button1
            onPress={() => this.props.navigation.navigate("Calendrier")}
          />
        </View>
        <FlatList
          data={events}
          renderItem={({ item }) => (
            <EventCard event={item} onPress={() => this._eventPressed(item)} />
          )}
          style={styles.eventList}
          overScrollMode="always"
          keyExtractor={item => item.name}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: "stretch",
    justifyContent: "flex-start",
    flex: 1
  },
  eventList: {
    marginTop: 4
  }
});
