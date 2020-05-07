import React from "react";
import { StyleSheet } from "react-native";

import Icon from "react-native-vector-icons/FontAwesome5";
import { Colors } from "../../components/helpers/style";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
const Tab = createBottomTabNavigator();

import PageTemplate from "./page";

export default HomeContainer = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconName;
          let iconColor;
          const focusColor = Colors.primaryColor;
          const unfocusColor = Colors.thirdColor;
          switch (route.name) {
            case "Home":
              iconName = "home";
              break;
            case "Templates":
              iconName = "th-large";
              break;
            case "Inbox":
              iconName = "download";
              break;
            case "Settings":
              iconName = "cog";
              break;
          }
          if (focused) {
            iconColor = focusColor;
          } else {
            iconColor = unfocusColor;
          }
          return <Icon name={iconName} size={20} color={iconColor} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: Colors.primaryColor,
        inactiveTintColor: Colors.thirdColor,
        style: pageStyle.tabBar,
      }}
    >
      <Tab.Screen name="Home" component={PageTemplate} />
      <Tab.Screen name="Templates" component={PageTemplate} />
      <Tab.Screen name="Inbox" component={PageTemplate} />
      <Tab.Screen name="Settings" component={PageTemplate} />
    </Tab.Navigator>
  );
};

const pageStyle = StyleSheet.create({
  tabBar: {
    fontSize: 8,
    paddingBottom: 3,
    paddingTop: 3,
    backgroundColor: Colors.bgColor,
  },
});
