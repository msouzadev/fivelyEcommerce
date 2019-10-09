import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

// import { Container } from './styles';

export default function Women(props) {
  return (
    <ScrollView
      style={{
        backgroundColor: "#1E1F28",
        marginBottom: "21.3%"
      }}
    >
      <View
        style={{
          backgroundColor: "#FF3E3E",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 15,
          margin: 16,
          height: 100
        }}
      >
        <View>
          <Text style={{ color: "#F7F7F7", fontSize: 25, fontWeight: "bold" }}>
            SUMMER SALES
          </Text>
          <Text style={{ textAlign: "center", color: "#F7F7F7" }}>
            Up to 50% off
          </Text>
        </View>
      </View>
      {[1, 2, 3, 4, 5, 6].map(item => (
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate("Catalog");
          }}
          key={item}
          style={{ flexDirection: "row", margin: 16, borderRadius: 15 }}
        >
          <View
            style={{
              paddingVertical: 39,
              paddingLeft: 23,
              backgroundColor: "#2A2C36",
              flex: 1,
              borderTopLeftRadius: 15,
              borderBottomLeftRadius: 15
            }}
          >
            <Text
              style={{ fontWeight: "bold", fontSize: 18, color: "#F7F7F7" }}
            >
              New
            </Text>
          </View>
          <Image
            style={{
              flex: 1,
              borderTopRightRadius: 15,
              borderBottomRightRadius: 15
            }}
            source={require("../../../../assets/img/category.png")}
          ></Image>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}
