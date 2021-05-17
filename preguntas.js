import React from 'react';
import { View, StyleSheet, ScrollView, Text, Image, TouchableOpacity } from 'react-native'
import { Divider } from 'react-native-elements';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';



export default function preguntas({ navigation, navigation: { goBack } }) {

    return (
        <View style={styles.info}>
            <Card style={styles.card}>
                <Card.Content>
                    {/* Pregunta */}
                    <Title style={styles.cardtitle}>¿Buscas opciones para antes o después del acto?</Title>
                    <Divider style={{ backgroundColor: 'blue' }} />
                </Card.Content>

                {/* Imagen de la pregunta */}
                <Card.Cover style={styles.cardimg} source={require('./assets/intro.jpg')} />

            </Card>

            {/* CARD de respuestas */}
            <Card style={styles.respuestas}>

                <TouchableOpacity
                    // onPress={() => goBack()}    //Cambiar este para redirigir a sigiuente pregunta
                    style={styles.respuestabtn}>
                    <Text style={styles.botonSalir}>Antes</Text>
                </TouchableOpacity>


                <TouchableOpacity
                    // onPress={() => { navigation.navigate() }} //Cambiar este para redirigir a sigiuente pregunta
                    style={styles.respuestabtn}>
                    <Text style={styles.botonOk}>Después</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    // onPress={() => { navigation.navigate() }} //Cambiar este para redirigir a sigiuente pregunta
                    style={styles.respuestabtn}>
                    <Text style={styles.botonOk}>No lo sé</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    // onPress={() => { navigation.navigate() }} //Cambiar este para redirigir a sigiuente pregunta
                    style={styles.respuestabtn}>
                    <Text style={styles.botonOk}>Otro</Text>
                </TouchableOpacity>
            </Card>
        </View>
    );
}

// Estilos

const styles = StyleSheet.create({
    respuestas: {
        backgroundColor: '#fff',
        borderColor: '#CFCFCF',
        borderBottomWidth: 1.5,
        borderLeftWidth: 1.5,
        borderRadius: 10,
        marginTop: 10,
    },
    respuestabtn: {
        fontSize: 25,
        textAlign: 'center',
        color: '#fff',
        backgroundColor: '#FF4646',
        borderRadius: 15,
        padding: 2,
        margin: 10,
    },
    info: {
        flex: .9,
        justifyContent: "space-between",
        backgroundColor: "#F3F3F3",
        marginTop: 20,
        paddingLeft: 20,
        paddingRight: 20,
    },
    card: {
        backgroundColor: '#fff',
        borderColor: '#CFCFCF',
        borderBottomWidth: 1.5,
        borderLeftWidth: 1.5,
        borderRadius: 10,
        marginTop: 10,
    },
    cardimg: {
        width: 370,
        height: 250,
        marginTop: 10,
        marginBottom: 10,
        borderRadius: 10,
        justifyContent: 'center',
        alignContent: 'center'
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
        justifyContent: 'center',
        alignContent: 'center',
        fontSize: 20,
        textAlign: 'left',
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
        alignContent: 'center',
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