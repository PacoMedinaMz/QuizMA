import { useNavigation } from "@react-navigation/core";
import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Card } from "react-native-paper";
import sendFormulario from "../../Peticion";
import Pregunta1 from "./preguntas/Pregunta1";
import Pregunta2 from "./preguntas/Pregunta2";
import Pregunta3 from "./preguntas/Pregunta3";
import Pregunta4 from "./preguntas/Pregunta4";
import Pregunta5 from "./preguntas/Pregunta5";

const Formulario = () => {
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

    sendFormulario("/encuestas/1", data);
  };

  return (
    <View
      style={{
        width: "100%",
      }}
    >
      <Pregunta1 value={genero} setValue={setGenero} />
      <Pregunta2 value={edad} setValue={setEdad} />
      <Pregunta3 value={orientacion} setValue={setOrientacion} />
      <Pregunta4 value={metodos} setValue={setMetodos} />
      <Pregunta5 value={conocimientos} setValue={setConocimientos} />

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

export default Formulario;
