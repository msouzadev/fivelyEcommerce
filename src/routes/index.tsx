import React from "react";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import Home from "../screens/Home";
import Tabs from "../components/Tabs";
import Header from "../components/Header";
import Shop from "./shop";
import Bag from "../screens/Bag";
import BagRoutes from "./bag";
import Favorites from "../screens/Favorites";
import Profile from "../screens/Profile";
import PaymentMethods from "../screens/PaymentMethods";
import SuccessOrder from "../screens/SuccessOrder";
import MyOrders from "../screens/MyOrders";
import {
  MaterialCommunityIcons,
  MaterialIcons,
  Feather
} from "@expo/vector-icons";
import { createStackNavigator } from "react-navigation-stack";

import Checkout from "../screens/Checkout";
import CatalogHeader from "../components/CatalogHeader";
import { View, Text } from "react-native";
import OrderDetails from "../screens/OrderDetails";
import Settings from "../screens/Settings";
const OrderSuccess = createSwitchNavigator({
  SuccessOrder
});
const Stacks = createStackNavigator(
  {
    Checkout: {
      screen: Checkout,
      navigationOptions: {
        header: props => <Header {...props} title={"Checkout"} />
      }
    },

    PaymentMethods: {
      screen: PaymentMethods,
      navigationOptions: {
        header: props => <Header {...props} title={"Payment methods"} />
      }
    }
  },
  {
    // initialRouteName: "PaymentMethods"
  }
);
const ProfileStack = createStackNavigator(
  {
    Profile: {
      screen: Profile,
      navigationOptions: {
        header: props => <CatalogHeader {...props} title="Profile" />
      }
    },
    MyOrders: {
      screen: MyOrders,
      navigationOptions: {
        header: props => <CatalogHeader {...props} title="My Orders" />
      }
    },
    OrderDetails: {
      screen: OrderDetails,
      navigationOptions: {
        header: props => <Header {...props} title="Order Details" />
      }
    },
    Settings: {
      screen: Settings,
      navigationOptions: {
        header: props => <CatalogHeader {...props} title="Settings" />
      }
    }
  },
  {
    // initialRouteName: "Settings"
  }
);
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
      screen: BagRoutes,
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
      screen: ProfileStack,
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
    // initialRouteName: "Profile",
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
    OrderSuccess
  },
  {
    // initialRouteName: "AppTabs",
    defaultNavigationOptions: {
      header: null
    }
  }
);
export default createAppContainer(AppRouter);
