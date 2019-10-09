import React from "react";
import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
// import { Container } from './styles';

export default function Header() {
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
            marginHorizontal: 8,
            justifyContent: "space-between",
            alignItems: "center"
          }}
        >
          <Ionicons name="ios-arrow-back" color="#F7F7F7" size={30} />
          <Text style={{ color: "#F6F6F6", fontSize: 18 }}>Categories</Text>

          <Ionicons name="ios-search" color="#F7F7F7" size={30} />
        </View>
      </View>
    </View>
  );
}
