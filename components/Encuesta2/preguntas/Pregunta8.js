import React from "react";
import Pregunta from "../../Pregunta";
import { Picker } from "@react-native-picker/picker";

const Pregunta8 = ({ value, setValue }) => {
  return (
    <Pregunta title="¿En qué grado consideras que la aplicación contribuyó a tu educación sexual?">
      <Picker
        selectedValue={value}
        onValueChange={(itemValue) => setValue(itemValue)}
        style={{
          width: "100%",
          height: 40,
        }}
      >
        <Picker.Item label="Nula" value="1" />
        <Picker.Item label="Mala" value="2" />
        <Picker.Item label="Mínima" value="3" />
        <Picker.Item label="Regular" value="4" />
        <Picker.Item label="Básica" value="5" />
        <Picker.Item label="Buena" value="6" />
        <Picker.Item label="Excelente" value="7" />
      </Picker>
    </Pregunta>
  );
};

export default Pregunta8;
