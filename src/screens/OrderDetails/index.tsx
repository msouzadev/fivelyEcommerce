import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  ScrollView
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
              <View>
                <View
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
                      <View
                        style={{
                          flexDirection: "row",
                          justifyContent: "space-between"
                        }}
                      >
                        <Text style={{ color: "#F7F7F7", fontWeight: "bold" }}>
                          Pullover
                        </Text>
                      </View>

                      <Text style={{ color: "#ABB4BD", fontSize: 11 }}>
                        Mango
                      </Text>

                      <Text
                        style={{ color: "#ABB4BD", fontSize: 11, marginTop: 9 }}
                      >
                        Color:
                        <Text
                          style={{
                            color: "#f7f7f7",
                            fontSize: 11
                          }}
                        >
                          Black
                        </Text>
                        Size:
                        <Text
                          style={{
                            color: "#f7f7f7",
                            fontSize: 11
                          }}
                        >
                          L
                        </Text>
                      </Text>
                      <View
                        style={{
                          paddingRight: 15,
                          marginTop: 13,
                          flexDirection: "row",
                          justifyContent: "space-between"
                        }}
                      >
                        <Text style={{ color: "#9B9B9B", fontSize: 11 }}>
                          Unitis:1
                        </Text>
                        <Text style={{ color: "#f7f7f7" }}>51%</Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            )}
          />
        </View>
        {/* order info */}
        <View></View>
      </ScrollView>
    </View>
  );
}
