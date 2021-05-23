import React from 'react';
import { View, StyleSheet, ScrollView, Text, Image, TouchableOpacity } from 'react-native'
import { Divider } from 'react-native-elements';
import { Card, Title } from 'react-native-paper';
import P3 from './P3';
import P4 from './P4';

export default function P2({ navigation, navigation: { goBack } }) {

    return (
        <View style={styles.info}>
            <Card style={styles.card}>
                <Card.Content>
                    {/* Pregunta */}
                    <Title style={styles.cardtitle}>¿Lo usarías en periodos de tiempo bien definidos?</Title>
                    <Divider style={{ backgroundColor: 'blue' }} />
                </Card.Content>

                {/* Imagen de la pregunta */}
                <Card.Cover style={styles.cardimg} source={require('../assets/infobasics2.jpg')} />

            </Card>

            {/* CARD de respuestas */}
            <Card style={styles.respuestas}>

                <TouchableOpacity
                    onPress={() => { navigation.navigate(P4) }}     //Cambiar este para redirigir a sigiuente pregunta
                    style={styles.respuestabtn}>
                    <Text style={styles.botonSalir}>Si</Text>
                </TouchableOpacity>


                <TouchableOpacity
                    onPress={() => { navigation.navigate(P3) }}    //Cambiar este para redirigir a sigiuente pregunta
                    style={styles.respuestabtn}>
                    <Text style={styles.botonOk}>No</Text>
                </TouchableOpacity>
            </Card>

                {/* Btn Salir */}
                <TouchableOpacity
                    onPress={() => goBack()}
                    style={styles.btnregreso}>
                    <Text style={styles.txtregreso}>Regresar</Text>
                </TouchableOpacity>
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
        flex: 1,
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
        width: 330,
        height: 250,
        marginTop: 10,
        marginBottom: 10,
        borderRadius: 10,
        alignSelf: 'center'
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
    btnregreso: {
        color: '#FF4646',
        backgroundColor: '#F3F3F3',
        padding: 3,
        margin: 5,
        width:110,
    },
    txtregreso: {
        fontSize: 20,
        textAlign: 'left',
        color: '#FF4646',
        backgroundColor: '#F3F3F3',
        borderRadius: 15,
        padding: 3,
        margin: 5,
    }
});