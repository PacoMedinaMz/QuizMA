import React from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-elements";

const Pregunta = ({ title, children }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingBottom: 20,
  },
  title: {
    fontSize: 15,
    fontWeight: "bold",
    paddingBottom: 5,
  },
});

export default Pregunta;
