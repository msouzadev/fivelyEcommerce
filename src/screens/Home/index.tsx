import React from "react";
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
  Image,
  FlatList
} from "react-native";

// import { Container } from './styles';
const bannerHome = require("../../../assets/img/banner-home.png");
export default function Home() {
  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: "#1E1F28",
        marginBottom: "21.3%"
      }}
    >
      <ImageBackground
        source={bannerHome}
        style={{ width: "100%", height: 520, marginTop: 30 }}
      >
        <View style={{ top: 300, width: 190, marginLeft: 20 }}>
          <Text style={{ color: "#F6F6F6", fontSize: 40, fontWeight: "bold" }}>
            Fashion Sale
          </Text>
          <TouchableOpacity
            style={{
              backgroundColor: "#EF3651",
              justifyContent: "center",
              alignItems: "center",
              paddingVertical: 8,
              paddingHorizontal: 60,
              borderWidth: 1,
              borderRadius: 25,
              borderColor: "#EF3651"
            }}
          >
            <Text style={{ color: "#F5F5F5" }}>Check</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
      <ScrollView style={{ backgroundColor: "#1E1F28" }}>
        <View style={{ marginLeft: 14, marginTop: 33 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginRight: 13
            }}
          >
            <View>
              <Text
                style={{
                  fontSize: 34,
                  lineHeight: 34,
                  color: "#F7F7F7",
                  fontWeight: "bold"
                }}
              >
                New
              </Text>
              <Text style={{ color: "#ABB4BD" }}>
                You've never seen it before
              </Text>
            </View>
            <View>
              <Text style={{ color: "#F7F7F7" }}>View all</Text>
            </View>
          </View>
          <FlatList
            style={{ marginTop: 22, paddingBottom: 20 }}
            horizontal
            data={[1, 2, 3, 4, 5]}
            keyExtractor={item => String(item)}
            renderItem={({ item }) => (
              <Image
                style={{
                  width: 148,
                  height: 184,
                  borderRadius: 15,
                  marginRight: 16
                }}
                key={item}
                source={require("../../../assets/img/product-card.png")}
              />
            )}
          />
        </View>
      </ScrollView>
    </ScrollView>
  );
}
