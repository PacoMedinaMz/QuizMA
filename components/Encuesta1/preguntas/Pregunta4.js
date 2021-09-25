import React from "react";
import Pregunta from "../Pregunta";
import MultiSelect from "react-native-multiple-select";

const Pregunta4 = ({ value, setValue }) => {
  const items = [
    {
      id: "condon",
      name: "Condón",
    },
    {
      id: "diu",
      name: "DIU",
    },
    {
      id: "hormonal",
      name: "Pastillas hormonales",
    },
    {
      id: "parche",
      name: "Parche",
    },
    {
      id: "anillo",
      name: "Anillo hormonal",
    },
    {
      id: "emergencia",
      name: "Pastilla de emergencia",
    },
    {
      id: "otro",
      name: "Otro",
    },
  ];

  return (
    <Pregunta title="¿Cuál método anticonceptivo consideras mejor para ti (Marca todas las opciones que consideres)?">
      <MultiSelect
        hideTags
        items={items}
        uniqueKey="id"
        onSelectedItemsChange={(selectedItems) => setValue(selectedItems)}
        selectedItems={value}
        selectText="Seleccione..."
        searchInputPlaceholderText="Buscar"
        tagRemoveIconColor="#CCC"
        tagBorderColor="#CCC"
        tagTextColor="#CCC"
        selectedItemTextColor="#009616"
        selectedItemIconColor="#009616"
        itemTextColor="#000"
        displayKey="name"
        searchInputStyle={{ color: "#CCC" }}
        submitButtonColor="#009616"
        submitButtonText="Aceptar"
      />
    </Pregunta>
  );
};

export default Pregunta4;
