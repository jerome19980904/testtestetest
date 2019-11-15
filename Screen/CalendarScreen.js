import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  Modal,
  TouchableOpacity
} from "react-native";
import {
  Calendar,
  LocaleConfig,
  Agenda,
  CalendarList
} from "react-native-calendars";
import EventModal from "../Components/EventModal";
import eventList from "../Helpers/events";
import DrawerButton from "../Components/DrawerButton";
import Header from "../Components/Header";
import Button1 from "../Components/Button1";

LocaleConfig.locales["fr"] = {
  monthNames: [
    "Janvier",
    "Février",
    "Mars",
    "Avril",
    "Mai",
    "Juin",
    "Juillet",
    "Août",
    "Septembre",
    "Octobre",
    "Novembre",
    "Décembre"
  ],
  monthNamesShort: [
    "Janv.",
    "Févr.",
    "Mars",
    "Avril",
    "Mai",
    "Juin",
    "Juil.",
    "Août",
    "Sept.",
    "Oct.",
    "Nov.",
    "Déc."
  ],
  dayNames: [
    "Dimanche",
    "Lundi",
    "Mardi",
    "Mercredi",
    "Jeudi",
    "Vendredi",
    "Samedi"
  ],
  dayNamesShort: ["Dim.", "Lun.", "Mar.", "Mer.", "Jeu.", "Ven.", "Sam."],
  today: "Aujourd'hui"
};
LocaleConfig.defaultLocale = "fr";

class CalendarScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dateSelected: {},
      isModalVisible: false,
      displayedEvent: {}
    };
  }

  // Reprend les dates des événements de eventList et les transmet dans le Calendar
  _markEvents(events) {
    var mark;
    for (let i = 0; i < events.length; i++) {
      mark = {
        ...mark,
        [events[i].date]: { marked: true }
      };
    }
    //console.log("Marked date =");
    //console.log(mark);
    return mark;
  }

  _listEventsDate(events) {
    var eventsDate = [];
    for (let i = 0; i < events.length; i++) {
      eventsDate.push(events[i].date);
    }
    //console.log("Event List =");
    //console.log(eventsDate);
    return eventsDate;
  }

  //Affiche le modal si il y a un évent ce jour là
  //Met en state l'événement qu'il y a ce jour là
  _datePressed(day) {
    var displayModal;
    var list = this._listEventsDate(eventList);
    this.setState({ dateSelected: day });
    list.forEach(function(date) {
      if (day.dateString === date) {
        displayModal = true;
      }
    });
    if (displayModal === true) {
      this.setState(
        {
          displayedEvent: eventList.filter(
            event => event.date === day.dateString
          )[0]
        }
        //console.log("test"),
        //console.log(this.state.displayedEvent)
      );

      this.toggleModal();
    }
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
        <View style={styles.body}>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              shadowColor: "#000",
              backgroundColor: "white",
              alignSelf: "stretch",
              borderBottomColor: "black",
              borderBottomWidth: 0.5,
              marginHorizontal: 12
            }}
          >
            <Button1 onPress={() => this.props.navigation.navigate("Liste")} />
          </View>
          <View>
            <CalendarList
              onDayPress={day => this._datePressed(day)}
              markedDates={this._markEvents(eventList)}
              minDate={"2019-05-01"}
              maxDate={"2021-01-01"}
              pastScrollRange={14}
              futureScrollRange={14}
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = {
  mainContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between"
  },
  body: {
    flex: 6,
    flexDirection: "column",
    alignItems: "center"
  },
  calendarStyle: {
    justifyContent: "flex-start",
    alignSelf: "stretch",
    flex: 6
  },
  calendarTheme: {
    "stylesheet.day.basic": {
      base: {
        marginTop: 5
      }
    }
  },
  toggle: {
    width: 60,
    height: 35,
    marginTop: 8,
    resizeMode: "center"
  }
};

export default CalendarScreen;
