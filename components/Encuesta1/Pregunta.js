import React from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-elements";

const Pregunta = ({ title, children }) => {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <View>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 15,
    fontWeight: "bold",
  },
});

export default Pregunta;
