import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  ScrollView,
  ImageBackground
} from "react-native";
import Modal from "../../components/Modal";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
export default function OrderDetails(props) {
  const [promoCodeModal, setPromoCodeModal] = useState(false);
  return (
    <View style={{ backgroundColor: "#1E1F28", flex: 1 }}>
      <ScrollView style={{ marginBottom: "27%" }}>
        <View>
          <View style={{ paddingHorizontal: 15 }}>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text style={{ color: "#F6F6F6", fontWeight: "bold" }}>
                Order №1947034
              </Text>
              <Text style={{ color: "#ABB4BD" }}>05-12-2019</Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: 15
              }}
            >
              <Text style={{ color: "#ABB4BD" }}>
                Tracking number:
                <Text style={{ marginLeft: 8, color: "#F6F6F6" }}>
                  IW3475453455
                </Text>
              </Text>
              <Text style={{ color: "#55D85A" }}>Delivered</Text>
            </View>
            <Text style={{ marginTop: 16, color: "#F7F7F7" }}>3 items</Text>
          </View>
          <FlatList
            keyExtractor={item => String(item)}
            style={{ marginHorizontal: 16, marginTop: 20 }}
            data={[1, 2, 3]}
            renderItem={({ item }) => (
              <View
                style={{
                  backgroundColor: "#2A2C36",
                  flexDirection: "row",
                  borderRadius: 15,
                  marginBottom: 24
                }}
              >
                <View
                  style={{
                    width: 120,
                    borderTopLeftRadius: 15,
                    borderBottomLeftRadius: 15,
                    overflow: "hidden"
                  }}
                >
                  <Image
                    style={{
                      borderTopLeftRadius: 15,
                      borderBottomLeftRadius: 15
                    }}
                    source={require("../../../assets/img/product-list.png")}
                  ></Image>
                </View>

                <View style={{ paddingVertical: 11 }}>
                  <Text style={{ color: "#F6F6F6", fontSize: 16 }}>
                    Pullover
                  </Text>
                  <Text
                    style={{ color: "#ABB4BD", fontSize: 11, marginTop: 4 }}
                  >
                    Mango
                  </Text>
                  <View style={{ flexDirection: "row", marginTop: 10 }}>
                    <Text style={{ color: "#9B9B9B", fontSize: 11 }}>
                      Color:
                      <Text style={{ color: "#f7f7f7", fontSize: 11 }}>
                        Gray
                      </Text>
                    </Text>
                    <Text
                      style={{ color: "#9B9B9B", fontSize: 11, marginLeft: 16 }}
                    >
                      Size:
                      <Text style={{ color: "#f7f7f7", fontSize: 11 }}>L</Text>
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                      width: "60%"
                    }}
                  >
                    <View>
                      <Text style={{ color: "#9B9B9B", fontSize: 11 }}>
                        Units:
                        <Text
                          style={{
                            color: "#f7f7f7",
                            fontSize: 11,
                            marginLeft: 5
                          }}
                        >
                          1
                        </Text>
                      </Text>
                    </View>

                    <View>
                      <Text style={{ color: "#f7f7f7" }}>51$</Text>
                    </View>
                  </View>
                </View>
              </View>
            )}
          />
        </View>
        {/* order info */}
        <View style={{ paddingHorizontal: 15 }}>
          <Text style={{ color: "#f7f7f7", fontWeight: "bold" }}>
            Order information
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 15
            }}
          >
            <Text style={{ color: "#ABB4BD" }}>Shipping Adress:</Text>
            <View>
              <Text style={{ width: 215, color: "#f7f7f7" }}>
                3 Newbridge Court ,Chino Hills, CA 91709, United States
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 15
            }}
          >
            <Text style={{ color: "#ABB4BD" }}>Payment method:</Text>
            <View
              style={{
                flexDirection: "row",
                paddingRight: 11
              }}
            >
              <View style={{ marginRight: 6 }}>
                <Image
                  style={{}}
                  source={require("../../../assets/img/mastercard.png")}
                ></Image>
              </View>
              <Text style={{ color: "#f7f7f7" }}>**** **** **** **** 3947</Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 15
            }}
          >
            <Text style={{ color: "#ABB4BD" }}>Delivery method</Text>
            <View>
              <Text style={{ width: 215, color: "#f7f7f7" }}>
                Fedex,3 days,15$
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 15
            }}
          >
            <Text style={{ color: "#ABB4BD" }}>Discount</Text>
            <View>
              <Text style={{ width: 215, color: "#f7f7f7" }}>
                10%, Personal promo code
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 15
            }}
          >
            <Text style={{ color: "#ABB4BD" }}>Total Amount:</Text>
            <View>
              <Text style={{ width: 215, color: "#f7f7f7" }}>133$</Text>
            </View>
          </View>
          <View
            style={{
              marginBottom: 34,
              marginTop: 34,
              flexDirection: "row",
              paddingHorizontal: 15,
              justifyContent: "space-between"
            }}
          >
            <TouchableOpacity
              style={{
                alignItems: "center",
                width: "40%",
                borderRadius: 30,
                paddingVertical: 8,
                borderColor: "#f7f7f7",
                borderWidth: 1
              }}
            >
              <Text style={{ color: "#f7f7f7" }}>Reorder</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                alignItems: "center",
                width: "40%",
                borderRadius: 30,
                paddingVertical: 8,
                borderColor: "#f7f7f7",
                borderWidth: 1,
                backgroundColor: "#EF3651"
              }}
            >
              <Text style={{ color: "#f7f7f7" }}>Leave feedback</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
