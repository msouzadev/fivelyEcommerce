import React from "react";
import { View, Text } from "react-native";
import TopTab from "../../routes/shop";
// import { Container } from './styles';

export default function Shop() {
  return (
    <View style={{ marginTop: 40 }}>
      <Text>Shop</Text>
      <TopTab />
    </View>
  );
}
