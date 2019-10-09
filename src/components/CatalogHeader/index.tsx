import React from "react";
import { View, Text, TouchableOpacity, FlatList, Image } from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
// import { Container } from './styles';

export default function CatalogHeader(props) {
  return (
    <View
      style={{
        backgroundColor: "#1E1F28",
        paddingVertical: 12
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
          <TouchableOpacity onPress={() => props.navigation.goBack()}>
            <Ionicons name="ios-arrow-back" color="#F7F7F7" size={30} />
          </TouchableOpacity>
          <Ionicons name="ios-search" color="#F7F7F7" size={30} />
        </View>

        <View style={{ marginTop: 18, marginLeft: 14 }}>
          <Text style={{ fontSize: 34, color: "#F7F7F7", fontWeight: "bold" }}>
            Women's tops
          </Text>
        </View>
      </View>
    </View>
  );
}
