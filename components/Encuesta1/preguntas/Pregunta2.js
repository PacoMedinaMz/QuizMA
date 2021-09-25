import React from "react";
import Pregunta from "../Pregunta";
import { Picker } from "@react-native-picker/picker";

const Pregunta2 = ({ value, setValue }) => {
  return (
    <Pregunta title="¿A qué rango de edad perteneces?">
      <Picker
        selectedValue={value}
        onValueChange={(itemValue) => setValue(itemValue)}
        style={{
          width: "100%",
          height: 40,
        }}
      >
        <Picker.Item label="Menor a 12 años" value="1" />
        <Picker.Item label="De 12 a 17 años" value="2" />
        <Picker.Item label="De 18 a 25 años" value="3" />
        <Picker.Item label="De 26 a 35 años" value="4" />
        <Picker.Item label="De 36 a 45 años" value="5" />
        <Picker.Item label="De 46 a 59 años" value="6" />
        <Picker.Item label="Más de 60 años" value="7" />
      </Picker>
    </Pregunta>
  );
};

export default Pregunta2;
