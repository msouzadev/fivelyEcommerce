import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

// import { Container } from './styles';

export default function Women(props) {
  const categories = [
    {
      name: "New",
      img: require("../../../../assets/img/category1.png")
    },
    {
      name: "Clothes",
      img: require("../../../../assets/img/category2.png")
    },
    {
      name: "Shoes",
      img: require("../../../../assets/img/category3.png")
    },
    {
      name: "Accesories",
      img: require("../../../../assets/img/category4.png")
    }
  ];
  return (
    <ScrollView
      style={{
        backgroundColor: "#1E1F28"
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
      <View style={{ marginBottom: "30.3%" }}>
        {categories.map(item => (
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate("Catalog");
            }}
            key={item.name}
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
                {item.name}
              </Text>
            </View>
            <Image
              style={{
                flex: 1,
                borderTopRightRadius: 15,
                borderBottomRightRadius: 15
              }}
              source={item.img}
            ></Image>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}
