import React from "react";
import { View, StyleSheet, ScrollView, Text } from "react-native";
import { Divider } from "react-native-elements";
import { Card, Title } from "react-native-paper";
import Formulario2 from "../../components/Encuesta2/Formulario2";

const Encuesta2Screen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.info}>
        <Card style={styles.card}>
          <Card.Content>
            <Title style={styles.cardtitle}>¡Vamos a comenzar!</Title>
            <Divider style={{ backgroundColor: "blue" }} />
            <Text style={styles.texto}>
              {"\n"}Contesta las preguntas que se muestran a continuación.
            </Text>
            <Divider
              style={{
                backgroundColor: "blue",
                marginTop: 25,
                marginBottom: 10,
              }}
            />

            <Formulario2 />
          </Card.Content>
        </Card>

        <Text style={styles.nota}>
          {"\n"}Nota: Tus respuestas son totalmente anónimas. Serán usadas para
          fines estadísticos y de calidad.
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
  info: {
    flex: 0.9,
    justifyContent: "space-between",
    backgroundColor: "#F3F3F3",
    marginTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
  },
  card: {
    backgroundColor: "#fff",
    borderColor: "#CFCFCF",
    borderBottomWidth: 1.5,
    borderLeftWidth: 1.5,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    marginTop: 10,
  },
  cardtitle: {
    paddingBottom: 5,
    fontSize: 23,
    textAlign: "center",
    justifyContent: "center",
    fontWeight: "bold",
  },
  texto: {
    textAlign: "center",
    justifyContent: "center",
    alignContent: "center",
    fontSize: 20,
    textAlign: "left",
  },
  nota: {
    justifyContent: "flex-start",
    alignContent: "flex-start",
    fontSize: 15,
    textAlign: "left",
  },
});

export default Encuesta2Screen;
