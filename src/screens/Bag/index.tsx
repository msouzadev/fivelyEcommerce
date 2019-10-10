import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  ScrollView
} from "react-native";
import Header from "../../components/CatalogHeader";
import Modal from "../../components/Modal";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
export default function Bag(props) {
  const [promoCodeModal, setPromoCodeModal] = useState(false);
  return (
    <View style={{ backgroundColor: "#1E1F28", flex: 1 }}>
      <Header {...props} title={"My Bag"} />
      <ScrollView style={{ marginBottom: "27%" }}>
        <Modal
          style={{ flex: 1 }}
          transparent={true}
          open={promoCodeModal}
          onClose={() => setPromoCodeModal(false)}
        >
          <View
            style={{
              position: "absolute",
              bottom: 0,
              width: "100%",
              backgroundColor: "#1E1F28",
              borderTopLeftRadius: 30,
              borderTopRightRadius: 30,
              elevation: 20
            }}
          >
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                marginTop: 14
              }}
            >
              <View
                style={{
                  backgroundColor: "#ABB4BD",
                  width: 60,
                  height: 6,
                  borderRadius: 10
                }}
              ></View>
              <TouchableOpacity
                style={{
                  paddingHorizontal: 16,
                  flexDirection: "row",
                  marginTop: 32
                }}
              >
                <View
                  style={{
                    justifyContent: "center",
                    // alignItems: "center",
                    paddingLeft: 20,
                    borderRadius: 15,
                    width: "100%",
                    height: 40,
                    backgroundColor: "#2A2C36"
                  }}
                >
                  <Text style={{ color: "#ABB4BD" }}>Enter your promocode</Text>
                </View>
                <View
                  style={{
                    top: 2,
                    justifyContent: "center",
                    alignItems: "center",
                    position: "absolute",
                    right: 16,
                    height: 36,
                    width: 36,
                    backgroundColor: "#ABB4BD",
                    borderRadius: 36 / 2
                  }}
                >
                  <Ionicons
                    name="ios-arrow-forward"
                    color="#2A2C36"
                    size={25}
                  />
                </View>
              </TouchableOpacity>
            </View>
            <View style={{ marginTop: 32, paddingLeft: 16 }}>
              <Text style={{ color: "#F7F7F7", fontSize: 18 }}>
                Your Promo Codes
              </Text>
            </View>
            <ScrollView style={{ marginTop: 33, height: 300 }}>
              <View style={{}}>
                {[1, 2, 3, 4, 5, 6, 8].map(item => (
                  <TouchableOpacity
                    onPress={() => {
                      props.navigation.navigate("Catalog");
                    }}
                    key={item}
                    style={{
                      flexDirection: "row",
                      margin: 16,
                      borderRadius: 15,
                      flex: 1
                    }}
                  >
                    <View
                      style={{
                        flex: 2,
                        paddingVertical: 39,
                        paddingLeft: 23,
                        backgroundColor: "#FF3E3E",
                        borderTopLeftRadius: 15,
                        borderBottomLeftRadius: 15
                      }}
                    >
                      <Text
                        style={{
                          fontWeight: "bold",
                          fontSize: 18,
                          color: "#F7F7F7"
                        }}
                      >
                        New
                      </Text>
                    </View>
                    <View
                      style={{
                        flex: 8,
                        flexDirection: "row",
                        justifyContent: "space-between",
                        backgroundColor: "#2A2C36",
                        borderTopRightRadius: 15,
                        borderBottomRightRadius: 15
                      }}
                    >
                      <View style={{ paddingTop: 22, paddingLeft: 14 }}>
                        <Text style={{ color: "#f7f7f7" }}>Personal offer</Text>
                        <Text
                          style={{
                            color: "#f7f7f7",
                            fontSize: 11,
                            marginTop: 4
                          }}
                        >
                          mypromocode2020
                        </Text>
                      </View>
                      <View style={{ paddingTop: 12, paddingRight: 15 }}>
                        <Text style={{ color: "#ABB4BD", fontSize: 11 }}>
                          6 days remaining
                        </Text>
                        <TouchableOpacity
                          style={{
                            marginTop: 10,
                            justifyContent: "center",
                            alignItems: "center",
                            backgroundColor: "#EF3651",
                            borderRadius: 20,
                            width: 93,
                            height: 36
                          }}
                        >
                          <Text style={{ color: "#f7f7f7" }}>Apply</Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </TouchableOpacity>
                ))}
              </View>
            </ScrollView>
          </View>
        </Modal>

        <View>
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
                        <MaterialIcons
                          name="more-vert"
                          color="#ABB4BD"
                          size={20}
                        />
                      </View>

                      <Text style={{ color: "#ABB4BD", fontSize: 11 }}>
                        Color:{" "}
                        <Text
                          style={{
                            color: "#f7f7f7",
                            fontSize: 11
                          }}
                        >
                          Black{" "}
                        </Text>
                        Size:{" "}
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
                          paddingTop: 8,
                          flexDirection: "row",
                          justifyContent: "space-between",
                          // width: 110,
                          alignItems: "center"
                        }}
                      >
                        <View
                          style={{
                            flexDirection: "row",
                            justifyContent: "center",
                            alignItems: "center"
                          }}
                        >
                          <TouchableOpacity
                            style={{
                              elevation: 20,
                              marginRight: 10,
                              justifyContent: "center",
                              alignItems: "center",
                              width: 36,
                              height: 36,
                              borderRadius: 36 / 2,
                              backgroundColor: "#2A2C36",
                              shadowColor: "#000",
                              shadowOffset: {
                                width: 0,
                                height: 2
                              },
                              shadowOpacity: 0.25,
                              shadowRadius: 3.84
                            }}
                          >
                            <Text
                              style={{
                                textAlign: "center",
                                color: "#ABB4BD",
                                fontSize: 26
                              }}
                            >
                              -
                            </Text>
                          </TouchableOpacity>
                          <View style={{ marginRight: 10 }}>
                            <Text style={{ color: "#f7f7f7" }}>1</Text>
                          </View>
                          <TouchableOpacity
                            style={{
                              elevation: 20,
                              justifyContent: "center",
                              alignItems: "center",
                              width: 36,
                              height: 36,
                              borderRadius: 36 / 2,
                              backgroundColor: "#2A2C36",
                              shadowColor: "#000",
                              shadowOffset: {
                                width: 0,
                                height: 2
                              },
                              shadowOpacity: 0.25,
                              shadowRadius: 3.84
                            }}
                          >
                            <Text
                              style={{
                                textAlign: "center",
                                color: "#ABB4BD",
                                fontSize: 26
                              }}
                            >
                              +
                            </Text>
                          </TouchableOpacity>
                        </View>
                        <View style={{ paddingRight: 15 }}>
                          <Text style={{ color: "#F7F7F7" }}>51$</Text>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            )}
          />
        </View>
        <TouchableOpacity
          onPress={() => setPromoCodeModal(true)}
          style={{ paddingHorizontal: 16, flexDirection: "row" }}
        >
          <View
            style={{
              justifyContent: "center",
              // alignItems: "center",
              paddingLeft: 20,
              borderRadius: 15,
              width: "100%",
              height: 40,
              backgroundColor: "#2A2C36"
            }}
          >
            <Text style={{ color: "#ABB4BD" }}>Enter your promocode</Text>
          </View>
          <View
            style={{
              top: 2,
              justifyContent: "center",
              alignItems: "center",
              position: "absolute",
              right: 16,
              height: 36,
              width: 36,
              backgroundColor: "#ABB4BD",
              borderRadius: 36 / 2
            }}
          >
            <Ionicons name="ios-arrow-forward" color="#2A2C36" size={25} />
          </View>
        </TouchableOpacity>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingHorizontal: 16,
            marginTop: 28
          }}
        >
          <View>
            <Text style={{ color: "#ABB4BD" }}>Total amount:</Text>
          </View>
          <View>
            <Text
              style={{ fontSize: 18, color: "#F7F7F7", fontWeight: "bold" }}
            >
              124$
            </Text>
          </View>
        </View>
        <View
          style={{ marginTop: 25, paddingHorizontal: 16, marginBottom: 20 }}
        >
          <TouchableOpacity
            onPress={() => props.navigation.navigate("Checkout")}
            style={{
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#EF3651",
              borderRadius: 30,
              height: 50
            }}
          >
            <Text style={{ color: "#f7f7f7" }}>CHECK OUT</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
