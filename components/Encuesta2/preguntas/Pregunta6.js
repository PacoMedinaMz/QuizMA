import React from "react";
import Pregunta from "../../Pregunta";
import { Picker } from "@react-native-picker/picker";

const Pregunta6 = ({ value, setValue }) => {
  return (
    <Pregunta title="¿Cuál fue el método recomendado?">
      <Picker
        selectedValue={value}
        onValueChange={(itemValue) => setValue(itemValue)}
        style={{
          width: "100%",
          height: 40,
        }}
      >
        <Picker.Item label="Condón" value="condon" />
        <Picker.Item label="DIU" value="diu" />
        <Picker.Item
          label="Pastillas hormonales"
          value="pastillas_hormonales"
        />
        <Picker.Item label="Parche" value="parche" />
        <Picker.Item label="Anillo hormonal" value="anillo_hormonal" />
        <Picker.Item
          label="Pastilla de emergencia"
          value="pastilla_emergencia"
        />
        <Picker.Item label="Otro" value="otro" />
      </Picker>
    </Pregunta>
  );
};

export default Pregunta6;
