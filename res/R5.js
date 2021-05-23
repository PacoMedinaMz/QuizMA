import React from 'react';
import { View, StyleSheet, FlatList, ScrollView, Text, Image, TouchableOpacity } from 'react-native'
import { Divider } from 'react-native-elements';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import Home from '../home';


export default function R5({ navigation, navigation: { goBack } }) {

    return (
        <ScrollView style={styles.scrollView}>
            <View style={styles.info}>
                <Card style={styles.card}>
                    <Card.Content>
                        {/* Título */}
                        <Title style={styles.cardtitle}>Resultado</Title>
                        <Divider style={{ backgroundColor: 'black' }} />

                        <Text style={styles.texto}>Te recomendamos el DIU. Según el modelo puede durar años. Deberás 
                            visitar un experto para poder usarlo y tener visitas regulares para revisar su estado.   {'\n'}
                        </Text>

                        <Card.Cover style={styles.cardimg} source={require('../assets/anticoncep1.jpg')} />

                    </Card.Content>
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate("Home");
                          }}
                        style={styles.boton}>
                        <Text style={styles.botonSalir}>Salir</Text>
                    </TouchableOpacity>
                </Card>
            </View>
            
        </ScrollView>

    );
}

// Estilos

const styles = StyleSheet.create({
                info: {
                flex: .9,
        justifyContent: "space-between",
        backgroundColor: "#F3F3F3",
        paddingLeft: 8,
        paddingRight: 8,
    },
    card: {
                backgroundColor: '#fff',
        borderColor: '#CFCFCF',
        justifyContent: 'center',
        borderBottomWidth: 1.5,
        borderLeftWidth: 1.5,
        borderRadius: 10,
        marginTop: 10,
        padding: 10,
    },
    subcard: {
                backgroundColor: '#fff',
        borderColor: '#CFCFCF',
        borderBottomWidth: 1.5,
        borderLeftWidth: 1.5,
        borderRadius: 10,
        padding: 8,
    },
    cardimg: {
                width: 211,
        height: 155,
        marginTop: 10,
        marginBottom: 10,
        borderRadius: 10,
        alignSelf: 'center',
    },
    cardtitle: {
                paddingBottom: 5,
        fontSize: 23,
        textAlign: 'center',
        justifyContent: 'center',
        fontWeight: 'bold',
    },
    cardbtn: {
                justifyContent: 'center'
    },
    texto: {
                textAlign: 'center',
        justifyContent: 'flex-start',
        alignSelf: 'auto',
        fontSize: 20,
    },
    nota: {
                justifyContent: 'flex-start',
        alignContent: 'flex-start',
        fontSize: 15,
        textAlign: 'left',
    },
    boton: {
                width: 150,
        height: 100,
        justifyContent: 'center',
        alignSelf: 'center',
    },
    botonSalir: {
                fontSize: 25,
        textAlign: 'center',
        color: '#fff',
        backgroundColor: '#FF4646',
        borderRadius: 15,
        padding: 3,
        margin: 5,
    },
    botonOk: {
                fontSize: 25,
        textAlign: 'center',
        color: '#fff',
        backgroundColor: '#FF4646',
        borderRadius: 15,
        padding: 3,
        margin: 5,
        marginLeft: 10
    },
});