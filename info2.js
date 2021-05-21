import React from 'react';
import { View, StyleSheet, ScrollView, Text, Image, TouchableOpacity } from 'react-native'
import { Divider } from 'react-native-elements';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { Collapse, CollapseHeader, CollapseBody, AccordionList } from 'accordion-collapse-react-native';

export default function info2({ navigation: { goBack } }) {

    return (
        <ScrollView style={styles.scrollView}>
            <View style={styles.info}>

                {/* Título */}
                <Title style={styles.cardtitle}>Métodos Anticonceptivos</Title>
                <Divider style={{ backgroundColor: 'black' }} />

                {/*Preservativo Masculino*/}
                <Collapse>
                    <CollapseHeader>
                        <View>
                            <Card.Cover style={styles.imgAcordeon} source={require('./assets/ac1.png')} />
                        </View>
                    </CollapseHeader>
                    <CollapseBody style={styles.body}>
                        <Text style={styles.texto}>{'\n'}
                            <Title style={{ fontWeight: "bold" }}>Conocido como:</Title> Forro, profiláctico, condón, preservativo.{'\n'}{'\n'}
                            <Title style={{ fontWeight: "bold" }}>Descripción:</Title> Es una funda de látex que se coloca en el pene erecto en cada relación sexual e impide que el semen entre en la vagina, ano o boca.{'\n'}{'\n'}
                            <Title style={{ fontWeight: "bold" }}>Cómo se usa:</Title> Se coloca cuando el pene está erecto, se aprieta la punta y se desenrolla hasta la base del pene. Se retira después de la eyaculación, antes de que el pene pierda la erección.{'\n'}{'\n'}
                            <Title style={{ fontWeight: "bold" }}>Beneficios:</Title> Es fácil de conseguir y no repercute en el organismo. Es el único método que previene {'\n'}{'\n'}
                            <Title style={{ fontWeight: "bold" }}>Consideraciones:</Title> Dado que se coloca durante la relación sexual puede interrumpir el juego previo, por eso se recomienda incluirlo en el mismo.
                        Todos los participantes de la relación sexual deben participar e insistir en su uso.{'\n'}{'\n'}
                            <Title style={{ fontWeight: "bold" }}>Eficacia:</Title> Alta, si se lo usa de forma correcta y durante toda la relación sexual.{'\n'}{'\n'}
                            <Title style={{ fontWeight: "bold" }}>Frecuencia de uso:</Title> En cada relación sexual (vaginal, anal u oral) desde el principio hasta el final.{'\n'}{'\n'}
                            <Title style={{ fontWeight: "bold" }}>Mitos:</Title>{'\n'}{'\n'}
                            *No es cierto que si no eyaculé, puedo volver a usarlo.{'\n'}{'\n'}
                            *No es cierto que usar dos preservativos al mismo tiempo aumenta su eficacia. No es cierto que si eyaculo afuera no necesito usarlo.{'\n'}{'\n'}
                            *No es cierto que disminuye la sensibilidad. No es cierto que su uso es responsabilidad sólo del varón.{'\n'}{'\n'}
                            <Title style={{ fontWeight: "bold" }}>Efecto reversible:</Title> Si no se usa, es posible quedar embarazada.{'\n'}{'\n'}
                            <Title style={{ fontWeight: "bold" }}>Previene ITS:</Title> Sí, previene el VIH y otras infecciones de transmisión sexual.</Text>
                        <Divider style={{ backgroundColor: 'black' }} />
                    </CollapseBody>
                </Collapse>

                {/*Pastillas Anticonceptivas*/}
                <Collapse>
                    <CollapseHeader>
                        <View>
                            <Card.Cover style={styles.imgAcordeon} source={require('./assets/ac2.png')} />
                        </View>
                    </CollapseHeader>
                    <CollapseBody style={styles.body}>
                        <Text style={styles.texto}>{'\n'}
                            <Title style={{ fontWeight: "bold" }}>Conocido como:</Title> Pastillas anticonceptivas, anticonceptivos, pastillas.{'\n'}{'\n'}
                            <Title style={{ fontWeight: "bold" }}>Descripción:</Title> Son pastillas de toma diaria hechas a base de hormonas que evitan la ovulación. Existen opciones de 21 o 28 comprimidos.{'\n'}{'\n'}
                            <Title style={{ fontWeight: "bold" }}>Cómo se usa:</Title> Se tiene que tomar una pastilla cada día en el mismo horario, durante 21 o 28 días.
                            Para empezar a usar este método se debe hacer una consulta previa con un médico y éste indicará cuál es la adecuada para cada mujer.{'\n'}{'\n'}
                            <Title style={{ fontWeight: "bold" }}>Beneficios:</Title> Además de evitar los embarazos, previenen algunos tipos de cáncer, reducen los síntomas vinculados al ciclo menstrual y pueden regularlo.{'\n'}{'\n'}
                            <Title style={{ fontWeight: "bold" }}>Consideraciones:</Title> Es necesario sostener una rutina para tomar un comprimido cada día a la misma hora. Interrumpir la toma u
                            olvidar comprimidos disminuye la eficacia. No protege de infecciones de transmisión sexual.{'\n'}{'\n'}
                            <Title style={{ fontWeight: "bold" }}>Eficacia:</Title> Es un método altamente eficaz. Es necesaria la toma correcta de las pastillas.{'\n'}{'\n'}
                            <Title style={{ fontWeight: "bold" }}>Frecuencia de uso:</Title> Todos los días.{'\n'}{'\n'}
                            <Title style={{ fontWeight: "bold" }}>Mitos:</Title>{'\n'}{'\n'}
                            *No es cierto que se debe hacer un descanso después de cierto tiempo.{'\n'}{'\n'}
                            *No es cierto que provocan aumento de peso.{'\n'}{'\n'}
                            *No es cierto que después de los 35 años no se deben tomar.{'\n'}{'\n'}
                            *No es cierto que disminuye el deseo sexual.{'\n'}{'\n'}
                            <Title style={{ fontWeight: "bold" }}>Efecto reversible:</Title> La mujer puede quedar embarazada casi inmediatamente después de haber dejado de tomar las pastillas.
                            No hay aumento de la fertilidad cuando se suspende la toma.{'\n'}{'\n'}
                            <Title style={{ fontWeight: "bold" }}>Previene ITS:</Title> No previene infecciones de transmisión sexual.{'\n'}</Text>
                        <Divider style={{ backgroundColor: 'black' }} />
                    </CollapseBody>
                </Collapse>

                {/*MiniPíldoras*/}
                <Collapse>
                    <CollapseHeader>
                        <View>
                            <Card.Cover style={styles.imgAcordeon} source={require('./assets/ac3.png')} />
                        </View>
                    </CollapseHeader>
                    <CollapseBody style={styles.body}>
                        <Text style={styles.texto}>{'\n'}
                            <Title style={{ fontWeight: "bold" }}>Conocido como:</Title> Minipíldora. {'\n'}{'\n'}
                            <Title style={{ fontWeight: "bold" }}>Descripción:</Title>  Son pastillas de toma diaria, que solo tienen efecto durante la lactancia.
                             Actúan produciendo un espesamiento del moco cervical, lo que dificulta el ascenso de los espermatozoides. {'\n'}{'\n'}
                            <Title style={{ fontWeight: "bold" }}>Cómo se usa:</Title> Las tiene que tomar la mujer todos los días del mes en el mismo horario sin descanso entre cada caja.
                            Para empezar a usar este método se debe hacer una consulta previa con un médico. {'\n'}{'\n'}
                            <Title style={{ fontWeight: "bold" }}>Beneficios:</Title> No tiene ningún efecto sobre el bebé. No afecta el volumen de la leche o su composición.{'\n'}{'\n'}
                            <Title style={{ fontWeight: "bold" }}>Consideraciones:</Title> Solo se puede usar este método si la mujer está amamantando,
                            todavía no menstruó y tiene un bebé de menos de 6 meses que se alimenta exclusivamente de leche materna. {'\n'}{'\n'}
                            <Title style={{ fontWeight: "bold" }}>Eficacia:</Title> Alta. La efectividad disminuye cuando el bebé incorpora otros alimentos por fuera de leche materna o cuando la mujer comienza a menstruar. En ese caso, se debe cambiar el método anticonceptivo. {'\n'}{'\n'}
                            <Title style={{ fontWeight: "bold" }}>Frecuencia de uso:</Title> Todos los días. {'\n'}{'\n'}
                            <Title style={{ fontWeight: "bold" }}>Mitos:</Title>{'\n'}{'\n'}
                            *No es cierto que en el periodo de amamantamiento la mujer no se puede embarazar.  {'\n'}{'\n'}
                            *No es cierto que no es necesario usar un método anticonceptivo si la mujer no menstrua. {'\n'}{'\n'}
                            *No es cierto que los componentes de la minipíldora pueden transmitirse al bebé a través de la leche materna.{'\n'}{'\n'}
                            <Title style={{ fontWeight: "bold" }}>Efecto reversible:</Title> Al dejar de tomarlas la mujer puede quedar embarazada.{'\n'}{'\n'}
                            <Title style={{ fontWeight: "bold" }}>Previene ITS:</Title> No previene infecciones de transmisión sexual. {'\n'}</Text>
                        <Divider style={{ backgroundColor: 'black' }} />
                    </CollapseBody>
                </Collapse>

                {/*Anticoncepcion Inyectable*/}
                <Collapse>
                    <CollapseHeader>
                        <View>
                            <Card.Cover style={styles.imgAcordeon} source={require('./assets/ac4.png')} />
                        </View>
                    </CollapseHeader>
                    <CollapseBody style={styles.body}>
                        <Text style={styles.texto}>{'\n'}
                            <Title style={{ fontWeight: "bold" }}>Conocido como:</Title> Inyección. {'\n'}{'\n'}
                            <Title style={{ fontWeight: "bold" }}>Descripción:</Title> Son dosis de hormonas inyectables que inhiben la ovulación. Vienen en ampolletas. {'\n'}{'\n'}
                            <Title style={{ fontWeight: "bold" }}>Cómo se usa:</Title> Se aplica una inyección intramuscular profunda una vez al mes o trimestralmente, siempre en la misma fecha. {'\n'}{'\n'}
                            <Title style={{ fontWeight: "bold" }}>Beneficios:</Title> Tiene el mismo efecto que las pastillas, pero se aplica de forma mensual o trimestral. {'\n'}{'\n'}
                            <Title style={{ fontWeight: "bold" }}>Consideraciones:</Title>  Es importante respetar la fecha de la nueva inyección.
                            De lo contrario, pierde efectividad. Al inicio del método, las menstruaciones pueden ser irregulares o prolongadas.
                            Con la continuación del método puede disminuir o ausentarse el sangrado menstrual. {'\n'}{'\n'}
                            <Title style={{ fontWeight: "bold" }}>Eficacia:</Title> Alta, siempre y cuando su aplicación se realice en la fecha correcta. {'\n'}{'\n'}
                            <Title style={{ fontWeight: "bold" }}>Frecuencia de uso:</Title> Una vez por mes o cada tres meses. {'\n'}{'\n'}
                            <Title style={{ fontWeight: "bold" }}>Mitos:</Title>{'\n'}{'\n'}
                            *No es cierto que la aplicación de la inyección es siempre dolorosa. {'\n'}{'\n'}
                            *No es cierto que la inyección anticonceptiva puede dejar estéril a la mujer.{'\n'}{'\n'}
                            *No es cierto que después de cierto tiempo de aplicar las inyecciones se debe dejar descansar el organismo. {'\n'}{'\n'}
                            *No es cierto que que puede provocar cáncer.{'\n'}{'\n'}
                            <Title style={{ fontWeight: "bold" }}>Efecto reversible:</Title> Luego de suspender su uso la fertilidad se recupera de inmediato. {'\n'}{'\n'}
                            <Title style={{ fontWeight: "bold" }}>Previene ITS:</Title> No previene infecciones de transmisión sexual. {'\n'}</Text>
                        <Divider style={{ backgroundColor: 'black' }} />
                    </CollapseBody>
                </Collapse>

                {/*Anticoncepcion Oral de Emergencia*/}
                <Collapse>
                    <CollapseHeader>
                        <View>
                            <Card.Cover style={styles.imgAcordeon} source={require('./assets/ac5.png')} />
                        </View>
                    </CollapseHeader>
                    <CollapseBody style={styles.body}>
                        <Text style={styles.texto}>{'\n'}
                            <Title style={{ fontWeight: "bold" }}>Conocido como:</Title> Pastilla del día después. {'\n'}{'\n'}
                            <Title style={{ fontWeight: "bold" }}>Descripción:</Title> Son una o dos pastillas que contienen una alta dosis de hormonas que retrasan la ovulación.
                            Se recomienda su uso sólo para situaciones de emergencia.{'\n'}{'\n'}
                            <Title style={{ fontWeight: "bold" }}>Cómo se usa:</Title> Debe tomarse luego de una relación sexual en la que haya fallado el método o no se haya usado uno.
                            Es más segura dentro de las primeras 12 horas aunque se puede tomar hasta 5 días después. En caso de violación debe tomarse siempre.{'\n'}{'\n'}
                            <Title style={{ fontWeight: "bold" }}>Beneficios:</Title> No tiene contraindicaciones y permite evitar un embarazo luego de haber mantenido relaciones sexuales no protegidas o en las que falló el método. Si la mujer ya está embarazada, no afecta al embrión en formación. La pueden retirar mujeres y varones, adolescentes o adultos, solos o en pareja. En caso de emergencia, está disponible las 24 hs. en la guardia de los hospitales. {'\n'}{'\n'}
                            <Title style={{ fontWeight: "bold" }}>Consideraciones:</Title> No se recomienda su uso habitual. Está indicado exclusivamente para situaciones de emergencia.Puede producir náuseas, vómitos, dolor de cabeza, mareos u otros malestares. {'\n'}{'\n'}
                            <Title style={{ fontWeight: "bold" }}>Eficacia:</Title> Alta, si se toma dentro de los 5 días. Cuanto antes se toma su eficacia es más alta. {'\n'}{'\n'}
                            <Title style={{ fontWeight: "bold" }}>Frecuencia de uso:</Title> En cada relación sexual que haya fallado el método o no se haya usado uno. {'\n'}{'\n'}
                            <Title style={{ fontWeight: "bold" }}>Mitos:</Title>{'\n'}{'\n'}
                            *No es cierto que la pastilla de emergencia es abortiva, ya que actúa antes del embarazo. {'\n'}{'\n'}
                            *No es cierto que solo es efectiva si la tomás inmediatamente después de la relación sexual.{'\n'}{'\n'}
                            *No es cierto que las pastillas de emergencia son más efectivas que los anticonceptivos de uso diario.{'\n'}{'\n'}
                            <Title style={{ fontWeight: "bold" }}>Efecto reversible:</Title> Sí. A partir del día siguiente a la toma, no hay protección. {'\n'}{'\n'}
                            <Title style={{ fontWeight: "bold" }}>Previene ITS:</Title> No previene infecciones de transmisión sexual. {'\n'}</Text>
                        <Divider style={{ backgroundColor: 'black' }} />
                    </CollapseBody>
                </Collapse>

                {/*Dispositivo Intrauterino*/}
                <Collapse>
                    <CollapseHeader>
                        <View>
                            <Card.Cover style={styles.imgAcordeon} source={require('./assets/ac6.png')} />
                        </View>
                    </CollapseHeader>
                    <CollapseBody style={styles.body}>
                        <Text style={styles.texto}>{'\n'}
                            <Title style={{ fontWeight: "bold" }}>Conocido como:</Title> DIU {'\n'}{'\n'}
                            <Title style={{ fontWeight: "bold" }}>Descripción:</Title> Es una pequeña pieza de plástico con cobre que impide que los espermatozoides se junten con el óvulo, evitando así el embarazo. {'\n'}{'\n'}
                            <Title style={{ fontWeight: "bold" }}>Cómo se usa:</Title> Se coloca en el interior del útero por un profesional en un consultorio.{'\n'}{'\n'}
                            <Title style={{ fontWeight: "bold" }}>Beneficios:</Title> Su efecto dura entre 3 y 10 años. La efectividad no depende de sostener un hábito por parte de la mujer. Evita las dificultades que pueden presentar otros métodos, por olvido o equivocaciones. Sólo hay que controlarlo una o dos veces por año. Pueden usarlo todas las mujeres, de todas las edades, hayan tenido hijos o no.  {'\n'}{'\n'}
                            <Title style={{ fontWeight: "bold" }}>Consideraciones:</Title>  Puede aumentar el sangrado durante la menstruación. Debe ser colocado y extraído por un médico. {'\n'}{'\n'}
                            <Title style={{ fontWeight: "bold" }}>Eficacia:</Title> Alta. {'\n'}{'\n'}
                            <Title style={{ fontWeight: "bold" }}>Frecuencia de uso:</Title> Debe cambiarse por otro dispositivo luego de 3-10 años de la colocación . No es necesario hacer un descanso. {'\n'}{'\n'}
                            <Title style={{ fontWeight: "bold" }}>Mitos:</Title>{'\n'}{'\n'}
                            *No es cierto que tiene menor eficacia que los anticonceptivos orales. {'\n'}{'\n'}
                            *No es cierto que es abortivo. {'\n'}{'\n'}
                            *No es cierto que pueda perforar el útero o migrar a otros órganos del cuerpo.{'\n'}{'\n'}
                            <Title style={{ fontWeight: "bold" }}>Efecto reversible:</Title> Se recupera la fertilidad inmediatamente después de retirarlo y puede ser retirado en cualquier momento. {'\n'}{'\n'}
                            <Title style={{ fontWeight: "bold" }}>Previene ITS:</Title> No previene infecciones de transmisión sexual.{'\n'}</Text>
                        <Divider style={{ backgroundColor: 'black' }} />
                    </CollapseBody>
                </Collapse>

                {/*SIU*/}
                <Collapse>
                    <CollapseHeader>
                        <View>
                            <Card.Cover style={styles.imgAcordeon} source={require('./assets/ac7.png')} />
                        </View>
                    </CollapseHeader>
                    <CollapseBody style={styles.body}>
                        <Text style={styles.texto}>{'\n'}
                            <Title style={{ fontWeight: "bold" }}>Conocido como:</Title> SIU {'\n'}{'\n'}
                            <Title style={{ fontWeight: "bold" }}>Descripción:</Title> Es un dispositivo en forma de T que se coloca en el interior del útero. Es similar a un DIU T de cobre, pero se diferencia de éste en que libera una sustancia llamada levonorgestrel en forma constante. {'\n'}{'\n'}
                            <Title style={{ fontWeight: "bold" }}>Cómo se usa:</Title> Se coloca en el interior del útero por un profesional en un consultorio. {'\n'}{'\n'}
                            <Title style={{ fontWeight: "bold" }}>Beneficios:</Title> Su efecto dura 5 años. La efectividad no depende de un hábito de la mujer. Sólo hay que controlarlo una o dos veces por año. Puede ser usado en forma segura por la mayoría de las mujeres, aunque está especialmente indicado en mujeres que tienen menstruaciones muy abundantes porque reduce sustancialmente el flujo menstrual. {'\n'}{'\n'}
                            <Title style={{ fontWeight: "bold" }}>Consideraciones:</Title> El efecto adverso más frecuente del SIU es el goteo sanguíneo persistente durante los primeros meses posteriores a su colocación. Luego de los 2 años de uso, produce ausencia del sangrado menstrual en el 50% de las usuarias. {'\n'}{'\n'}
                            <Title style={{ fontWeight: "bold" }}>Eficacia:</Title> Alta. {'\n'}{'\n'}
                            <Title style={{ fontWeight: "bold" }}>Frecuencia de uso:</Title> Debe cambiarse por otro SIU a los 5 años de la colocación. No es necesario hacer un descanso. {'\n'}{'\n'}
                            <Title style={{ fontWeight: "bold" }}>Mitos:</Title>{'\n'}{'\n'}
                            *No es cierto que es necesario hacer un descanso.  {'\n'}{'\n'}
                            *No es cierto que al quitarlo aumenta la fertilidad. {'\n'}{'\n'}
                            *No es cierto que pueda perforar el útero o migrar a otros órganos del cuerpo.{'\n'}{'\n'}
                            <Title style={{ fontWeight: "bold" }}>Efecto reversible:</Title> La posibilidad de quedar embarazada luego de retirar el dispositivo es del 80% durante el primer año. {'\n'}{'\n'}
                            <Title style={{ fontWeight: "bold" }}>Previene ITS:</Title> No previene de infecciones de transmisión sexual. {'\n'}</Text>
                        <Divider style={{ backgroundColor: 'black' }} />
                    </CollapseBody>
                </Collapse>

                {/*Implante Subdérmico*/}
                <Collapse>
                    <CollapseHeader>
                        <View>
                            <Card.Cover style={styles.imgAcordeon} source={require('./assets/ac8.png')} />
                        </View>
                    </CollapseHeader>
                    <CollapseBody style={styles.body}>
                        <Text style={styles.texto}>{'\n'}
                            <Title style={{ fontWeight: "bold" }}>Conocido como:</Title> Chip. {'\n'}{'\n'}
                            <Title style={{ fontWeight: "bold" }}>Descripción:</Title> Es un implante de plástico flexible del tamaño de un fósforo. Libera hormonas que impiden la ovulación. {'\n'}{'\n'}
                            <Title style={{ fontWeight: "bold" }}>Cómo se usa:</Title> Se inserta debajo de la piel del brazo con una una pequeña incisión con anestesia local. La colocación la hace un profesional. {'\n'}{'\n'}
                            <Title style={{ fontWeight: "bold" }}>Beneficios:</Title> Su efecto dura de 3 a 7 años. La efectividad no depende de sostener un hábito por parte de la mujer. Se controla sólo una o dos veces por año. {'\n'}{'\n'}
                            <Title style={{ fontWeight: "bold" }}>Consideraciones:</Title> Es para toda persona con capacidad de gestar que no cuente con cobertura del subsistema de obras sociales o del subsistema privado, haya tenido o no un evento obstétrico. (parto, cesárea, aborto). {'\n'}{'\n'}
                            <Title style={{ fontWeight: "bold" }}>Eficacia:</Title> Alta. {'\n'}{'\n'}
                            <Title style={{ fontWeight: "bold" }}>Frecuencia de uso:</Title> Debe cambiarse por otro implante luego de 3 años de la colocación. No es necesario hacer un descanso. {'\n'}{'\n'}
                            <Title style={{ fontWeight: "bold" }}>Mitos:</Title>{'\n'}{'\n'}
                            * No es cierto que la aplicación es dolorosa. {'\n'}{'\n'}
                            *No es cierto que provoca aumento de peso.{'\n'}{'\n'}
                            <Title style={{ fontWeight: "bold" }}>Efecto reversible:</Title> La fertilidad se recupera al momento de retirarlo. {'\n'}{'\n'}
                            <Title style={{ fontWeight: "bold" }}>Previene ITS:</Title> No previene infecciones de transmisión sexual. {'\n'}</Text>
                        <Divider style={{ backgroundColor: 'black' }} />
                    </CollapseBody>
                </Collapse>

                {/*Preservativo Femenino*/}
                <Collapse>
                    <CollapseHeader>
                        <View>
                            <Card.Cover style={styles.imgAcordeon} source={require('./assets/ac13.png')} />
                        </View>
                    </CollapseHeader>
                    <CollapseBody style={styles.body}>
                        <Text style={styles.texto}>{'\n'}
                            <Title style={{ fontWeight: "bold" }}>Conocido como:</Title> Preservativo femenino.{'\n'}{'\n'}
                            <Title style={{ fontWeight: "bold" }}>Descripción:</Title> Es una funda de poliuretano con un anillo en cada extremo, uno de los cuales es cerrado.{'\n'}{'\n'}
                            <Title style={{ fontWeight: "bold" }}>Cómo se usa:</Title> En cada relación sexual, se inserta en el interior de la vagina y queda en el exterior uno de los extremos.{'\n'}{'\n'}
                            <Title style={{ fontWeight: "bold" }}>Beneficios:</Title> Brinda autonomía a la mujer y es una alternativa para la negociación del uso del preservativo. Protege de infecciones de transmisión sexual. No interrumpe la relación sexual porque puede colocarse previamente. No es de látex con lo cual puede utilizarse con cualquier tipo de lubricante.{'\n'}{'\n'}
                            <Title style={{ fontWeight: "bold" }}>Eficacia:</Title> Alta. {'\n'}{'\n'}
                            <Title style={{ fontWeight: "bold" }}>Frecuencia de uso:</Title> En cada relación sexual. {'\n'}{'\n'}
                            <Title style={{ fontWeight: "bold" }}>Mitos:</Title>{'\n'}{'\n'}
                            *No es cierto que disminuye el placer sexual.  {'\n'}{'\n'}
                            *No es cierto que es dificil retirarlo. {'\n'}{'\n'}
                            <Title style={{ fontWeight: "bold" }}>Efecto reversible:</Title> Es reversible al momento de dejar de usarlos. {'\n'}{'\n'}
                            <Title style={{ fontWeight: "bold" }}>Previene ITS:</Title> Sí, pero sólo en prácticas de sexo vaginal.{'\n'}</Text>
                        <Divider style={{ backgroundColor: 'black' }} />
                    </CollapseBody>
                </Collapse>

                {/*Parche anticonveptivo*/}
                <Collapse>
                    <CollapseHeader>
                        <View>
                            <Card.Cover style={styles.imgAcordeon} source={require('./assets/ac12.png')} />
                        </View>
                    </CollapseHeader>
                    <CollapseBody style={styles.body}>
                        <Text style={styles.texto}>{'\n'}
                            <Title style={{ fontWeight: "bold" }}>Conocido como:</Title> Parche. {'\n'}{'\n'}
                            <Title style={{ fontWeight: "bold" }}>Descripción:</Title>  Es un parche de plástico que se adhiere a la piel liberando hormonas que evitan la ovulación. {'\n'}{'\n'}
                            <Title style={{ fontWeight: "bold" }}>Cómo se usa:</Title> Se coloca un parche nuevo una vez a la semana durante 3 semanas, siempre en el mismo día. {'\n'}{'\n'}
                            <Title style={{ fontWeight: "bold" }}>Beneficios:</Title> Evita tomar pastillas y recibir inyecciones. {'\n'}{'\n'}
                            <Title style={{ fontWeight: "bold" }}>Consideraciones:</Title> No se encuentran disponibles gratuitamente. {'\n'}{'\n'}
                            <Title style={{ fontWeight: "bold" }}>Eficacia:</Title> Alta. Garantiza dos días adicionales de protección ante un olvido. {'\n'}{'\n'}
                            <Title style={{ fontWeight: "bold" }}>Frecuencia de uso:</Title> Una vez por semana durante 3 semanas. {'\n'}{'\n'}
                            <Title style={{ fontWeight: "bold" }}>Mitos:</Title>{'\n'}{'\n'}
                            *No es cierto que se despega fácilmente al nadar o bañarse. {'\n'}{'\n'}
                            *No es cierto que es menos efectivo que las pastillas anticonceptivas. {'\n'}{'\n'}
                            <Title style={{ fontWeight: "bold" }}>Efecto reversible:</Title> Es reversible al momento de dejar de usarlos. {'\n'}{'\n'}
                            <Title style={{ fontWeight: "bold" }}>Previene ITS:</Title> No previenen infecciones de transmisión sexual. {'\n'}</Text>
                        <Divider style={{ backgroundColor: 'black' }} />
                    </CollapseBody>
                </Collapse>

                  {/*Anillo Anticonceptivo*/}
                  <Collapse>
                    <CollapseHeader>
                        <View>
                            <Card.Cover style={styles.imgAcordeon} source={require('./assets/ac11.png')} />
                        </View>
                    </CollapseHeader>
                    <CollapseBody style={styles.body}>
                        <Text style={styles.texto}>{'\n'}
                            <Title style={{ fontWeight: "bold" }}>Conocido como:</Title> Anillo. {'\n'}{'\n'}
                            <Title style={{ fontWeight: "bold" }}>Descripción:</Title> Es un anillo flexible que se coloca dentro de la vagina e impide la ovulación mediante la liberación continua de hormonas. {'\n'}{'\n'}
                            <Title style={{ fontWeight: "bold" }}>Cómo se usa:</Title> Se lo coloca la mujer dentro de la vagina de manera similar a un tampón. Debe presionar el anillo introducirlo en la vagina y soltarlo para que quede colocado. {'\n'}{'\n'}
                            <Title style={{ fontWeight: "bold" }}>Beneficios:</Title> Su efecto dura 3 semanas. Luego debe retirarse y colocar uno nuevo después de la menstruación. No interfiere en la relación sexual. {'\n'}{'\n'}
                            <Title style={{ fontWeight: "bold" }}>Consideraciones:</Title> Puede provocar dolor, irritación, aumento de la secreción vaginal, lesiones epiteliales, incomodidad durante el coito, expulsión.{'\n'}{'\n'}
                            <Title style={{ fontWeight: "bold" }}>Eficacia:</Title> Alta. {'\n'}{'\n'}
                            <Title style={{ fontWeight: "bold" }}>Frecuencia de uso:</Title> Se coloca un anillo una vez por mes. {'\n'}{'\n'}
                            <Title style={{ fontWeight: "bold" }}>Mitos:</Title>{'\n'}{'\n'}
                            *No es cierto que se puede quedar atrapado en la vagina o migrar a otras partes del cuerpo.  {'\n'}{'\n'}
                            *No es cierto que puede salirse durante la actividad física. {'\n'}{'\n'}
                            <Title style={{ fontWeight: "bold" }}>Efecto reversible:</Title> Es reversible al momento de retirar el anillo. {'\n'}{'\n'}
                            <Title style={{ fontWeight: "bold" }}>Previene ITS:</Title> No previene de infecciones de transmisión sexual. {'\n'}</Text>
                        <Divider style={{ backgroundColor: 'black' }} />
                    </CollapseBody>
                </Collapse>

                {/*Vasectomía*/}
                <Collapse>
                    <CollapseHeader>
                        <View>
                            <Card.Cover style={styles.imgAcordeon} source={require('./assets/ac9.png')} />
                        </View>
                    </CollapseHeader>
                    <CollapseBody style={styles.body}>
                        <Text style={styles.texto}>{'\n'}
                            <Title style={{ fontWeight: "bold" }}>Conocido como:</Title> Vasectomía o esterilización masculina. {'\n'}{'\n'}
                            <Title style={{ fontWeight: "bold" }}>Descripción:</Title> Es un método quirúrgico permanente, seguro y sencillo.
                            Cómo se usa Consiste en ligar los conductos deferentes de manera de
                            impedir el paso de los espermatozoides desde los testículos hacia el pene. Puede realizarse con anestesia local y sin internación. {'\n'}{'\n'}
                            <Title style={{ fontWeight: "bold" }}>Beneficios:</Title> No requiere anestesia general. No modifica el aspecto físico de los órganos sexuales masculinos. No tiene efectos colaterales. No afecta el deseo ni la actividad sexual. {'\n'}{'\n'}
                            <Title style={{ fontWeight: "bold" }}>Consideraciones:</Title> Es efectiva tres meses después de haber sido realizada. En ese período, debe usarse otro método anticonceptivo. {'\n'}{'\n'}
                            <Title style={{ fontWeight: "bold" }}>Eficacia:</Title> Alta, luego de tres meses de haber sido realizada. {'\n'}{'\n'}
                            <Title style={{ fontWeight: "bold" }}>Frecuencia de uso:</Title> La intervención es por única vez. {'\n'}{'\n'}
                            <Title style={{ fontWeight: "bold" }}>Mitos:</Title>{'\n'}{'\n'}
                            *No es cierto que afecte el deseo sexual del varón. {'\n'}{'\n'}
                            *No es cierto que afecte la erección.{'\n'}{'\n'}
                            *No es cierto que cambie el aspecto de los genitales.{'\n'}{'\n'}
                            <Title style={{ fontWeight: "bold" }}>Efecto reversible:</Title> En general es irreversible. La reversión es a través de una cirugía difícil y costosa, no disponible en el sistema público de salud.{'\n'}{'\n'}
                            <Title style={{ fontWeight: "bold" }}>Previene ITS:</Title> No previene infecciones de transmisión sexual. {'\n'}</Text>
                        <Divider style={{ backgroundColor: 'black' }} />
                    </CollapseBody>
                </Collapse>

                {/*Ligadura de Trompas*/}
                <Collapse>
                    <CollapseHeader>
                        <View>
                            <Card.Cover style={styles.imgAcordeon} source={require('./assets/ac10.png')} />
                        </View>
                    </CollapseHeader>
                    <CollapseBody style={styles.body}>
                        <Text style={styles.texto}>{'\n'}
                            <Title style={{ fontWeight: "bold" }}>Conocido como:</Title> Ligadura de trompas. {'\n'}{'\n'}
                            <Title style={{ fontWeight: "bold" }}>Descripción:</Title> Es un método quirúrgico permanente para mujeres. {'\n'}{'\n'}
                            <Title style={{ fontWeight: "bold" }}>Cómo se usa:</Title> Consiste en ligar, cortar u obstruir las trompas de Falopio
                            de manera que los óvulos no puedan estar en contacto con los espermatozoides.
                             La cirugía es sencilla. La realiza un profesional en un quirófano y requiere anestesia total o epidural. {'\n'}{'\n'}
                            <Title style={{ fontWeight: "bold" }}>Beneficios:</Title>  No hay ninguna condición médica que restrinja la posibilidad de elección de este método, aunque algunas condiciones o circunstancias requieren ciertas precauciones.
                             No tiene efectos secundarios a largo plazo. Cualquier mujer mayor de edad puede acceder gratuitamente. {'\n'}{'\n'}
                            <Title style={{ fontWeight: "bold" }}>Consideraciones:</Title> A pesar de no ser necesario, en algunos servicios se solicita haber tenido hijos, el consentimiento de padres o pareja, o autorización judicial. {'\n'}{'\n'}
                            <Title style={{ fontWeight: "bold" }}>Eficacia:</Title> Alta. {'\n'}{'\n'}
                            <Title style={{ fontWeight: "bold" }}>Frecuencia de uso:</Title> La intervención es por única vez. {'\n'}{'\n'}
                            <Title style={{ fontWeight: "bold" }}>Mitos:</Title>{'\n'}{'\n'}
                            *No es cierto que afecta al ciclo menstrual. {'\n'}{'\n'}
                            *No es cierto que afecta el estado de ánimo. {'\n'}{'\n'}
                            *No es cierto que produce cambios en el cuerpo de la mujer.{'\n'}{'\n'}
                            <Title style={{ fontWeight: "bold" }}>Efecto reversible:</Title> Es un método anticonceptivo permanente para la mujer. La reversión es a través de una cirugía difícil, costosa y no diponible en el sistema público de salud. {'\n'}{'\n'}
                            <Title style={{ fontWeight: "bold" }}>Previene ITS:</Title> No previene infecciones de transmisión sexual. {'\n'}</Text>
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
        height: 150,
        borderRadius: 10,
        marginTop: 15,
        alignSelf: 'center',
        justifyContent: 'center',
        marginBottom: 5,
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
        alignSelf: 'center'
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