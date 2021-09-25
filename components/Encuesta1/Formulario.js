import React, { Fragment, useState } from "react";
import { View } from "react-native";
import Pregunta1 from "./preguntas/Pregunta1";
import Pregunta2 from "./preguntas/Pregunta2";

const Formulario = () => {
  const [genero, setGenero] = useState("na");
  const [edad, setEdad] = useState("1");

  return (
    <View
      style={{
        width: "100%",
      }}
    >
      <Pregunta1 value={genero} setValue={setGenero} />
      <Pregunta2 value={edad} setValue={setEdad} />
    </View>
  );
};

export default Formulario;
