import React, { Fragment, useState } from "react";
import { View } from "react-native";
import Pregunta1 from "./preguntas/Pregunta1";
import Pregunta2 from "./preguntas/Pregunta2";
import Pregunta3 from "./preguntas/Pregunta3";
import Pregunta4 from "./preguntas/Pregunta4";
import Pregunta5 from "./preguntas/Pregunta5";

const Formulario = () => {
  const [genero, setGenero] = useState("na");
  const [edad, setEdad] = useState("1");
  const [orientacion, setOrientacion] = useState("0");
  const [metodos, setMetodos] = useState([]);
  const [conocimientos, setConocimientos] = useState("0");

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
    </View>
  );
};

export default Formulario;
