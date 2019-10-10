import React from "react";
import { View, Text, ScrollView, Image } from "react-native";
import Modal from "../Modal";
import { TouchableOpacity } from "react-native-gesture-handler";
import { FontAwesome } from "@expo/vector-icons";
// import { Container } from './styles';

export default function AddCardModal(props) {
  return (
    <Modal
      style={{ flex: 1 }}
      transparent={true}
      open={props.open}
      onClose={props.onClose}
    >
      <View
        style={{
          position: "absolute",
          bottom: 0,
          width: "100%",
          maxHeight: "90%",
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
            marginTop: 15
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
          <Text style={{ color: "#F6F6F6", fontSize: 18, marginTop: 26 }}>
            Add new card
          </Text>
        </View>
        <View>
          <ScrollView style={{ marginTop: 33, paddingHorizontal: 16 }}>
            <View>
              {/* card name */}
              <View
                style={{
                  borderRadius: 10,
                  marginBottom: 20,
                  backgroundColor: "#2A2C36",
                  padding: 20
                }}
              >
                <Text style={{ color: "#ABB4BD", fontSize: 16 }}>
                  Name on card
                </Text>
              </View>
              {/* card number */}
              <View
                style={{
                  borderRadius: 10,
                  marginBottom: 20,
                  backgroundColor: "#2A2C36",
                  paddingVertical: 14,
                  paddingHorizontal: 20,
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center"
                }}
              >
                <View>
                  <Text style={{ color: "#ABB4BD", fontSize: 11 }}>
                    Card Number
                  </Text>
                  <Text style={{ color: "#f7f7f7", marginTop: 4 }}>
                    5546 8205 3693 3947
                  </Text>
                </View>
                <View>
                  <Image
                    source={require("../../../assets/img/mastercard.png")}
                  />
                </View>
              </View>
              {/* expire date */}
              <View
                style={{
                  borderRadius: 10,
                  marginBottom: 20,
                  backgroundColor: "#2A2C36",
                  paddingVertical: 14,
                  paddingHorizontal: 20,
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center"
                }}
              >
                <View>
                  <Text style={{ color: "#ABB4BD", fontSize: 11 }}>
                    Expire Date
                  </Text>
                  <Text style={{ color: "#f7f7f7", marginTop: 4 }}>05/23</Text>
                </View>
              </View>
              {/* cvv */}
              <View
                style={{
                  borderRadius: 10,
                  marginBottom: 20,
                  backgroundColor: "#2A2C36",
                  paddingVertical: 14,
                  paddingHorizontal: 20,
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center"
                }}
              >
                <View>
                  <Text style={{ color: "#ABB4BD", fontSize: 11 }}>Cvv</Text>
                  <Text style={{ color: "#f7f7f7", marginTop: 4 }}>567</Text>
                </View>
                <View>
                  <FontAwesome
                    name="question-circle-o"
                    color="#ABB4BD"
                    size={28}
                  />
                </View>
              </View>
            </View>
          </ScrollView>
          <View style={{ paddingHorizontal: 16 }}>
            <Text style={{ color: "#f7f7f7" }}>
              Set as default payment method
            </Text>
            <TouchableOpacity
              style={{
                marginBottom: 30,
                borderRadius: 30,
                marginTop: 22,
                backgroundColor: "#EF3651",
                paddingVertical: 14,
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <Text style={{ color: "#f7f7f7", lineHeight: 20 }}>ADD CARD</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}
