import React from 'react';
import { View,StyleSheet, Text, Image, TouchableOpacity, Linking } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Home = (props) => {
    return (
            <View style={styles.container}>
                    <Image  style={styles.logo} source={require('../img/logo_principal.png')}/>
                    <Text style={styles.paragrafo}> Otimizando o trabalho dos catadores de materiais recicláveis</Text>

                <View style={styles.content}>
                    <Text  style={styles.titulo}>O problema</Text>
                    <Text style={styles.paragrafo}>Um grupo que passa despercebido pela sociedade e que está envolvido diretamente com o processo de reciclagem de resíduos é o dos catadores.</Text>
                    <Text style={styles.paragrafo}>MAIS DE 100 PONTOS VICIADOS EM LIXO EM NOVA IGUAÇU</Text>
                    <Text style={styles.paragrafo}>(Locais que constantemente são utilizados para realizar descartes incorretos.)</Text>
                    
                    <Text style={styles.titulo}>A solução</Text>
                    <Text style={styles.paragrafo}>O EcoRenda tem como proposta
                    otimizar o trabalho de catadores
                    indicando a eles pontos de coleta de
                    materiais específicos e também
                    estabelecimentos para compra
                    desses materiais.</Text>

                    <Text style={styles.titulo}>Como funciona?</Text>
                    <Text style={styles.paragrafo}>
                        Com o EcoRenda, o catador conseguirá saber onde
                        há um doador do material desejado próximo a ele e
                        também a quantidade disponível. Podendo, então,
                        agendar a coleta. Tornando o processo de coleta
                        mais rápido e eficaz .
                    </Text>
                </View>
                <TouchableOpacity onPress={() => Linking.openURL('https://www.instagram.com/eco_renda')}>
                    <Text style={styles.instagram}> Clique aqui e siga nosso Instagram </Text> 
                    <MaterialCommunityIcons name="instagram" color='white' size={10} />    
                </TouchableOpacity>
            </View>
        );
};

export default Home


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#f1f5c0",
        textAlign:'center',
    },
    paragrafo:{
        textAlign:'center',
        color:'green',
    },
    logo: {
        width: 160,
        height: 100,
    },
    titulo:{
        fontSize:20,
        color: 'green',
        fontWeight:'bold',
    },
    instagram:{
        fontWeight:'bold',
        color: 'green',
        fontSize:25,
        textAlign:'center',
        borderWidth:3,
        borderStyle:'dashed',
        borderColor:'green',
        marginTop:5,
    },
    content:{
        backgroundColor:'#e4ec7b',
        padding: 20,
    }
})