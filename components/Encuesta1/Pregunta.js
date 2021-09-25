import React from "react";
import { View } from "react-native";
import { Text } from "react-native-elements";

const Pregunta = ({ title, children }) => {
  return (
    <View>
      <Text>{title}</Text>
      <View>{children}</View>
    </View>
  );
};

export default Pregunta;
