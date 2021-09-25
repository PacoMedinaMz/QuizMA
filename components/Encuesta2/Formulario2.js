import { useNavigation } from "@react-navigation/core";
import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Card } from "react-native-paper";
import Pregunta6 from "./preguntas/Pregunta6";
import Pregunta7 from "./preguntas/Pregunta7";
import Pregunta8 from "./preguntas/Pregunta8";
import Pregunta9 from "./preguntas/Pregunta9";
import Pregunta10 from "./preguntas/Pregunta10";

const Formulario2 = () => {
  const navigation = useNavigation();

  const [genero, setGenero] = useState("na");
  const [edad, setEdad] = useState("1");
  const [orientacion, setOrientacion] = useState("0");
  const [metodos, setMetodos] = useState([]);
  const [conocimientos, setConocimientos] = useState("0");

  const enviar = () => {
    const data = {
      genero: genero,
      edad: edad,
      orientacion: orientacion,
      metodos: metodos,
      conocimientos: conocimientos,
    };
    console.log(data);
  };

  return (
    <View
      style={{
        width: "100%",
      }}
    >
      <Pregunta6 value={genero} setValue={setGenero} />
      <Pregunta7 value={edad} setValue={setEdad} />
      <Pregunta8 value={orientacion} setValue={setOrientacion} />
      <Pregunta9 value={metodos} setValue={setMetodos} />
      <Pregunta10 value={conocimientos} setValue={setConocimientos} />

      <Card.Actions style={styles.cardbtn}>
        {/* Regresar btn */}
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.boton}
        >
          <Text style={styles.botonOk}>Regresar</Text>
        </TouchableOpacity>

        {/* Continuar btn */}
        <TouchableOpacity onPress={() => enviar()} style={styles.boton}>
          <Text style={styles.botonOk}>Enviar</Text>
        </TouchableOpacity>
      </Card.Actions>
    </View>
  );
};

const styles = StyleSheet.create({
  cardbtn: {
    width: "100%",
  },
  boton: {
    width: "50%",
    justifyContent: "center",
    alignContent: "center",
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

export default Formulario2;
