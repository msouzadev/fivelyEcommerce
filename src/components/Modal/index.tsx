import React, { useState } from "react";
import { View, Modal as RNModal, TouchableWithoutFeedback } from "react-native";

// import { Container } from './styles';

export default function Modal(props) {
  const [open, setOpen] = useState(true);
  return (
    <View>
      <RNModal
        animationType="fade"
        transparent={props.transparent}
        visible={props.open}
        onRequestClose={props.onClose}
      >
        <TouchableWithoutFeedback onPress={props.onClose}>
          <View
            style={{ opacity: 0.3, backgroundColor: "#000000", ...props.style }}
          ></View>
        </TouchableWithoutFeedback>
        {props.children}
      </RNModal>
    </View>
  );
}
