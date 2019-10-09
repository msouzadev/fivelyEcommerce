import React from "react";
import { View, FlatList, Image, TouchableOpacity, Text } from "react-native";

import {
  MaterialCommunityIcons,
  MaterialIcons,
  FontAwesome
} from "@expo/vector-icons";
// import { Container } from './styles';

export default function Catalog() {
  return (
    <View style={{ flex: 1, backgroundColor: "#1E1F28" }}>
      <FlatList
        style={{ marginLeft: 14, marginTop: 12 }}
        horizontal
        keyExtractor={item => String(item)}
        data={[1, 2, 3, 4, 6]}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={{
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#F7F7F7",
              marginRight: 7,
              paddingVertical: 8,
              width: 130,
              borderRadius: 20
            }}
          >
            <Text style={{ color: "#2A2C36" }}>T-shirts</Text>
          </TouchableOpacity>
        )}
      />

      <View style={{ marginTop: 18, marginHorizontal: 14 }}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <MaterialIcons name="filter-list" color="#F7F7F7" size={30} />
            <Text style={{ color: "#F7F7F7", marginLeft: 7 }}>Filters</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <View style={{ transform: [{ rotate: "90deg" }] }}>
              <MaterialIcons name="compare-arrows" color="#F7F7F7" size={30} />
            </View>
            <Text style={{ color: "#F7F7F7", marginLeft: 7 }}>
              Price: lowest to high
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <MaterialIcons name="apps" color="#F7F7F7" size={30} />
          </View>
        </View>
      </View>

      <FlatList
        keyExtractor={item => String(item)}
        style={{ marginHorizontal: 16, marginTop: 20 }}
        data={[1, 2, 3, 4, 5, 6]}
        renderItem={({ item }) => (
          <View>
            <TouchableOpacity
              style={{
                marginBottom: 26,
                flexDirection: "row",
                borderTopLeftRadius: 15,
                borderBottomLeftRadius: 15
              }}
            >
              <Image
                style={{
                  width: 104,
                  height: 104,
                  flex: 3,
                  borderTopLeftRadius: 15,
                  borderBottomLeftRadius: 15
                }}
                source={require("../../../assets/img/product-list.png")}
              ></Image>
              <View
                style={{
                  backgroundColor: "#2A2C36",
                  flex: 7,
                  borderTopRightRadius: 15,
                  borderBottomRightRadius: 15
                }}
              >
                <View style={{ paddingLeft: 10, paddingTop: 11 }}>
                  <Text style={{ color: "#F7F7F7", fontWeight: "bold" }}>
                    Pullover
                  </Text>
                  <Text style={{ color: "#ABB4BD", fontSize: 11 }}>Mango</Text>
                  <View
                    style={{
                      paddingTop: 8,
                      flexDirection: "row",
                      justifyContent: "space-between",
                      width: 110,
                      alignItems: "center"
                    }}
                  >
                    <FontAwesome name="star" color="#FFBA49" size={15} />
                    <FontAwesome name="star" color="#FFBA49" size={15} />
                    <FontAwesome name="star" color="#FFBA49" size={15} />
                    <FontAwesome name="star" color="#FFBA49" size={15} />
                    <FontAwesome name="star-o" color="#ABB4BD" size={15} />
                    <Text style={{ color: "#ABB4BD" }}>(3)</Text>
                  </View>
                  <Text style={{ color: "#F7F7F7" }}>51$</Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 2
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,

                elevation: 5,
                justifyContent: "center",
                alignItems: "center",
                bottom: 10,
                right: 0,
                position: "absolute",
                backgroundColor: "#1E1F28",
                borderRadius: 40 / 2,
                width: 40,
                height: 40
              }}
            >
              <MaterialCommunityIcons
                name="heart-outline"
                size={18}
                color="#ABB4BD"
              />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}
