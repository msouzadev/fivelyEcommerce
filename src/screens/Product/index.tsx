import React, { useState } from "react";
import { View, Image, ScrollView, Text } from "react-native";
import {
  MaterialIcons,
  MaterialCommunityIcons,
  FontAwesome,
  Ionicons
} from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
// import { Container } from './styles';

export default function Product(props) {
  const [openSelect, setOpen] = useState(false);
  return (
    <ScrollView style={{ backgroundColor: "#1E1F28", marginBottom: "25%" }}>
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
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            flex: 8
          }}
        >
          <View
            style={{
              borderColor: "#ABB4BD",
              width: "40%",
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
              width: "40%",
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
        <Text style={{ color: "#ABB4BD", marginTop: 10 }}>
          Short black dress
        </Text>
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
          <FontAwesome name="star-o" color="#FFBA49" size={15} />
          <FontAwesome name="star-o" color="#ABB4BD" size={15} />
          <Text style={{ color: "#ABB4BD" }}>(10)</Text>
        </View>
        <View style={{ marginTop: 16 }}>
          <Text style={{ color: "#F5F5F5" }}>
            Short dress in soft cotton jersey with decorative buttons down the
            front and a wide, frill-trimmed square neckline with concealed
            elastication. Elasticated seam under the bust and short puff sleeves
            with a small frill trim.
          </Text>
        </View>
        {/* modal select size */}
        {openSelect && (
          <View
            style={{
              marginTop: 2,
              left: 0,
              right: 0,
              bottom: "29%",
              justifyContent: "center",
              alignItems: "center",
              position: "absolute",
              backgroundColor: "#1E1F28",
              borderTopLeftRadius: 30,
              borderTopRightRadius: 30,
              elevation: 20,
              shadowRadius: 2,
              shadowColor: "#000000",
              shadowOffset: {
                width: 0,
                height: 50
              }
            }}
          >
            <View
              style={{
                backgroundColor: "#ABB4BD",
                width: 60,
                height: 3,
                marginTop: 14
              }}
            ></View>
            <Text style={{ color: "#f7f7f7", fontSize: 18, marginTop: 16 }}>
              Select Size
            </Text>
            <View
              style={{
                flexDirection: "row",
                marginTop: 20,
                paddingHorizontal: 10,
                width: "100%",
                flexWrap: "wrap",
                alignItems: "stretch"
              }}
            >
              {["XS", "S", "M", "L", "XL"].map((item, index) => (
                <View
                  style={{
                    backgroundColor: index == 1 && "#EF3651",
                    justifyContent: "center",
                    alignItems: "center",
                    width: 90,
                    height: 40,
                    borderColor: "#ABB4BD",
                    borderWidth: 1,
                    borderRadius: 10,
                    marginRight: 10,
                    padding: 4,
                    marginTop: 16
                  }}
                  key={index}
                >
                  <Text style={{ color: index == 1 ? "#2A2C36" : "#F6F6F6" }}>
                    {item}
                  </Text>
                </View>
              ))}
            </View>
            <View
              style={{
                marginTop: 20,
                borderColor: "#ABB4BD",
                flexDirection: "row",
                paddingHorizontal: 10
              }}
            >
              <View style={{ flex: 8 }}>
                <Text style={{ color: "#f7f7f7" }}>Size info</Text>
              </View>
              <View style={{}}>
                <Ionicons name="ios-arrow-forward" color="#F7F7F7" size={25} />
              </View>
            </View>
          </View>
        )}
        <View
          style={{
            backgroundColor: "#1E1F28",
            justifyContent: "center",
            alignItems: "center",
            paddingHorizontal: 16,
            paddingVertical: 16,
            marginTop: 10
          }}
        >
          <TouchableOpacity
            onPress={() => props.navigation.navigate("Bag")}
            style={{
              backgroundColor: "#EF3651",
              borderRadius: 15,
              width: 250,
              paddingVertical: 14,
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Text style={{ color: "#f7f7f7", textAlign: "center" }}>
              ADD TO CART
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
