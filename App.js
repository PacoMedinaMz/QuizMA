import React, { useState } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';

//IMPORTS NAVIGATION
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//IMPORTS DE PAGINAS
import Home from './home';
import menu from './menu';
import instruccion from './instruccion';
import Informacion from './Informacion';
import P1 from './P1';
import info1 from './info1';
import info2 from './info2';
import info3 from './info3';
import info4 from './info4';
import Ayuda from './Ayuda';
import Formulario from './Formulario';
import P2 from './P2';
import P3 from './P3';

import R1 from './res/R1';

const Stack = createStackNavigator();


const App = ({ navigation }) => {


  const [showRealApp, setShowRealApp] = useState(false);
  const onDone = () => {
    setShowRealApp(true);
  };

  const onSkip = () => {
    setShowRealApp(true);
  };



  const RenderItem = ({ item }) => {
    return (

      <View
        style={{
          flex: 1,
          backgroundColor: item.backgroundColor,
          alignItems: 'center',
          justifyContent: 'space-around',
          paddingBottom: 100,
        }}>
        <Text style={styles.introTitleStyle}>{item.title}</Text>
        <Image style={styles.introImageStyle} source={item.image} />
        <Text style={styles.introTextStyle}>{item.text}</Text>


      </View>

    );
  };



  return (
    <>
      {showRealApp ? (

        <NavigationContainer style={styles.navigator}>
          <Stack.Navigator initialRouteName="menu">
            <Stack.Screen name="Menu" component={menu}></Stack.Screen>
            <Stack.Screen name="Home" component={Home}></Stack.Screen>
            <Stack.Screen name="instruccion" component={instruccion}></Stack.Screen>
            <Stack.Screen name="Informacion" component={Informacion}></Stack.Screen>
            <Stack.Screen name="P1" component={P1}></Stack.Screen>
            <Stack.Screen name="info1" component={info1}></Stack.Screen>
            <Stack.Screen name="info2" component={info2}></Stack.Screen>
            <Stack.Screen name="info3" component={info3}></Stack.Screen>
            <Stack.Screen name="info4" component={info4}></Stack.Screen>
            <Stack.Screen name="Ayuda" component={Ayuda}></Stack.Screen>
            <Stack.Screen name="Formulario" component={Formulario}></Stack.Screen>

            <Stack.Screen name="P2" component={P2}></Stack.Screen>
            <Stack.Screen name="P3" component={P3}></Stack.Screen>

            <Stack.Screen name="R1" component={R1}></Stack.Screen>
          </Stack.Navigator>
        </NavigationContainer>

      ) : (

        // SLIDERS

        <AppIntroSlider
          data={slides}
          renderItem={RenderItem}
          onDone={onDone}
          showSkipButton={true}
          onSkip={onSkip}
        />
      )}
    </>
  );
};

export default App;


//ESTILOS

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F3F3',
    alignItems: 'center',
    padding: 1,
    justifyContent: 'center',
  },
  titleStyle: {
    padding: 15,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  titleHome: {
    marginTop: 100,
    textAlign: 'center',
    fontSize: 35,
    fontWeight: 'bold',
  },
  paragraphStyle: {
    padding: 10,
    textAlign: 'center',
    fontSize: 16,
  },
  introImageStyle: {
    width: 300,
    height: 300,
  },
  introTextStyle: {
    fontSize: 25,
    padding: 10,
    color: 'white',
    textAlign: 'center',
    paddingVertical: 1,
  },
  introTitleStyle: {
    marginTop: 105,
    fontSize: 35,
    color: 'white',
    textAlign: 'center',
    marginBottom: 0,
    fontWeight: 'bold',
  },
  SubmitButton: {
    backgroundColor: '#B30000',
    borderRadius: 10,
    borderWidth: 1,
    width: 150,
    height: 80,

    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#fff'
  },
  botonText: {
    fontSize: 25,
    color: '#fff',
    color: 'black',
  },
  boton: {
    width: 350,
    height: 210,

    justifyContent: 'center',

  },
  botonhome: {
    fontSize: 25,
    textAlign: 'center',
    color: '#fff',
  },
  menu: {
    flex: .7,
    justifyContent: "space-between",
    backgroundColor: "#F3F3F3",
    padding: 20,
    margin: 15,
  },
  top: {
    flex: 0.15,
    backgroundColor: "#FF4646",
    borderWidth: 1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    marginTop: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  middle: {
    flex: 0.15,
    backgroundColor: "#FA7373",
    borderWidth: 1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottom: {
    flex: 0.15,
    backgroundColor: "#FFB8B8",
    borderWidth: 1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textoCentrado: {
    fontSize: 18,
    color: '#fff',
    color: 'black',
    justifyContent: 'center',
    alignSelf: 'center',

  }
});

//CONTENIDO DE SLIDES

const slides = [
  {
    key: 's1',
    text: 'Conocer más para cuidarse mejor',
    title: 'Bienvenido a',
    image: require('./assets/logo2.png'),

    backgroundColor: '#B30000',
  },
  {
    key: 's2',
    title: '¡Informate bien!',
    text: 'Te brindamos mucha información para tu cuidado.',
    image: require('./assets/pg2.png'),
    backgroundColor: '#febe29',
  },
  {
    key: 's3',
    title: 'Lo más adecuado para ti.',
    text: 'En base a tus elecciones, te recomendamos lo que es mejor para ti.',
    image: require('./assets/pg3.png'),
    backgroundColor: '#22bcb5',
  },

];
