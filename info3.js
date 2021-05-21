import React from 'react';
import { View, StyleSheet, ScrollView, Text, Image, TouchableOpacity } from 'react-native'
import { Divider } from 'react-native-elements';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { Collapse, CollapseHeader, CollapseBody, AccordionList } from 'accordion-collapse-react-native';


export default function info3({ navigation: { goBack } }) {
    return (
        <ScrollView style={styles.scrollView}>
            <View style={styles.info}>

                {/* Título */}
                <Title style={styles.cardtitle}>Métodos de Baja Eficacia</Title>
                <Divider style={{ backgroundColor: 'black' }} />

                {/*Calendario*/}
                <Collapse>
                    <CollapseHeader>
                        <View>
                            <Card style={styles.imgAcordeon}>
                                <Text style={styles.textoScroll}>Calendario</Text>
                            </Card>
                        </View>
                    </CollapseHeader>
                    <CollapseBody style={styles.body}>
                        <Text style={styles.texto}>{'\n'}
                            <Title style={{ fontWeight: "bold" }}>Conocido como:</Title> Contar los días, método natural. {'\n'}{'\n'}
                            <Title style={{ fontWeight: "bold" }}>Descripción:</Title> Se basa en evitar tener relaciones sexuales durante los días fértiles de la mujer. Es decir, los anteriores y posteriores a la ovulación. {'\n'}{'\n'}
                            <Title style={{ fontWeight: "bold" }}>Cómo se usa:</Title> Se establece un patrón en el ciclo menstrual de la mujer. Dependiendo de su regularidad se establecen los días fértiles y se evitan las relaciones sexuales vaginales durante esos días.{'\n'}{'\n'}
                            <Title style={{ fontWeight: "bold" }}>Beneficios:</Title> Es una alternativa válida para quienes deciden usar métodos naturales. {'\n'}{'\n'}
                            <Title style={{ fontWeight: "bold" }}>Consideraciones:</Title> Es un sistema poco efectivo ya que el ciclo menstrual puede no ser regular, sumado a que los espermatozoides pueden permanecer en el cuerpo de la mujer hasta 72 hs. después de la relación sexual. Es sumamente difícil calcular el período fértil. Implica no tener relaciones sexuales vaginales en cierto período. {'\n'}{'\n'}
                            <Title style={{ fontWeight: "bold" }}>Eficacia:</Title> Baja.{'\n'}{'\n'}
                            <Title style={{ fontWeight: "bold" }}>Frecuencia de uso:</Title> En cada relación sexual. {'\n'}{'\n'}
                            <Title style={{ fontWeight: "bold" }}>Mitos:</Title>{'\n'}{'\n'}
                            *No es cierto que la mujer solo puede ovular una vez durante su periodo. {'\n'}{'\n'}
                            *No es cierto que la ovulación es siempre en el mismo momento del ciclo. {'\n'}{'\n'}
                            <Title style={{ fontWeight: "bold" }}>Efecto reversible:</Title> Es reversible al momento de dejar de practicarlo.{'\n'}{'\n'}
                            <Title style={{ fontWeight: "bold" }}>Previene ITS:</Title> No previene de infecciones de transmisión sexual.{'\n'}</Text>
                        <Divider style={{ backgroundColor: 'black' }} />
                    </CollapseBody>
                </Collapse>

                {/*Coito Interrumpido*/}
                <Collapse>
                    <CollapseHeader>
                        <View>
                            <Card style={styles.imgAcordeon}>
                                <Text style={styles.textoScroll}>Coito Interrumpido</Text>
                            </Card>
                        </View>
                    </CollapseHeader>
                    <CollapseBody style={styles.body}>
                        <Text style={styles.texto}>{'\n'}
                            <Title style={{ fontWeight: "bold" }}>Conocido como:</Title> Interrupción, Acabar afuera. {'\n'}{'\n'}
                            <Title style={{ fontWeight: "bold" }}>Descripción:</Title> Consiste en evitar depositar el esperma en la mujer, eyaculando fuera de la vagina .{'\n'}{'\n'}
                            <Title style={{ fontWeight: "bold" }}>Cómo se usa:</Title> El hombre saca su pene de la vagina antes de eyacular.{'\n'}{'\n'}
                            <Title style={{ fontWeight: "bold" }}>Beneficios:</Title> Es una alternativa válida para quienes deciden usar métodos naturales.{'\n'}{'\n'}
                            <Title style={{ fontWeight: "bold" }}>Consideraciones:</Title> Es un sistema poco efectivo ya que, aún si el hombre retira el pene a tiempo, el líquido preseminal puede contener cantidad suficiente de espermatozoides como para provocar un embarazo.{'\n'}{'\n'}
                            <Title style={{ fontWeight: "bold" }}>Eficacia:</Title> Baja.{'\n'}{'\n'}
                            <Title style={{ fontWeight: "bold" }}>Frecuencia de uso:</Title> En cada relación sexual.{'\n'}{'\n'}
                            <Title style={{ fontWeight: "bold" }}>Mitos:</Title>{'\n'}{'\n'}
                            *No es cierto que el liquido preseminal no contiene suficientes espermatozoides como para provocar un embarazo. {'\n'}{'\n'}
                            <Title style={{ fontWeight: "bold" }}>Efecto reversible:</Title> Es reversible al momento de dejar de practicarlo. {'\n'}{'\n'}
                            <Title style={{ fontWeight: "bold" }}>Previene ITS:</Title> No previene de infecciones de transmisión sexual. {'\n'}</Text>
                        <Divider style={{ backgroundColor: 'black' }} />
                    </CollapseBody>
                </Collapse>

                {/*Espermicidas*/}
                <Collapse>
                    <CollapseHeader>
                        <View>
                            <Card style={styles.imgAcordeon}>
                                <Text style={styles.textoScroll}>Espermicidas</Text>
                            </Card>
                        </View>
                    </CollapseHeader>
                    <CollapseBody style={styles.body}>
                        <Text style={styles.texto}>{'\n'}
                            <Title style={{ fontWeight: "bold" }}>Conocido como:</Title> Espermicidas {'\n'}{'\n'}
                            <Title style={{ fontWeight: "bold" }}>Descripción:</Title> Son cremas, espumas, geles u óvulos que se colocan en la vagina y contienen productos químicos que impiden el movimiento de los espermatozoides.{'\n'}{'\n'}
                            <Title style={{ fontWeight: "bold" }}>Cómo se usa:</Title> Se coloca en la vagina y se debe esperar 10 minutos después de colocar el espermicida antes de tener relaciones sexuales.{'\n'}{'\n'}
                            <Title style={{ fontWeight: "bold" }}>Beneficios:</Title>Se pueden usar como parte del juego sexual previo y pueden servir como complemento de otros métodos anticonceptivos.{'\n'}{'\n'}
                            <Title style={{ fontWeight: "bold" }}>Consideraciones:</Title> Se recomienda combinar su uso con otros métodos para aumentar su eficacia. En algunos casos puede ocasionar reacción alérgica o irritación en la mujer o en su pareja. El uso repetido y a altas dosis de nonoxinol-9 se ha asociado a un aumento del riesgo de sufrir lesiones genitales lo que, a su vez, puede aumentar el riesgo de adquirir la infección por VIH.{'\n'}{'\n'}
                            <Title style={{ fontWeight: "bold" }}>Eficacia:</Title> En general, son anticonceptivos de baja eficacia.{'\n'}{'\n'}
                            <Title style={{ fontWeight: "bold" }}>Mitos:</Title>{'\n'}{'\n'}
                            *No es cierto que los preservativos deben estar acompañados de espermicidas.{'\n'}{'\n'}
                            <Title style={{ fontWeight: "bold" }}>Efecto reversible:</Title> Es reversible al momento de dejar de usarlos.{'\n'}{'\n'}
                            <Title style={{ fontWeight: "bold" }}>Previene ITS:</Title> No previene de infecciones de transmisión sexual. {'\n'}</Text>
                        <Divider style={{ backgroundColor: 'black' }} />
                    </CollapseBody>
                </Collapse>

                 {/*Diafragma*/}
                 <Collapse>
                    <CollapseHeader>
                        <View>
                            <Card style={styles.imgAcordeon}>
                                <Text style={styles.textoScroll}>Diafragma</Text>
                            </Card>
                        </View>
                    </CollapseHeader>
                    <CollapseBody style={styles.body}>
                        <Text style={styles.texto}>{'\n'}
                            <Title style={{ fontWeight: "bold" }}>Conocido como:</Title> Diafragma. {'\n'}{'\n'}
                            <Title style={{ fontWeight: "bold" }}>Descripción:</Title> Es un disco de goma que se usa para cubrir el cuello del útero e impide que ingrese el semen. Viene en diferentes tamaños.{'\n'}{'\n'}
                            <Title style={{ fontWeight: "bold" }}>Cómo se usa:</Title>  Un profesional de la salud debe medir cuál es el que se ajusta a cada mujer. Lo coloca la mujer en la vagina hasta 6 horas antes de la relación sexual. Después de la eyaculación, se debe esperar entre 6 y 8 hs. para retirarlo. De lo contrario se debería recurrir a la anticoncepción hormonal de emergencia.{'\n'}{'\n'}
                            <Title style={{ fontWeight: "bold" }}>Beneficios:</Title>Puede ser colocado por la mujer antes de la relación sexual.{'\n'}{'\n'}
                            <Title style={{ fontWeight: "bold" }}>Consideraciones:</Title>  Además de su baja efectividad, es necesaria alta motivación y práctica por parte de la mujer para colocarlo, retirarlo, lavarlo y guardarlo adecuadamente luego de cada uso. Debe combinarse su uso con espermicidas que, en su uso repetido y en altas dosis, pueden incrementar el riesgo de lesiones genitales. Eficacia: Baja. Se utiliza con gel o espuma espermicida para mejorar su eficacia.{'\n'}{'\n'}
                            <Title style={{ fontWeight: "bold" }}>Eficacia:</Title> En general, son anticonceptivos de baja eficacia.{'\n'}{'\n'}
                            <Title style={{ fontWeight: "bold" }}>Mitos:</Title>{'\n'}{'\n'}
                            *No es cierto que se puede quedar dentro del cuerpo o migrar a otros órganos.{'\n'}{'\n'}
                            <Title style={{ fontWeight: "bold" }}>Efecto reversible:</Title> Es reversible al momento de dejar de usarlos.{'\n'}{'\n'}
                            <Title style={{ fontWeight: "bold" }}>Previene ITS:</Title> No previene de infecciones de transmisión sexual. {'\n'}</Text>
                        <Divider style={{ backgroundColor: 'black' }} />
                    </CollapseBody>
                </Collapse>


                 {/*Protectores Buucales*/}
                 <Collapse>
                    <CollapseHeader>
                        <View>
                            <Card style={styles.imgAcordeon}>
                                <Text style={styles.textoScroll}>Protectores Bucales</Text>
                            </Card>
                        </View>
                    </CollapseHeader>
                    <CollapseBody style={styles.body}>
                        <Text style={styles.texto}>{'\n'}
                            <Title style={{ fontWeight: "bold" }}>Conocido como:</Title> Campo o barrera de látex. {'\n'}{'\n'}
                            <Title style={{ fontWeight: "bold" }}>Descripción:</Title> Es una superficie de látex que se coloca sobre la vagina o el ano para practicar sexo oral.{'\n'}{'\n'}
                            <Title style={{ fontWeight: "bold" }}>Cómo se usa:</Title> Se lo puede fabricar a partir de un preservativo, cortando la punta cerrada y luego cortando el cilindro verticalmente o puede usarse papel film de cocina.{'\n'}{'\n'}
                            <Title style={{ fontWeight: "bold" }}>Beneficios:</Title> Pueden ser usados por todas las personas.{'\n'}{'\n'}
                            <Title style={{ fontWeight: "bold" }}>Consideraciones:</Title> No es un método anticonceptivo. Requiere de la práctica y la voluntad para su correcto uso.{'\n'}{'\n'}
                            <Title style={{ fontWeight: "bold" }}>Eficacia:</Title> Alta en prevención de ITS y VIH.{'\n'}{'\n'}
                            <Title style={{ fontWeight: "bold" }}>Mitos:</Title>{'\n'}{'\n'}
                            *No es cierto que el sexo oral no transmite infecciones de transmisión sexual.{'\n'}{'\n'}
                            <Title style={{ fontWeight: "bold" }}>Efecto reversible:</Title> Es reversible al momento de dejar de usarlos.{'\n'}{'\n'}
                            <Title style={{ fontWeight: "bold" }}>Previene ITS:</Title> Sí, solo en prácticas de sexo oral. {'\n'}</Text>
                        <Divider style={{ backgroundColor: 'black' }} />
                    </CollapseBody>
                </Collapse>
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
        marginTop: 20,
        paddingLeft: 20,
        paddingRight: 20,
    },
    body: {
        paddingLeft: 20,
        paddingRight: 20,
    },
    imgAcordeon: {
        width: 330,
        height: 100,
        borderRadius: 10,
        marginTop: 15,
        marginBottom: 5,
        backgroundColor: '#FF4646',
        alignContent: 'center',
        alignSelf: 'center',
        justifyContent: 'center',

    },

    card: {
        backgroundColor: '#FF4646',
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
        alignSelf: 'center'
    },
    textoScroll: {
        fontSize: 25,
        paddingTop: 32,
        alignContent: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
        color: '#fff',
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