import React from "react";
import Pregunta from "../../Pregunta";
import { Picker } from "@react-native-picker/picker";

const Pregunta1 = ({ value, setValue }) => {
  return (
    <Pregunta title="¿Cuál es tu género?">
      <Picker
        selectedValue={value}
        onValueChange={(itemValue) => setValue(itemValue)}
        style={{
          width: "100%",
          height: 40,
        }}
      >
        <Picker.Item label="Femenino" value="femenino" />
        <Picker.Item label="Masculino" value="masculino" />
        <Picker.Item label="Otro" value="otro" />
        <Picker.Item label="Prefiero no contestar" value="na" />
      </Picker>
    </Pregunta>
  );
};

export default Pregunta1;
