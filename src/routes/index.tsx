import React from "react";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createAppContainer } from "react-navigation";
import Home from "../screens/Home";
import Tabs from "../components/Tabs";
import CatalogHeader from "../components/CatalogHeader";
import Shop from "./shop";
import Bag from "../screens/Bag";
import Favorites from "../screens/Favorites";
import Profile from "../screens/Profile";
import {
  MaterialCommunityIcons,
  MaterialIcons,
  Feather
} from "@expo/vector-icons";
import { createStackNavigator } from "react-navigation-stack";

import Product from "../screens/Product";
import Header from "../components/Header";
const Stacks = createStackNavigator({
  Product: {
    screen: Product,
    navigationOptions: {
      header: props => <Header {...props} />
    }
  }
});
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
    Bag: {
      screen: Bag,
      navigationOptions: {
        tabBarIcon: ({ tintColor, focused }) => (
          <Feather name={`shopping-bag`} size={40} color={tintColor} />
        )
      }
    },
    Favorites: {
      screen: Favorites,
      navigationOptions: {
        tabBarIcon: ({ tintColor, focused }) => (
          <MaterialCommunityIcons
            name={`heart${focused ? "" : "-outline"}`}
            size={40}
            color={tintColor}
          />
        )
      }
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        tabBarIcon: ({ tintColor, focused }) => (
          <MaterialIcons
            name={`person${focused ? "" : "-outline"}`}
            size={40}
            color={tintColor}
          />
        )
      }
    }
  },
  {
    initialRouteName: "Bag",
    tabBarComponent: Tabs,
    tabBarOptions: {
      activeTintColor: "#EF3651",
      inactiveTintColor: "#ABB4BD"
    }
  }
);

const AppRouter = createStackNavigator(
  {
    AppTabs,
    Stacks
  },
  {
    // initialRouteName: "Stacks",
    defaultNavigationOptions: {
      header: null
    }
  }
);
export default createAppContainer(AppRouter);
