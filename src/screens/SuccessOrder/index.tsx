import React from "react";
import { View, ScrollView, Image, Text, TouchableOpacity } from "react-native";

// import { Container } from './styles';

export default function SuccessOrder(props) {
  return (
    <>
      <ScrollView style={{ flex: 1, backgroundColor: "#1E1F28" }}>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            paddingTop: 190
          }}
        >
          <Image
            source={require("../../../assets/img/bags.png")}
            resizeMode={"center"}
          ></Image>
          <View
            style={{
              marginTop: 49,
              justifyContent: "center",
              alignItems: "center",
              paddingHorizontal: 75
            }}
          >
            <Text
              style={{
                marginTop: 12,
                color: "#F7F7F7",
                fontSize: 34,
                fontWeight: "bold",
                textAlign: "center"
              }}
            >
              Success!
            </Text>
            <Text
              style={{
                textAlign: "center",
                color: "#F5F5F5"
              }}
            >
              Your order will be delivered soon. Thank you for choosing our app!
            </Text>
          </View>
        </View>
      </ScrollView>
      <View
        style={{
          paddingHorizontal: 18,
          backgroundColor: "#1E1F28",
          paddingBottom: 20
        }}
      >
        <TouchableOpacity
          onPress={() => props.navigation.navigate("Catalog")}
          style={{
            paddingVertical: 14,
            backgroundColor: "#EF3651",
            borderRadius: 15,
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Text style={{ color: "#F5F5F5" }}>CONTINUE SHOPPING</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}
