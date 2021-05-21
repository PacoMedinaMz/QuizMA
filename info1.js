import React from 'react';
import { View, StyleSheet, FlatList, ScrollView, Text, Image, TouchableOpacity } from 'react-native'
import { Divider } from 'react-native-elements';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';


export default function info1({ navigation: { goBack } }) {

    return (
        <ScrollView style={styles.scrollView}>
            <View style={styles.info}>
                <Card style={styles.card}>
                    <Card.Content>
                        {/* Título */}
                        <Title style={styles.cardtitle}>¿Qué es un Anticonceptivo?</Title>
                        <Divider style={{ backgroundColor: 'black' }} />
                        <Text style={styles.texto}>{'\n'}Es aquel que impide o reduce significativamente las posibilidades de una fecundación
                         o un embarazo en las relaciones sexuales. {'\n'}</Text>

                        <Text style={styles.texto}>Los métodos anticonceptivos contribuyen decisivamente en la toma de
                        decisiones sobre el control de la natalidad (número de hijos que se desean o no tener), la prevención de embarazos,
                         así como en la disminución del número de embarazos no deseados y embarazos adolescentes.{'\n'}</Text>

                        <Card.Cover style={styles.cardimg} source={require('./assets/anticoncep1.jpg')} />

                        <Text style={styles.texto}>{'\n'}Cada método tiene sus indicaciones y deberá buscarse aquel
                        que sea más idóneo para cada circunstancia y permita una mejor salud sexual.{'\n'}</Text>
                    </Card.Content>
                </Card>

                <Card style={styles.card}>
                    <Card.Content>
                        <Title style={styles.cardtitle}>Factores que deben considerarse en la elección del método anticonceptivo</Title>
                        <Divider style={{ backgroundColor: 'black' }} />


                        <Text style={styles.texto}>{'\n'}*Estado de salud general{'\n'}{'\n'}
                            *Frecuencia de las relaciones sexuales.{'\n'}{'\n'}
                            *Número de parejas sexuales{'\n'}{'\n'}
                            *Si se desea tener hijos (deben descartarse los métodos irreversibles).{'\n'}{'\n'}
                            *Eficacia de cada método en la prevención del embarazo.{'\n'}{'\n'}
                            *Efectos secundarios.{'\n'}{'\n'}
                            *Facilidad y comodidad de uso del método elegido.{'\n'}{'\n'}</Text>
                    </Card.Content>
                </Card>

                    <Card style={styles.card}>
                        <Card.Content>
                            <Title style={styles.cardtitle}>Alta efectividad</Title>
                            <Divider style={{ backgroundColor: 'black' }} />

                            <Text style={styles.texto}>
                                {'\n'}
                            Si se usan correctamente, estos métodos proporcionan una alta eficacia.
                            Es decir que para una persona que usa alguno de estos métodos correctamente,
                            las probabilidades de quedar embarazada son casi nulas. {'\n'}

                                {'\n'}De todos estos métodos
                            sólo el preservativo previene embarazos no planificados e infecciones de transmisión sexual.{'\n'}</Text>
                        </Card.Content>
                    </Card>
            </View>

                {/* Regresar btn */}
                <TouchableOpacity
                    onPress={() => goBack()}
                    style={styles.boton}>
                    <Text style={styles.botonSalir}>Regresar</Text>
                </TouchableOpacity>
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