import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
// import { Container } from './styles';

export default function Header(props) {
  return (
    <View
      style={{
        backgroundColor: "#1E1F28",
        paddingVertical: 12,
        height: 90
      }}
    >
      <View style={{ marginTop: 30 }}>
        <View
          style={{
            flexDirection: "row",
            marginHorizontal: 16,
            justifyContent: "space-between",
            alignItems: "center"
          }}
        >
          <TouchableOpacity onPress={() => props.navigation.pop()}>
            <Ionicons name="ios-arrow-back" color="#F7F7F7" size={30} />
          </TouchableOpacity>
          <Text
            style={{
              color: "#F6F6F6",
              fontSize: 18,
              textAlign: "center",
              flex: 8
            }}
          >
            {props.title || "Categories"}
          </Text>

          {props.showRigthIcon && (
            <Ionicons name="ios-search" color="#F7F7F7" size={30} />
          )}
        </View>
      </View>
    </View>
  );
}
