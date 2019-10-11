import React from "react";
import { View, ScrollView, Text, Image, TouchableOpacity } from "react-native";

// import { Container } from './styles';

export default function Checkout(props) {
  const creditCardBrand = require("../../../assets/img/card.png");
  return (
    <ScrollView style={{ backgroundColor: "#1E1F28" }}>
      <View style={{ paddingHorizontal: 16, marginTop: 40, marginBottom: 30 }}>
        <View>
          <Text style={{ color: "#F7F7F7", fontSize: 16 }}>
            Shipping address
          </Text>
          <View
            style={{
              marginTop: 21,
              backgroundColor: "#2A2C36",
              flexDirection: "row",
              justifyContent: "space-between",
              paddingHorizontal: 28,
              borderRadius: 15,
              paddingVertical: 18
            }}
          >
            <View>
              <Text style={{ color: "#f7f7f7" }}>Jane Doe</Text>
              <Text style={{ color: "#f7f7f7", marginTop: 7 }}>
                3 Newbridge Court
              </Text>
              <Text style={{ color: "#f7f7f7" }}>
                Chino Hills, CA 91709, United States
              </Text>
            </View>
            <View>
              <Text style={{ color: "#EF3651" }}>Change</Text>
            </View>
          </View>
        </View>

        {/* payment */}

        <View>
          <View
            style={{
              marginTop: 21,
              flexDirection: "row",
              justifyContent: "space-between",
              //   paddingHorizontal: 28,
              paddingRight: 39,
              borderRadius: 15,
              paddingVertical: 18
            }}
          >
            <View>
              <Text style={{ color: "#f7f7f7", fontSize: 16 }}>Payment</Text>
              <View
                style={{
                  flexDirection: "row",
                  marginTop: 17,
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <Image
                  source={creditCardBrand}
                  style={{ width: 80, height: 40 }}
                />
                <Text style={{ color: "#F5F5F5" }}>**** **** **** 3947</Text>
              </View>
            </View>
            <TouchableOpacity
              onPress={() => props.navigation.push("PaymentMethods")}
            >
              <Text style={{ color: "#EF3651" }}>Change</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Shipping */}

        <View>
          <View
            style={{
              marginTop: 21,
              flexDirection: "row",
              justifyContent: "space-between",
              //   paddingHorizontal: 28,
              paddingRight: 39,
              borderRadius: 15,
              paddingVertical: 18
            }}
          >
            <View>
              <Text style={{ color: "#f7f7f7", fontSize: 16 }}>
                Delivery method
              </Text>
            </View>
            <View style={{}}>
              <Text style={{ color: "#EF3651" }}>Change</Text>
            </View>
          </View>
          <View
            style={
              {
                //   marginTop: 17
              }
            }
          >
            <ScrollView horizontal>
              {[1, 2, 3, 4, 6].map(item => (
                <Image
                  key={item}
                  source={require("../../../assets/img/fedex.png")}
                />
              ))}
            </ScrollView>
          </View>
        </View>
        {/* order summary */}
        <View style={{ marginTop: 50 }}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={{ color: "#ABB4BD" }}>Order</Text>
            <Text style={{ color: "#F7F7F7" }}>112$</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 14
            }}
          >
            <Text style={{ color: "#ABB4BD" }}>Delivery</Text>
            <Text style={{ color: "#F7F7F7" }}>112$</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 14
            }}
          >
            <Text style={{ color: "#ABB4BD", fontSize: 16 }}>Summary</Text>
            <Text style={{ color: "#F7F7F7" }}>112$</Text>
          </View>
        </View>
        <View style={{ paddingHorizontal: 16, marginTop: 23 }}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("OrderSuccess")}
            style={{
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#EF3651",
              borderRadius: 25,
              paddingVertical: 14
            }}
          >
            <Text style={{ color: "#f7f7f7" }}>SUBMIT ORDER</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
