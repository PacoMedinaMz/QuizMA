import React, { useState } from "react";
import { BackHandler } from "react-native";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Button,
} from "react-native";
import { Card, Title } from "react-native-paper";
import Home from "./home";
import Instruccion from "./Instruccion";
import Informacion from "./Informacion";
import Ayuda from "./Ayuda";
import Formulario from "./Formulario";

export default function menu({ navigation }) {
  return (
    <View style={styles.menu}>
      {/* Título */}
      <View>
        <Text style={styles.titleHome}>Bienvenido</Text>
      </View>
      <Card.Cover
        style={styles.cardimg}
        source={require("./assets/logo1.png")}
      />
      <View>
        <Text style={styles.textoCentrado}>Selecciona una opción:</Text>
      </View>
      {/* BOTONES */}

      <View style={styles.top}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Home");
          }}
          style={styles.boton}
        >
          <Text style={styles.botonhome}>Empezar</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.middle}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Instruccion");
          }}
          style={styles.boton}
        >
          <Text style={styles.botonhome}>¿Cómo Funciona?</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.middle}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Informacion");
          }}
          style={styles.boton}
        >
          <Text style={styles.botonhome}>Más Información</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.bottom}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Ayuda");
          }}
          style={styles.boton}
        >
          <Text style={styles.botonhome}>Ayúdanos</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.bottom}>
        <TouchableOpacity
          onPress={() => BackHandler.exitApp()}
          style={styles.boton}
        >
          <Text style={styles.botonhome}>Salir</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

//ESTILOS

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F3F3",
    alignItems: "center",
    padding: 1,
    justifyContent: "center",
  },
  cardimg: {
    width: 100,
    height: 100,
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 10,
    alignSelf: "center",
  },
  titleStyle: {
    padding: 15,
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
  },
  titleHome: {
    marginTop: 100,
    textAlign: "center",
    alignSelf: "center",
    fontSize: 35,
    fontWeight: "bold",
  },
  paragraphStyle: {
    padding: 10,
    textAlign: "center",
    fontSize: 16,
  },
  introImageStyle: {
    width: 300,
    height: 300,
  },
  introTextStyle: {
    fontSize: 25,
    padding: 10,
    color: "white",
    textAlign: "center",
    paddingVertical: 1,
  },
  introTitleStyle: {
    marginTop: 105,
    fontSize: 35,
    color: "white",
    textAlign: "center",
    marginBottom: 0,
    fontWeight: "bold",
  },
  SubmitButton: {
    backgroundColor: "#B30000",
    borderRadius: 10,
    borderWidth: 1,
    width: 150,
    height: 80,

    justifyContent: "center",
    alignItems: "center",
    borderColor: "#fff",
  },
  botonText: {
    fontSize: 25,
    color: "#fff",
    color: "black",
  },
  boton: {
    width: 350,
    height: 210,

    justifyContent: "center",
  },
  botonhome: {
    fontSize: 25,
    textAlign: "center",
    color: "#fff",
  },
  menu: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: "#F3F3F3",
    padding: 50,
    margin: 15,
  },
  top: {
    flex: 0.15,
    backgroundColor: "#FF4646",
    borderColor: "#CFCFCF",
    borderBottomWidth: 3,
    borderLeftWidth: 3,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    marginTop: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  middle: {
    flex: 0.15,
    backgroundColor: "#FA7373",
    borderColor: "#CFCFCF",
    borderBottomWidth: 3,
    borderLeftWidth: 3,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  bottom: {
    flex: 0.15,
    backgroundColor: "#FFB8B8",
    borderColor: "#CFCFCF",
    borderBottomWidth: 3,
    borderLeftWidth: 3,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  textoCentrado: {
    fontSize: 18,
    color: "#fff",
    color: "black",
    justifyContent: "center",
    alignSelf: "center",
  },
});
