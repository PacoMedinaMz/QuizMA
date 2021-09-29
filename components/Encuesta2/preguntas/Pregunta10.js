import React from "react";
import Pregunta from "../../Pregunta";
import { Picker } from "@react-native-picker/picker";

const Pregunta10 = ({ value, setValue }) => {
  return (
    <Pregunta title="¿Cómo calificas nuestra aplicación?">
      <Picker
        selectedValue={value}
        onValueChange={(itemValue) => setValue(itemValue)}
        style={{
          width: "100%",
          height: 40,
        }}
      >
        <Picker.Item label="Nefasta" value="1" />
        <Picker.Item label="Mala" value="2" />
        <Picker.Item label="Aburrida" value="3" />
        <Picker.Item label="Regular" value="4" />
        <Picker.Item label="Básica" value="5" />
        <Picker.Item label="Buena" value="6" />
        <Picker.Item label="Excelente" value="7" />
      </Picker>
    </Pregunta>
  );
};

export default Pregunta10;
