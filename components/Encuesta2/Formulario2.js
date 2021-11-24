import { useNavigation } from "@react-navigation/core";
import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Card } from "react-native-paper";
import Pregunta6 from "./preguntas/Pregunta6";
import Pregunta7 from "./preguntas/Pregunta7";
import Pregunta8 from "./preguntas/Pregunta8";
import Pregunta9 from "./preguntas/Pregunta9";
import Pregunta10 from "./preguntas/Pregunta10";
import sendFormulario from "../../Peticion";

const Formulario2 = () => {
  const navigation = useNavigation();

  const [recomendado, setRecomendado] = useState("condon");
  const [puntuacion, setPuntuacion] = useState("0");
  const [aplicacion, setAplicacion] = useState("0");
  const [dinamica, setDinamica] = useState("0");
  const [calificacion, setCalificacion] = useState("0");

  const enviar = () => {
    const data = {
      recomendado: recomendado,
      puntuacion: puntuacion,
      aplicacion: aplicacion,
      dinamica: dinamica,
      calificacion: calificacion,
    };
    console.log(data);

    sendFormulario("/encuestas/2", data);
    //alert("¡Gracias por tu colaboración!");
    //navigation.navigate("Menu");

    navigation.navigate("Encuesta1");
  };

  return (
    <View
      style={{
        width: "100%",
      }}
    >
      <Pregunta6 value={recomendado} setValue={setRecomendado} />
      <Pregunta7 value={puntuacion} setValue={setPuntuacion} />
      <Pregunta8 value={aplicacion} setValue={setAplicacion} />
      <Pregunta9 value={dinamica} setValue={setDinamica} />
      <Pregunta10 value={calificacion} setValue={setCalificacion} />

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
