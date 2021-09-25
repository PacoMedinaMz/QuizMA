import React, { Fragment } from "react";
import { Text } from "react-native-elements";
import Pregunta from "../Pregunta";

const Pregunta1 = () => {
  return (
    <Fragment>
      <Pregunta title="¿Cuál es tu género?">
        <Text>select</Text>
      </Pregunta>
    </Fragment>
  );
};

export default Pregunta1;
