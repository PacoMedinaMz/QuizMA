import React from 'react';
import { View, StyleSheet, ScrollView, Text, Image, Divider, TouchableOpacity } from 'react-native'


import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import info1 from './info1';
import info2 from './info2';
import info3 from './info3';
import info4 from './info4';


export default function Informacion({ navigation, navigation: { goBack } }) {
    return (
        <ScrollView style={styles.scrollView}>
            <View style={styles.info}>

                {/* CONOCIMIENTO BÁSICO */}
                <Card style={styles.card}>
                    <Card.Content>
                        <Title style={styles.cardtitle}>Conocimiento Básico</Title>
                    </Card.Content>
                    <Card.Cover style={styles.cardimg} source={require('./assets/infobasics2.jpg')} />
                    <Card.Actions style={styles.cardbtn}>
                        <TouchableOpacity
                            onPress={() => { navigation.navigate(info1) }}
                            style={styles.respuestabtn}>
                            <Text style={styles.botonOk}>Consultar</Text>
                        </TouchableOpacity>
                    </Card.Actions>
                </Card>

                {/* MÉTODOS ANTICONCEPTIVOS */}
                <Card style={styles.card}>
                    <Card.Content>
                        <Title style={styles.cardtitle}>Métodos Anticonceptivos</Title>
                    </Card.Content>
                    <Card.Cover style={styles.cardimg} source={require('./assets/anatomfem.jpg')} />
                    <Card.Actions style={styles.cardbtn}>
                        <TouchableOpacity
                            onPress={() => { navigation.navigate(info2) }} //Cambiar este para redirigir
                            style={styles.respuestabtn}>
                            <Text style={styles.botonOk}>Consultar</Text>
                        </TouchableOpacity>
                    </Card.Actions>
                </Card>

                {/*  */}
                <Card style={styles.card}>
                    <Card.Content>
                        <Title style={styles.cardtitle}>Metodos de Baja Eficacia</Title>
                    </Card.Content>
                    <Card.Cover style={styles.cardimg} source={require('./assets/inv2.jpg')} />
                    <Card.Actions style={styles.cardbtn}>
                        <TouchableOpacity
                            onPress={() => { navigation.navigate(info3) }}
                            style={styles.respuestabtn}>
                            <Text style={styles.botonOk}>Consultar</Text>
                        </TouchableOpacity>
                    </Card.Actions>
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

const styles = StyleSheet.create({
    info: {
        flex: .45,
        justifyContent: "space-between",
        backgroundColor: "#F3F3F3",
        marginTop: 20,
        paddingLeft: 20,
        paddingRight: 20,
    },
    card: {
        backgroundColor: '#fff',
        borderBottomColor: '#CFCFCF',
        borderLeftColor: '#CFCFCF',
        borderRadius: 10,
        borderBottomWidth: 2,
        borderLeftWidth: 1,
        marginTop: 10,
    },
    cardimg: {
        width: 370,
        height: 200,
        alignSelf: 'center',
    },
    cardtitle: {
        paddingBottom: 5,
        fontSize: 23,
        textAlign: 'center',
        justifyContent: 'center'
    },
    cardbtn: {
        justifyContent: 'flex-end',
        alignContent: 'center',
    },
    boton: {
        width: 150,
        height: 100,
        marginTop: 25,
        margin: 10,
        alignSelf: 'center'
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
        fontSize: 20,
        textAlign: 'center',
        color: '#FF4646',
        backgroundColor: '#fff',
        borderRadius: 15,
        padding: 3,
        margin: 5,
        marginLeft: 10
    },



})