import React from "react";
import { View, Image, ScrollView, Text } from "react-native";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
// import { Container } from './styles';

export default function Product() {
  return (
    <ScrollView style={{ backgroundColor: "#1E1F28" }}>
      <View style={{}}>
        <Image
          source={require("../../../assets/img/product.png")}
          style={{ width: "100%" }}
          resizeMode={"contain"}
        />
      </View>
      <View
        style={{ marginTop: 12, flexDirection: "row", marginHorizontal: 16 }}
      >
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View
            style={{
              borderColor: "#ABB4BD",
              width: 138,
              height: 40,
              borderWidth: 1,
              borderRadius: 15,
              justifyContent: "space-between",
              alignItems: "center",
              flexDirection: "row",
              paddingHorizontal: 12,
              marginRight: 10
            }}
          >
            <View>
              <Text style={{ color: "#F6F6F6", textAlign: "center" }}>
                Size
              </Text>
            </View>
            <View>
              <MaterialIcons name="keyboard-arrow-down" color="#f6f6f6" />
            </View>
          </View>
          <View
            style={{
              borderColor: "#ABB4BD",
              width: 138,
              height: 40,
              borderWidth: 1,
              borderRadius: 15,
              justifyContent: "space-between",
              alignItems: "center",
              flexDirection: "row",
              paddingHorizontal: 12,
              marginRight: 10
            }}
          >
            <View>
              <Text style={{ color: "#F6F6F6", textAlign: "center" }}>
                Color
              </Text>
            </View>
            <View style={{}}>
              <MaterialIcons name="keyboard-arrow-down" color="#f6f6f6" />
            </View>
          </View>
          <View
            style={{
              width: 36,
              height: 36,
              borderWidth: 1,
              borderRadius: 25,
              justifyContent: "center",
              alignItems: "center",
              borderColor: "#1E1F28",
              backgroundColor: "#2A2C36",
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 2
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              elevation: 5
            }}
          >
            <MaterialCommunityIcons
              name="heart-outline"
              size={18}
              color="#ABB4BD"
            />
          </View>
        </View>
      </View>
      <View style={{ marginTop: 22, paddingHorizontal: 16 }}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={{ fontSize: 24, color: "#f7f7f7", fontWeight: "bold" }}>
            H&M
          </Text>
          <Text style={{ fontSize: 24, color: "#f7f7f7", fontWeight: "bold" }}>
            $19.99
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}
