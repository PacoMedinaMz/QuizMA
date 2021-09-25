import React, { Fragment, useState } from "react";
import { View } from "react-native";
import Pregunta1 from "./preguntas/Pregunta1";

const Formulario = () => {
  const [genero, setGenero] = useState("na");

  return (
    <View
      style={{
        width: "100%",
      }}
    >
      <Pregunta1 value={genero} setValue={setGenero} />
    </View>
  );
};

export default Formulario;
