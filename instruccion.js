import React from 'react';
import { View, StyleSheet, ScrollView, Text, Image, TouchableOpacity } from 'react-native'
import { Divider } from 'react-native-elements';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';


export default function instruccion({navigation: { goBack } }) {

    return (
        <ScrollView style={styles.scrollView}>
            <View style={styles.info}>
                <Card style={styles.card}>
                    <Card.Content>
                        {/* Título */}
                        <Title style={styles.cardtitle}>¿Cómo funciona?</Title>
                        <Divider style={{ backgroundColor: 'black' }} />
                        <Text style={styles.texto}>{'\n'}Esta aplicación esta desarrollada para brindarte información acerca de la educación
                        sexual y el uso adecuado de anticonceptivos y preservativos.{'\n'}</Text>

                        {/* ¿Qué se puede hacer? */}
                        <Title style={{ fontWeight: "bold" }}>¿Qué se puede hacer?</Title>
                        <Text style={styles.texto}>Dentro de la aplicación se puede consultar información de manera libre en el apartado de
                            <Text style={{ fontWeight: "bold" }}> "Más Información"</Text>, en el cuál podras aprender muchas cosas nuevas.
                        </Text>

                        <Card.Cover style={styles.cardimg} source={require('./assets/anatommas.jpg')} />


                        <Text style={styles.texto}>{'\n'}Existe un apartado llamado
                            <Text style={{ fontWeight: "bold" }}> "Empezar"</Text>. Este consiste en un cuestionario personalizado en el cual
                            en base a tus elecciones, te recomendaremos los mejores métodos y consejos específicos para ti.
                        </Text>


                        <Text style={styles.texto}>{'\n'}
                            <Text style={{ fontWeight: "bold" }}>"Ayúdanos"</Text> Es un apartado en donde nos puedes ayudar a recolectar información, para que 
                            nuestros resultados sean más precisos.
                        </Text>

                        <Card.Cover style={styles.cardimg} source={require('./assets/inst2.jpg')} />

                        <Title style={{ fontWeight: "bold" }}>{'\n'}Recuerda que...</Title>
                        <Text style={styles.texto}>Toda tu información personal y elecciones dentro de los cuestionarios, así como tus consultas de información
                        serán privadas y solo accesibles para ti.{'\n'}</Text>

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
        padding: 8,
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
        textAlign: 'justify',
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