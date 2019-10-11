import React, { useState } from "react";
import { View, ScrollView, Text, Switch, TouchableOpacity } from "react-native";
import ChangePasswordModal from "../../components/ChangePasswordModal";
// import { Container } from './styles';

export default function Settings() {
  const [openModal, setModal] = useState(false);
  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#1E1F28" }}>
      <View
        style={{
          paddingHorizontal: 16,
          flex: 1,
          marginTop: 23
        }}
      >
        <ChangePasswordModal
          open={openModal}
          transparent={true}
          style={{ flex: 1 }}
          onClose={() => setModal(false)}
        />
        <View>
          <Text style={{ color: "#f7f7f7", fontWeight: "bold", fontSize: 16 }}>
            Personal Information
          </Text>
          <View
            style={{
              marginTop: 21,
              borderRadius: 10,
              backgroundColor: "#2A2C36",
              padding: 22
            }}
          >
            <Text style={{ color: "#ABB4BD" }}>Full name</Text>
          </View>
          <View
            style={{
              marginTop: 21,
              borderRadius: 10,
              backgroundColor: "#2A2C36",
              paddingVertical: 22,
              paddingHorizontal: 22
            }}
          >
            <Text style={{ color: "#ABB4BD", fontSize: 11 }}>
              Date of Birth
            </Text>
            <Text style={{ color: "#f7f7f7" }}>12/12/1989</Text>
          </View>

          <View style={{ marginTop: 54 }}>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text style={{ color: "#f7f7f7", fontWeight: "bold" }}>
                Password
              </Text>
              <TouchableOpacity onPress={() => setModal(true)}>
                <Text style={{ color: "#ABB4BD" }}>Change</Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                marginTop: 21,
                borderRadius: 10,
                backgroundColor: "#2A2C36",
                paddingVertical: 14,
                paddingHorizontal: 22
              }}
            >
              <Text style={{ color: "#ABB4BD", fontSize: 11 }}>Password</Text>
              <Text style={{ color: "#f7f7f7" }}>******</Text>
            </View>
          </View>
          <View style={{ marginTop: 55, marginBottom: "35%" }}>
            <Text
              style={{ fontWeight: "bold", color: "#f7f7f7", fontSize: 16 }}
            >
              Notifications
            </Text>
            <View
              style={{
                flexDirection: "row",
                marginTop: 23,
                justifyContent: "space-between"
              }}
            >
              <Text style={{ color: "#F6F6F6" }}>Sales</Text>
              <Switch
                onValueChange={() => {}}
                value={true}
                thumbColor={"#55D85A"}
                trackColor={{ true: "#2A2C36", false: "#ABB4BD" }}
              />
            </View>
            <View
              style={{
                flexDirection: "row",
                marginTop: 23,
                justifyContent: "space-between"
              }}
            >
              <Text style={{ color: "#F6F6F6" }}>New arrivals</Text>
              <Switch
                disabled
                ios_backgroundColor={"#2A2C36"}
                onValueChange={() => {}}
                value={undefined}
                thumbColor={"#ABB4BD"}
                trackColor={{ true: "#2A2C36", false: "#2A2C36" }}
              />
            </View>
            <View
              style={{
                flexDirection: "row",
                marginTop: 23,
                justifyContent: "space-between"
              }}
            >
              <Text style={{ color: "#F6F6F6" }}>Sales</Text>
              <Switch
                disabled
                ios_backgroundColor={"#2A2C36"}
                onValueChange={() => {}}
                value={undefined}
                thumbColor={"#ABB4BD"}
                trackColor={{ true: "#2A2C36", false: "#2A2C36" }}
              />
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
