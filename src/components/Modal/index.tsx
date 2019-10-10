import React, { useState } from "react";
import { View, Modal as RNModal, TouchableWithoutFeedback } from "react-native";

// import { Container } from './styles';

export default function Modal(props) {
  const [open, setOpen] = useState(true);
  return (
    <View>
      <RNModal
        animationType="slide"
        transparent={props.transparent}
        visible={props.open}
        onRequestClose={props.onClose}
      >
        <TouchableWithoutFeedback onPress={props.onClose}>
          <View
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.3);",
              ...props.style
            }}
          ></View>
        </TouchableWithoutFeedback>
        {props.children}
      </RNModal>
    </View>
  );
}
