import React from "react";
import { Women } from "../screens/Categories";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Home from "../screens/Home";
import { createMaterialTopTabNavigator } from "react-navigation-tabs";
import Header from "../components/Header";
import CatalogHeader from "../components/CatalogHeader";
import Catalog from "../screens/Catalog";
import Checkout from "../screens/Checkout";
import Product from "../screens/Product";
const TopTab = createMaterialTopTabNavigator(
  {
    Women,
    Men: Home,
    Kids: Home
  },
  {
    tabBarPosition: "top",
    swipeEnabled: true,
    tabBarOptions: {
      activeTintColor: "#EF3651",
      inactiveTintColor: "#F8F8F8",
      style: {
        backgroundColor: "#1E1F28"
      },
      labelStyle: {
        textAlign: "center",
        color: "#F5F5F5",
        textTransform: "capitalize"
      },
      indicatorStyle: {
        borderBottomColor: "#87B56A",
        borderBottomWidth: 3
      }
    }
  }
);

const Stack = createStackNavigator(
  {
    Categories: {
      screen: TopTab,
      navigationOptions: {
        header: props => <Header {...props} />
      }
    },
    Catalog: {
      screen: Catalog,
      navigationOptions: {
        header: props => <CatalogHeader {...props} />
      }
    },

    Product: {
      screen: Product,
      navigationOptions: {
        header: props => <Header {...props} title={"Product"} />
      }
    },
    Checkout: {
      screen: Checkout,
      navigationOptions: {
        header: props => <Header {...props} title={"Checkout"} />
      }
    }
  },
  {
    initialRouteName: "Catalog"
  }
);
export default createAppContainer(Stack);
