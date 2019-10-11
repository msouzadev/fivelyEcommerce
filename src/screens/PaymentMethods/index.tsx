import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  ImageBackground,
  Image,
  TouchableOpacity
} from "react-native";
import AddCardModal from "../../components/AddCardModal";
// import { Container } from './styles';
import { MaterialIcons } from "@expo/vector-icons";
export default function PaymentMethods(props) {
  const [openModal, setOpenModal] = useState(false);
  const cardVisa = require("../../../assets/img/card-visa.png");
  const cardMaster = require("../../../assets/img/credit-card.png");
  return (
    <>
      <ScrollView style={{ backgroundColor: "#1E1F28" }}>
        <View style={{ flex: 1, marginTop: 40, marginBottom: 40 }}>
          {/* payment cards */}
          <View>
            <View style={{ paddingHorizontal: 16 }}>
              <Text style={{ color: "#f7f7f7" }}>Your payment cards</Text>
            </View>
            {[1, 2, 3, 4].map(item => (
              <View key={item}>
                <TouchableOpacity onPress={() => props.navigation.goBack()}>
                  <View>
                    <View style={{ borderRadius: 25 }}>
                      <ImageBackground
                        style={{
                          borderRadius: 25,
                          flex: 1,
                          width: "100%",
                          // height: item % 2 == 0 ? 200 : 220,
                          marginTop: 15,
                          paddingVertical: 35
                        }}
                        source={cardMaster}
                      >
                        <View
                          style={{ paddingHorizontal: 30, borderRadius: 25 }}
                        >
                          <View
                            style={{
                              flexDirection:
                                item % 2 == 0 ? "column-reverse" : "column"
                            }}
                          >
                            <Image
                              source={require("../../../assets/img/chip.png")}
                            ></Image>
                            <View
                              style={{
                                marginTop: 30,
                                flexDirection: "row",
                                justifyContent: "space-between",
                                width: "100%"
                              }}
                            >
                              <Text style={{ color: "#f7f7f7", fontSize: 24 }}>
                                * * * *
                              </Text>
                              <Text style={{ color: "#f7f7f7", fontSize: 24 }}>
                                * * * *
                              </Text>
                              <Text style={{ color: "#f7f7f7", fontSize: 24 }}>
                                * * * *
                              </Text>
                              <Text style={{ color: "#f7f7f7", fontSize: 24 }}>
                                3947
                              </Text>
                            </View>
                          </View>
                          <View
                            style={{
                              flexDirection: "row",
                              marginTop: 43,
                              justifyContent: "space-between"
                            }}
                          >
                            <View>
                              <Text style={{ fontSize: 10, color: "#FFFFFF" }}>
                                Card holder Name
                              </Text>
                              <Text style={{ color: "#FFFFFF", marginTop: 5 }}>
                                Jennyfer Doe
                              </Text>
                            </View>
                            <View>
                              <Text style={{ fontSize: 10, color: "#FFFFFF" }}>
                                Expiry Date
                              </Text>
                              <Text style={{ color: "#FFFFFF", marginTop: 5 }}>
                                05/23
                              </Text>
                            </View>
                            {item % 2 != 0 && (
                              <View style={{ paddingRight: 25 }}>
                                <Image
                                  source={require("../../../assets/img/mastercard.png")}
                                />
                              </View>
                            )}
                          </View>
                        </View>
                      </ImageBackground>
                    </View>
                  </View>
                </TouchableOpacity>
                <View
                  style={{
                    paddingHorizontal: 16,
                    marginTop: 10,
                    flexDirection: "row",
                    alignItems: "center"
                  }}
                >
                  <MaterialIcons
                    name="check-box-outline-blank"
                    size={28}
                    color="#ABB4BD"
                  />
                  <Text style={{ color: "#f7f7f7", marginLeft: 13 }}>
                    Use as default payment method
                  </Text>
                </View>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>

      <TouchableOpacity
        onPress={() => setOpenModal(true)}
        style={{
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
          width: 46,
          height: 46,
          borderRadius: 46 / 2,
          bottom: 30,
          right: 16,
          backgroundColor: "#f7f7f7"
        }}
      >
        <Text style={{ textAlign: "center", fontSize: 25 }}>+</Text>
      </TouchableOpacity>
      <AddCardModal
        open={openModal}
        transparent={true}
        onClose={() => setOpenModal(false)}
      />
    </>
  );
}
