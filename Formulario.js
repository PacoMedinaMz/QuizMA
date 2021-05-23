import React from 'react';
import { View, StyleSheet, ScrollView, Text, Image, TouchableOpacity } from 'react-native'
import { Divider } from 'react-native-elements';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import Form from './Form.js';

export default function Formulario({ navigation: { goBack } }) {

    return (
        <ScrollView style={styles.scrollView}>
            <View style={styles.info}>
                <Card style={styles.card}>
                    {/* Título */}
                    <Title style={styles.cardtitle}>Mi Experiencia QuizMA</Title>
                    <Divider style={{ backgroundColor: 'black' }} />
                    <Form></Form>
                </Card>

                <Card style={styles.card}>
                    <Card.Content>

                        <Card.Content>
                            <Title style={styles.cardtitle}>¿Cómo evaluar?</Title>
                            <Divider style={{ backgroundColor: 'black' }} />
                            <Text style={styles.texto}>{'\n'}A continuación se muestran los valores a tomar en cuenta siendo 1 el más bajo y 5 el más alto.</Text>
                            <Text style={styles.texto}>{'\n'}Nula (1)</Text>
                            <Text style={styles.texto}>{'\n'}Mala (2)</Text>
                            <Text style={styles.texto}>{'\n'}Regular (3)</Text>
                            <Text style={styles.texto}>{'\n'}Buena (4)</Text>
                            <Text style={styles.texto}>{'\n'}Excelente (5)</Text>

                        </Card.Content>
                        {/* Regresar btn */}
                        <TouchableOpacity
                            onPress={() => goBack()}
                            style={styles.boton}>
                            <Text style={styles.botonSalir}>Regresar</Text>
                        </TouchableOpacity>

                    </Card.Content>
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
        marginTop: 20,
        paddingLeft: 20,
        paddingRight: 20,
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
        padding: 7,
    },
    cardimg: {
        width: 300,
        height: 300,
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