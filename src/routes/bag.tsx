import React from "react";
import { Women } from "../screens/Categories";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import OrderSuccess from "../screens/SuccessOrder";
import Header from "../components/Header";
import Bag from "../screens/Bag";
import Checkout from "../screens/Checkout";
import Product from "../screens/Product";
import PaymentMethods from "../screens/PaymentMethods";
const Stack = createStackNavigator(
  {
    Bag: {
      screen: Bag,
      navigationOptions: {
        header: null
      }
    },
    Checkout: {
      screen: createStackNavigator(
        {
          Checkout,
          PaymentMethods: PaymentMethods,
          OrderSuccess: createSwitchNavigator({
            OrderSuccess
          })
        },
        {
          defaultNavigationOptions: {
            header: null
          }
        }
      ),
      navigationOptions: {
        header: props => <Header {...props} title={"Payment Methods"} />
      }
    },
    Product: {
      screen: Product,
      navigationOptions: {
        header: props => <Header {...props} title={"Product"} />
      }
    }
  },
  {
    initialRouteName: "Checkout"
  }
);
export default createAppContainer(Stack);
