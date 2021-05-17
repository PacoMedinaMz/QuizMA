import React from 'react';
import { View, StyleSheet, ScrollView, Text, Image, Divider,TouchableOpacity } from 'react-native'

import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';


export default function Informacion({ navigation }) {
    return (
        <ScrollView style={styles.scrollView}>
            <View style={styles.info}>
                <Card style={styles.card}>
                    <Card.Content>
                        <Title style={styles.cardtitle}>Lo Básico</Title>
                    </Card.Content>
                    <Card.Cover style={styles.cardimg} source={require('./assets/infobasics2.jpg')} />
                    <Card.Actions style={styles.cardbtn}>
                        <TouchableOpacity
                            // onPress={() => { navigation.navigate() }} //Cambiar este para redirigir a sigiuente pregunta
                            style={styles.respuestabtn}>
                            <Text style={styles.botonOk}>Consultar</Text>
                        </TouchableOpacity>
                    </Card.Actions>
                </Card>

                <Card style={styles.card}>
                    <Card.Content>
                        <Title style={styles.cardtitle}>Investigación 2</Title>
                    </Card.Content>
                    <Card.Cover style={styles.cardimg} source={require('./assets/anatommas.jpg')} />
                    <Card.Actions style={styles.cardbtn}>
                    <TouchableOpacity
                            // onPress={() => { navigation.navigate() }} //Cambiar este para redirigir
                            style={styles.respuestabtn}>
                            <Text style={styles.botonOk}>Consultar</Text>
                        </TouchableOpacity>
                    </Card.Actions>
                </Card>

                <Card style={styles.card}>
                    <Card.Content>
                        <Title style={styles.cardtitle}>Investigación 2</Title>
                    </Card.Content>
                    <Card.Cover style={styles.cardimg} source={require('./assets/anatomfem.jpg')} />
                    <Card.Actions style={styles.cardbtn}>
                    <TouchableOpacity
                            // onPress={() => { navigation.navigate() }} //Cambiar este para redirigir 
                            style={styles.respuestabtn}>
                            <Text style={styles.botonOk}>Consultar</Text>
                        </TouchableOpacity>
                    </Card.Actions>
                </Card>
            </View>
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
        width: 380,
        height: 150,
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