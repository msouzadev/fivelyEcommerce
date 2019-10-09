import React from "react";
import {
  MaterialCommunityIcons,
  MaterialIcons,
  FontAwesome,
  Ionicons
} from "@expo/vector-icons";
import {
  View,
  FlatList,
  Image,
  TouchableOpacity,
  Text,
  TouchableWithoutFeedback,
  ScrollView
} from "react-native";
import MultiSlider from "@ptomasroos/react-native-multi-slider";

import Modal from "../Modal";
// import { Container } from './styles';

export default function FilterModal(props) {
  return (
    <View>
      <Modal open={props.open} onClose={props.onClose} transparent={false}>
        <View style={{ flex: 1, backgroundColor: "#1E1F28" }}>
          <View
            style={{
              marginLeft: 12,
              marginTop: 20,
              flexDirection: "row",
              alignItems: "center",
              paddingHorizontal: 8,
              paddingVertical: 12,
              borderBottomWidth: 1,
              borderColor: "#1E1F28",
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
            <TouchableOpacity onPress={() => props.onClose()}>
              <Ionicons name="ios-arrow-back" color="#F7F7F7" size={30} />
            </TouchableOpacity>
            <View
              style={{
                flex: 8,
                justifyContent: "center",
                alignSelf: "center",
                alignItems: "center"
              }}
            >
              <Text
                style={{
                  color: "#F6F6F6",
                  textAlign: "center",
                  fontSize: 18
                }}
              >
                Filters
              </Text>
            </View>
          </View>
          <ScrollView>
            <View style={{ paddingHorizontal: 16, marginTop: 16 }}>
              <Text style={{ fontSize: 16, color: "#F7F7F7" }}>
                Price range
              </Text>
              <View
                style={{
                  marginTop: 36,
                  borderBottomWidth: 1,
                  borderColor: "#1E1F28"
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between"
                  }}
                >
                  <Text style={{ color: "#F7F7F7", lineHeight: 25 }}>$78</Text>
                  <Text style={{ color: "#F7F7F7", lineHeight: 25 }}>$143</Text>
                </View>
                <MultiSlider
                  sliderLength={370}
                  selectedStyle={{ backgroundColor: "#EF3651" }}
                  unselectedStyle={{ backgroundColor: "#ABB4BD" }}
                  track={{ backgroundColor: "red" }}
                  customMarkerLeft={e => (
                    <View
                      style={{
                        width: 20,
                        height: 20,
                        borderRadius: 10,
                        backgroundColor: "#EF3651"
                      }}
                    ></View>
                  )}
                  customMarkerRight={e => (
                    <View
                      style={{
                        width: 20,
                        height: 20,
                        borderRadius: 10,
                        backgroundColor: "#EF3651"
                      }}
                    ></View>
                  )}
                  values={[1, 6]}
                  container={{ marginLeft: 10 }}
                  isMarkersSeparated={true}
                  onValuesChangeStart={() => {}}
                  onValuesChangeFinish={() => {}}
                />
              </View>
            </View>
            {/* colors */}
            <View style={{ paddingHorizontal: 16, marginTop: 16 }}>
              <Text style={{ color: "#F7F7F7", fontSize: 16 }}>Colors</Text>

              <ScrollView
                horizontal
                style={{ flexDirection: "row", marginTop: 36 }}
              >
                {[
                  "#020202",
                  "#F6F6F6",
                  "#F48117",
                  "#BEA9A9",
                  "#91BA4F",
                  "#2CB1B1"
                ].map((item, index) => (
                  <View
                    style={{
                      width: 50,
                      height: 50,
                      borderColor: "#ABB4BD",
                      borderWidth: index == 2 || index == 4 ? 1 : 0,
                      borderRadius: 50 / 2,
                      marginRight: 20,
                      padding: 4
                    }}
                    key={index}
                  >
                    <View
                      style={{
                        width: 40,
                        height: 40,
                        borderRadius: 40 / 2,
                        backgroundColor: item
                      }}
                    ></View>
                  </View>
                ))}
              </ScrollView>
            </View>
            {/* sizes */}
            <View style={{ paddingHorizontal: 16, marginTop: 16 }}>
              <Text style={{ color: "#F7F7F7", fontSize: 16 }}>Sizes</Text>

              <ScrollView
                horizontal
                style={{ flexDirection: "row", marginTop: 36 }}
              >
                {["XS", "S", "M", "L", "XL"].map((item, index) => (
                  <View
                    style={{
                      backgroundColor: index == 1 && "#EF3651",
                      justifyContent: "center",
                      alignItems: "center",
                      width: 50,
                      height: 50,
                      borderColor: "#ABB4BD",
                      borderWidth: 1,
                      borderRadius: 10,
                      marginRight: 20,
                      padding: 4
                    }}
                    key={index}
                  >
                    <Text style={{ color: index == 1 ? "#2A2C36" : "#F6F6F6" }}>
                      {item}
                    </Text>
                  </View>
                ))}
              </ScrollView>
            </View>
            {/* Categories */}
            <View style={{ paddingHorizontal: 16, marginTop: 16 }}>
              <Text style={{ color: "#F7F7F7", fontSize: 16 }}>Category</Text>

              <View
                style={{
                  flexDirection: "row",
                  marginTop: 36,
                  flexWrap: "wrap"
                }}
              >
                {["All", "Women", "Men", "Boys", "Girls"].map((item, index) => (
                  <View
                    style={{
                      marginBottom: 12,
                      backgroundColor: index == 1 && "#EF3651",
                      justifyContent: "center",
                      alignItems: "center",
                      width: 100,
                      height: 40,
                      borderColor: "#ABB4BD",
                      borderWidth: 1,
                      borderRadius: 10,
                      marginRight: 20,
                      padding: 4
                    }}
                    key={index}
                  >
                    <Text style={{ color: index == 1 ? "#2A2C36" : "#F6F6F6" }}>
                      {item}
                    </Text>
                  </View>
                ))}
              </View>
            </View>
            {/* brands */}
            <TouchableOpacity style={{ paddingHorizontal: 16, marginTop: 16 }}>
              <Text style={{ color: "#F7F7F7", fontSize: 16 }}>Brand</Text>

              <View
                style={{
                  flexDirection: "row",
                  marginTop: 10,
                  flex: 1
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    flex: 8
                  }}
                >
                  <View style={{ flexDirection: "row" }}>
                    {["Adidas Originals", "Nike", "Jack & Jones"].map(
                      (item, index) => (
                        <Text key={index} style={{ color: "#F6F6F6" }}>
                          {item},
                        </Text>
                      )
                    )}
                  </View>
                  <View style={{}}>
                    <Ionicons
                      name="ios-arrow-forward"
                      color="#F7F7F7"
                      size={25}
                    />
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          </ScrollView>
          <View
            style={{
              elevation: 3,
              borderColor: "#1E1F28",
              borderTopWidth: 1,
              paddingHorizontal: 16,
              paddingBottom: 48,
              paddingTop: 20,
              justifyContent: "space-between",
              alignItems: "center",
              flexDirection: "row"
            }}
          >
            <TouchableOpacity
              onPress={props.onClose}
              style={{
                borderColor: "#F6F6F6",
                borderWidth: 1,
                borderRadius: 15,
                width: "45%",
                height: 40,
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <Text style={{ color: "#F6F6F6" }}>Discard</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                borderColor: "#F6F6F6",
                borderWidth: 1,
                borderRadius: 15,
                width: "45%",
                height: 40,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#EF3651"
              }}
            >
              <Text style={{ color: "#F6F6F6" }}>Apply</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}
