import React from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import { Divider } from "react-native-elements";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";
import P1 from "./preg/P1";

export default function Home({ navigation, navigation: { goBack } }) {
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.info}>
        <Card style={styles.card}>
          <Card.Content>
            <Title style={styles.cardtitle}>¡Vamos a comenzar!</Title>
            <Divider style={{ backgroundColor: "blue" }} />
            <Text style={styles.texto}>
              {"\n"}Tendrás que contestar las preguntas que se mostrarán a
              continuación.
            </Text>
            <Text style={styles.texto}>
              {"\n"}De esta manera, podremos recomendarte lo mas adecuado para
              ti.{"\n"}
            </Text>
          </Card.Content>

          <Card.Cover
            style={styles.cardimg}
            source={require("./assets/intro.jpg")}
          />

          <Card.Actions style={styles.cardbtn}>
            {/* Regresar btn */}
            <TouchableOpacity onPress={() => goBack()} style={styles.boton}>
              <Text style={styles.botonOk}>Regresar</Text>
            </TouchableOpacity>

            {/* Continuar btn */}
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("P1");
              }}
              style={styles.boton}
            >
              <Text style={styles.botonOk}>Comenzar</Text>
            </TouchableOpacity>

            {/* Ayúdanos */}
            {/*<TouchableOpacity
              onPress={() => navigation.navigate("Encuesta1")}
              style={styles.boton}
            >
              <Text style={styles.botonOk}>Ayúdanos</Text>
            </TouchableOpacity>*/}
          </Card.Actions>
        </Card>

        <Text style={styles.nota}>
          {"\n"}Nota: Te recordamos que toda tu información personal será
          visible solo para ti.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
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
  cardimg: {
    width: 370,
    height: 300,
    marginLeft: 5,
    borderRadius: 10,
  },
  cardtitle: {
    paddingBottom: 5,
    fontSize: 23,
    textAlign: "center",
    justifyContent: "center",
    fontWeight: "bold",
  },
  cardbtn: {
    justifyContent: "center",
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
  boton: {
    width: "33%",
    height: 100,
    justifyContent: "center",
    alignContent: "center",
  },
  botonSalir: {
    fontSize: 25,
    textAlign: "center",
    color: "#fff",
    backgroundColor: "#FF4646",
    borderRadius: 15,
    padding: 3,
    margin: 5,
  },
  botonOk: {
    fontSize: 20,
    textAlign: "center",
    color: "#fff",
    backgroundColor: "#FF4646",
    borderRadius: 15,
    padding: 4,
    margin: 5,
    marginLeft: 10,
  },
});
