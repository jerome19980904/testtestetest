import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createAppContainer } from "react-navigation";
import Blog from "../Screen/Blog";
import CalendarScreen from "../Screen/CalendarScreen";
import Sponsors from "../Screen/Sponsors";
import HelloWorld from "../Screen/HelloWorld";
import { Image, StyleSheet } from "react-native";
import React from "react";
import { createDrawerNavigator } from "react-navigation-drawer";
import DrawerComponent from "../Components/DrawerComponent";
import EventListScreen from "../Screen/EventListScreen";

const CalendarStack = createStackNavigator(
  {
    Calendrier: CalendarScreen,
    Liste: EventListScreen
  },
  {
    initialRouteName: "Liste",
    headerMode: "none"
  }
);

const TabNavigator = createBottomTabNavigator(
  {
    "Nos Partenaires": Sponsors,
    Calendrier: CalendarStack,
    Blog: Blog
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === "Nos Partenaires") {
          iconName = require("../assets/sponsors.png");
        } else if (routeName === "Blog") {
          iconName = require("../assets/blog.png");
        } else if (routeName === "Calendrier") {
          iconName = require("../assets/calendar.png");
        }

        // You can return any component that you like here!
        return <Image source={iconName} style={[styles.icon]} />;
      }
    }),
    tabBarOptions: {
      activeTintColor: "tomato",
      inactiveTintColor: "gray",
      style: {
        height: 60,
        paddingBottom: 10,
        borderTopColor: "grey",
        borderTopWidth: 0.9,
        paddingTop: 10
      },
      tabStyle: {
        borderRightColor: "grey",
        borderRightWidth: 0.5
      }
    }
  }
);

const DrawerNavigator = createDrawerNavigator(
  {
    PNP: {
      screen: TabNavigator,
      navigationOptions: {
        drawerIcon: <Image source={require("../assets/blog.png")} />
      }
    },
    HelloWorld: HelloWorld
  },
  {
    drawerWidth: 240,
    contentComponent: DrawerComponent
  }
);

const styles = StyleSheet.create({
  icon: {
    height: 18,
    width: 18
  }
});
export default createAppContainer(DrawerNavigator);
