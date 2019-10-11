import React from "react";
import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import Modal from "../Modal";
import {} from "react-native-gesture-handler";
import { FontAwesome } from "@expo/vector-icons";
// import { Container } from './styles';

export default function ChangePasswordModal(props) {
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
          backgroundColor: "#1E1F28",
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          elevation: 20,
          maxHeight: "70%"
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
          <Text
            style={{
              color: "#F6F6F6",
              fontSize: 18,
              marginTop: 26,
              fontWeight: "bold"
            }}
          >
            Password Change
          </Text>
        </View>
        <View>
          <ScrollView style={{ marginTop: 33, paddingHorizontal: 16 }}>
            <View>
              {/* card name */}
              <View
                style={{
                  borderRadius: 8,
                  backgroundColor: "#2A2C36",
                  padding: 20
                }}
              >
                <Text style={{ color: "#ABB4BD", fontSize: 16 }}>
                  Old Password
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "flex-end",
                  marginTop: 14,
                  marginBottom: 18
                }}
              >
                <Text style={{ textAlign: "center", color: "#ABB4BD" }}>
                  Forgot Password?
                </Text>
              </View>
              {/* card number */}
              <View
                style={{
                  borderRadius: 10,
                  marginBottom: 20,
                  backgroundColor: "#2A2C36",
                  paddingVertical: 22,
                  paddingHorizontal: 20,
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center"
                }}
              >
                <View>
                  <Text style={{ color: "#ABB4BD" }}>New Password</Text>
                </View>
              </View>
              {/* expire date */}
              <View
                style={{
                  borderRadius: 10,
                  marginBottom: 20,
                  backgroundColor: "#2A2C36",
                  paddingVertical: 22,
                  paddingHorizontal: 20,
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center"
                }}
              >
                <View>
                  <Text style={{ color: "#ABB4BD" }}>Repeat New Password</Text>
                </View>
              </View>
              {/* cvv */}
              <TouchableOpacity
                style={{
                  borderRadius: 30,
                  marginBottom: 100,
                  backgroundColor: "#EF3651",
                  paddingVertical: 14,
                  paddingHorizontal: 20,
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <View>
                  <Text style={{ color: "#ABB4BD" }}>SAVE PASSWORD</Text>
                </View>
              </TouchableOpacity>
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
