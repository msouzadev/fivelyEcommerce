import React, { useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { NavigationScreenProp, NavigationState } from "react-navigation";

interface NavigationParams {
  text: string;
}

type Navigation = NavigationScreenProp<NavigationState, NavigationParams>;

interface Props {
  navigation: Navigation;
}
// import { Container } from './styles';

export default function Tabs(props: Props) {
  useEffect(() => {}, []);
  const { renderIcon, activeTintColor, inactiveTintColor } = props;
  const { routes, index: activeRouteIndex } = props.navigation.state;
  return (
    <View
      style={{
        bottom: 0,
        position: "absolute",
        width: "100%"
      }}
    >
      <View
        style={{
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 12
          },
          shadowOpacity: 0.58,
          shadowRadius: 16.0,

          borderColor: "#1E1F28",
          elevation: 24,
          backgroundColor: "#1E1F28",
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15
        }}
      >
        <View
          style={{
            flexDirection: "row",
            paddingTop: 8,
            paddingHorizontal: 27,
            paddingBottom: 30,
            alignItems: "center",
            justifyContent: "space-between"
          }}
        >
          {routes.map((route, routeIndex) => {
            const tintColor =
              routeIndex == activeRouteIndex
                ? activeTintColor
                : inactiveTintColor;
            return (
              <TouchableOpacity
                onPress={() => props.navigation.navigate(route.routeName)}
                key={route.key}
                style={{ justifyContent: "center", alignItems: "center" }}
              >
                {renderIcon({
                  route,
                  focused: routeIndex == activeRouteIndex,
                  tintColor
                })}
                <Text
                  style={{
                    textAlign: "center",
                    color:
                      routeIndex == activeRouteIndex ? "#EF3651" : "#ABB4BD"
                  }}
                >
                  {route.routeName}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    </View>
  );
}
