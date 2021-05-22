import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View , Button, TouchableHighlight} from 'react-native';
import axios from 'axios';

class Form extends Component{
  constructor(){
    super();

    this.state = { cal: '', din: '', edu: '', con: '', exp: '' }
  } 

  changeCal(cal){
    if(cal > 0 && cal < 6){
      this.setState({cal})
      console.log(this.state.cal);
      console.log(this.state.con);
      console.log(this.state.din);
      console.log(this.state.edu);
      console.log(this.state.exp);
    }else{
      this.setState({cal: ''})
    }
  }

  changeDin(din){
    if(din > 0 && din < 6){
      this.setState({din})
      console.log(this.state.din);
    }else{
      this.setState({din: ''})
    }
  }

  changeEdu(edu){
    if(edu > 0 && edu < 6){
      this.setState({edu})
      console.log(this.state.edu);
    }else{
      this.setState({edu: ''})
    }
  }

  changeExp(exp){
    if(exp > 0 && exp < 6){
      this.setState({exp})
      console.log(this.state.exp);
    }else{
      this.setState({exp: ''})
    }
  }

  changeCon(con){
    if(con > 0 && con < 6){
      this.setState({con})
      console.log(this.state.con);
    }else{
      this.setState({con: ''})
    }
  }

  enviar(){
    console.log("Enviando");
    if(this.state.cal && this.state.con && 
      this.state.edu && this.state.exp && this.state.din){
        console.log("Completo");
        axios.get('http://35.239.233.69:3000');

        var datos = JSON.stringify({'cal': parseInt(this.state.cal), 'con': parseInt(this.state.con), 
        'edu': parseInt(this.state.edu), 'exp': parseInt(this.state.exp), 'din':parseInt(this.state.din) });

        /*var datos = {'cal': 1, 'con': 1, 
        'edu': 1, 'exp': 1, 'din':1 };*/

        console.log(datos);

        axios.post('http://35.239.233.69:3000/datos', {datos}).then(res => {
          console.log(res);
          console.log(res.data);
        });

        axios.post('192.168.1.76:3000/d').then(res => {
          console.log(res);
          console.log(res.data);
        });
/*
        fetch('192.168.1.76:3000/datos', {
          method: 'POST',
          headers: {
          Accept: 'application/json',
            'Content-Type': 'application/json'
          },
          body: datos
          });*/

      }else{
        console.log("Incompleto");
      }
  }

  render(){
    return (
      <View style={styles.container}>
        <Text>¿Cómo calificas la calidad de la información?</Text>
        <TextInput placeholder="(1 - 5)" value={this.state.cal}
        onChangeText={(cal) => this.changeCal(cal)} keyboardType="numeric"/>
        
        <Text>¿Qué te parecio la dinamica del cuestionario? </Text>
        <TextInput placeholder="(1 - 5)" value={this.state.din}
        onChangeText={(din) => this.changeDin(din)} keyboardType="number-pad"/>

        <Text>¿Cómo calificas tu educación sexual?</Text>
        <TextInput placeholder="(1 - 5)" value={this.state.edu}
        onChangeText={(edu) => this.changeEdu(edu)} keyboardType="number-pad"/>

        <Text>¿Contribuimos a tu educacion sexual?</Text>
        <TextInput placeholder="(1 - 5)" value={this.state.con}
        onChangeText={(con) => this.changeCon(con)} keyboardType="number-pad"/>

        <Text>¿Cumplió tus expectativas la aplicación?</Text>
        <TextInput placeholder="(1 - 5)" value={this.state.exp}
        onChangeText={(exp) => this.changeExp(exp)} keyboardType="number-pad"/>

        <Button onPress={()=> this.enviar()} title="Enviar"></Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Form;
