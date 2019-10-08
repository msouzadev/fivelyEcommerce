import React from "react";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createAppContainer } from "react-navigation";
import Home from "./screens/Home";
import Tabs from "./components/Tabs";
import Shop from "./screens/Shop";
import Bag from "./screens/Bag";
import Favorites from "./screens/Favorites";
import Profile from "./screens/Profile";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";

const AppTabs = createBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarIcon: ({ tintColor, focused }) => (
          <MaterialCommunityIcons
            name={`home${focused ? "" : "-outline"}`}
            size={40}
            color={tintColor}
          />
        )
      }
    },
    Shop: {
      screen: Shop,
      navigationOptions: {
        tabBarIcon: ({ tintColor, focused }) => (
          <MaterialCommunityIcons
            name={`cart${focused ? "" : "-outline"}`}
            size={40}
            color={tintColor}
          />
        )
      }
    },
    Bag,
    Favorites,
    Profile
  },
  {
    tabBarComponent: Tabs,
    tabBarOptions: {
      activeTintColor: "#EF3651",
      inactiveTintColor: "#ABB4BD"
    }
  }
);

export default createAppContainer(AppTabs);
