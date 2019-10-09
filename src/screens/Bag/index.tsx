import React from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  ScrollView
} from "react-native";
import Header from "../../components/CatalogHeader";
import {
  FontAwesome,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons
} from "@expo/vector-icons";
export default function Bag(props) {
  return (
    <View style={{ backgroundColor: "#1E1F28", flex: 1 }}>
      <Header {...props} title={"My Bag"} />
      <ScrollView style={{ marginBottom: "27%" }}>
        <View>
          <FlatList
            keyExtractor={item => String(item)}
            style={{ marginHorizontal: 16, marginTop: 20 }}
            data={[1, 2, 3]}
            renderItem={({ item }) => (
              <View>
                <View
                  onPress={() => props.navigation.navigate("Product")}
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
        <View style={{ paddingHorizontal: 16, flexDirection: "row" }}>
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
            <Text style={{ color: "#ABB4BD" }}>Enter tour promocode</Text>
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
        </View>
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
