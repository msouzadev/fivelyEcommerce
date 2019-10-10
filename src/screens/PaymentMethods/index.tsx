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

export default function PaymentMethods() {
  const [openModal, setOpenModal] = useState(false);
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
                <View>
                  <View style={{ borderRadius: 25 }}>
                    <ImageBackground
                      style={{
                        borderRadius: 25,
                        flex: 1,
                        width: "100%",
                        // height: 216,
                        marginTop: 30,
                        paddingVertical: 35
                      }}
                      source={require("../../../assets/img/credit-card.png")}
                    >
                      <View style={{ paddingHorizontal: 30, borderRadius: 25 }}>
                        <Image
                          source={require("../../../assets/img/chip.png")}
                        ></Image>
                        <View
                          style={{
                            marginTop: 30,
                            flexDirection: "row",
                            justifyContent: "space-between",
                            width: 300
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
                          <View style={{ paddingRight: 25 }}>
                            <Image
                              source={require("../../../assets/img/mastercard.png")}
                            />
                          </View>
                        </View>
                      </View>
                    </ImageBackground>
                  </View>
                </View>
                <View style={{ paddingHorizontal: 16, marginTop: 25 }}>
                  <Text style={{ color: "#f7f7f7" }}>
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
