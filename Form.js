import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native";
import axios from "axios";
import { Avatar, Card, Title, Paragraph } from "react-native-paper";

class Form extends Component {
  constructor() {
    super();

    this.state = { cal: "", din: "", edu: "", con: "", exp: "" };
  }

  changeCal(cal) {
    if (cal > 0 && cal < 6) {
      this.setState({ cal });
      console.log(this.state.cal);
      console.log(this.state.con);
      console.log(this.state.din);
      console.log(this.state.edu);
      console.log(this.state.exp);
    } else {
      this.setState({ cal: "" });
    }
  }

  changeDin(din) {
    if (din > 0 && din < 6) {
      this.setState({ din });
      console.log(this.state.din);
    } else {
      this.setState({ din: "" });
    }
  }

  changeEdu(edu) {
    if (edu > 0 && edu < 6) {
      this.setState({ edu });
      console.log(this.state.edu);
    } else {
      this.setState({ edu: "" });
    }
  }

  changeExp(exp) {
    if (exp > 0 && exp < 6) {
      this.setState({ exp });
      console.log(this.state.exp);
    } else {
      this.setState({ exp: "" });
    }
  }

  changeCon(con) {
    if (con > 0 && con < 6) {
      this.setState({ con });
      console.log(this.state.con);
    } else {
      this.setState({ con: "" });
    }
  }

  enviar() {
    console.log("Enviando");
    alert("Enviando");
    if (
      this.state.cal &&
      this.state.con &&
      this.state.edu &&
      this.state.exp &&
      this.state.din
    ) {
      console.log("Completo");

      var datos = JSON.stringify({
        cal: parseInt(this.state.cal),
        con: parseInt(this.state.con),
        edu: parseInt(this.state.edu),
        exp: parseInt(this.state.exp),
        din: parseInt(this.state.din),
      });

      /*var datos = {'cal': 1, 'con': 1, 
        'edu': 1, 'exp': 1, 'din':1 };*/

      console.log(datos);

      axios
        .post(
          "https://apiqm.rmaafs.com/datos",
          { datos },
          {
            "content-type": "application/json",
            Authorization: "xxx",
          }
        )
        .then((res) => {
          console.log(res);
          console.log(res.data);
          alert("Se enviaron con ??xito ")
        })
        .catch((error) => {
          console.log(error)
          alert("Error");
        });
    } else {
      console.log("Incompleto");
      alert("Llena todos los campos");
    }
  }

  render() {
    return (
      <View style={styles.info}>
        <Card style={styles.cardform}>
          <Text style={styles.texto}>
            ??C??mo calificas la calidad de la informaci??n?
          </Text>
          <TextInput
            style={styles.input}
            placeholder="  (1 - 5)"
            value={this.state.cal}
            onChangeText={(cal) => this.changeCal(cal)}
            keyboardType="numeric"
          />
        </Card>

        <Card style={styles.cardform}>
          <Text style={styles.texto}>
            ??Qu?? te pareci?? la din??mica del cuestionario?{" "}
          </Text>
          <TextInput
            style={styles.input}
            placeholder="  (1 - 5)"
            value={this.state.din}
            onChangeText={(din) => this.changeDin(din)}
            keyboardType="number-pad"
          />
        </Card>

        <Card style={styles.cardform}>
          <Text style={styles.texto}>??C??mo calificas tu educaci??n sexual?</Text>
          <TextInput
            style={styles.input}
            placeholder="  (1 - 5)"
            value={this.state.edu}
            onChangeText={(edu) => this.changeEdu(edu)}
            keyboardType="number-pad"
          />
        </Card>

        <Card style={styles.cardform}>
          <Text style={styles.texto}>??Contribu??mos a tu educaci??n sexual?</Text>
          <TextInput
            style={styles.input}
            placeholder="  (1 - 5)"
            value={this.state.con}
            onChangeText={(con) => this.changeCon(con)}
            keyboardType="number-pad"
          />
        </Card>
        <Card style={styles.cardform}>
          <Text style={styles.texto}>
            ??Cumpli?? tus expectativas la aplicaci??n?
          </Text>
          <TextInput
            style={styles.input}
            placeholder="  (1 - 5)"
            value={this.state.exp}
            onChangeText={(exp) => this.changeExp(exp)}
            keyboardType="number-pad"
          />
        </Card>

        {/* Regresar btn */}
        <TouchableOpacity onPress={() => this.enviar()} style={styles.boton}>
          <Text style={styles.botonSalir}>Enviar</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  info: {
    flex: 0.45,
    justifyContent: "space-between",
    backgroundColor: "#fff",
    marginTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
  },
  texto: {
    fontSize: 17,
    alignSelf: "center",
    justifyContent: "center",
  },
  cardform: {
    backgroundColor: "#fff",
    borderRadius: 10,
    borderColor: "#F6B1B1",
    borderBottomWidth: 2,
    borderTopWidth: 2,
    marginTop: 10,
    marginBottom: 10,
    padding: 10,
    justifyContent: "center",
    alignContent: "center",
  },
  cardimg: {
    width: 370,
    height: 200,
    alignSelf: "center",
  },
  boton: {
    width: 150,
    height: 100,
    marginTop: 25,
    margin: 10,
    alignSelf: "center",
  },
  input: {
    height: 40,
    width: 50,
    backgroundColor: "#FFF",
    borderBottomColor: "#000000",
    borderBottomWidth: 1,
    alignSelf: "center",
    alignContent: "center",
  },
  botonSalir: {
    fontSize: 25,
    textAlign: "center",
    color: "#fff",
    backgroundColor: "#FF4646",
    borderRadius: 15,
    padding: 3,
    margin: 5,
  },
});

export default Form;
