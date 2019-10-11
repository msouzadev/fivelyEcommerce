import React from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

// import { Container } from './styles';

export default function MyOrders(props) {
  const orderStatus = ["Delivered", "Processing", "Cancelled"];
  return (
    <View style={{ flex: 1, backgroundColor: "#1E1F28" }}>
      <View
        style={{
          paddingHorizontal: 17,
          flexDirection: "row",
          marginTop: 27
        }}
      >
        <FlatList
          keyExtractor={item => item}
          horizontal
          data={orderStatus}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              style={{
                marginRight: 21,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: index == 0 ? 20 : 0,
                paddingHorizontal: 12,
                paddingVertical: 8,
                backgroundColor: index == 0 && "#F6F6F6"
              }}
            >
              <Text style={{ color: index == 0 ? "#2A2C36" : "#F6F6F6" }}>
                {item}
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>

      <FlatList
        style={{ marginTop: 30, marginBottom: "23.5%" }}
        data={[1, 2, 34, 4, 5, 6]}
        keyExtractor={item => String(item)}
        renderItem={({ item }) => (
          <View
            style={{
              justifyContent: "space-between",
              paddingHorizontal: 15,
              paddingVertical: 18,
              borderRadius: 15,
              backgroundColor: "#2A2C36",
              marginHorizontal: 17,
              marginBottom: 24
            }}
          >
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text
                style={{ color: "#F7F7F7", fontSize: 16, fontWeight: "bold" }}
              >
                Order №1947034
              </Text>
              <Text style={{ color: "#ABB4BD", fontSize: 14 }}>05-12-2019</Text>
            </View>

            <View style={{ flexDirection: "row", marginTop: 15 }}>
              <Text style={{ color: "#ABB4BD", fontSize: 14 }}>
                Tracking number:
              </Text>
              <Text style={{ color: "#f6f6f6", marginLeft: 10 }}>
                IW3475453455
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: 4
              }}
            >
              <Text style={{ color: "#ABB4BD", fontSize: 14 }}>
                Quantity:
                <Text style={{ fontSize: 16, color: "#F7F7F7" }}>3</Text>
              </Text>
              <Text style={{ color: "#ABB4BD", fontSize: 14 }}>
                Total Amount:{" "}
                <Text style={{ fontSize: 16, color: "#F7F7F7" }}>112$</Text>
              </Text>
            </View>

            <View
              style={{
                flexDirection: "row",
                marginTop: 22,
                justifyContent: "space-between"
              }}
            >
              <TouchableOpacity
                onPress={() => props.navigation.navigate("OrderDetails")}
                style={{
                  paddingVertical: 8,
                  paddingHorizontal: 20,
                  justifyContent: "center",
                  alignItems: "center",
                  borderColor: "#F6F6F6",
                  borderWidth: 1,
                  borderRadius: 20
                }}
              >
                <Text style={{ color: "#F7F7F7" }}>Details</Text>
              </TouchableOpacity>
              <Text style={{ color: "#55D85A" }}>Delivered</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}
