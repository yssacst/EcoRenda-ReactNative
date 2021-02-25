import React from 'react';
import { View,StyleSheet, Text, Image, TouchableOpacity, Linking, ScrollView, FlatList, Dimensions } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import Video from 'react-native-video';

const Home = (props) => {
    const catadores = [
        {
            id: 1,
            image: require('../img/catadores.png'),
        },
        {
            id: 2,
            image: require('../img/catadores2.png'),
        }

    ]
    
    function Slide({ data }) {
        return (
          <View
            style={{
              height: 410,
              width: 410,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              source={data.image }
              style={{ width: 400, height: 400 }}
            ></Image>
            {/* <Text style={{ fontSize: 24 }}>{data.title}</Text>
            <Text style={{ fontSize: 18 }}>{data.subtitle}</Text> */}
          </View>
        );
      }
    return (
            <ScrollView >
                <View style={styles.container}>
                        <Image  style={styles.logo} source={require('../img/logo_principal.png')}/>
                        <Text style={styles.paragrafo}> Otimizando o trabalho dos catadores de materiais recicláveis</Text>
     
                        <FlatList
                            data={catadores}
                            style={{ flex: 1 }}
                            keyExtractor={(item, index) => item.id.toString()}
                            renderItem={({ item }) => {
                                return <Slide data={item} />;
                            }}
                            pagingEnabled
                            horizontal
                            showsHorizontalScrollIndicator={true}
                            />

                        <Text  style={styles.titulo}>O problema</Text>
                        <View style={styles.content}>
                            <Text style={styles.paragrafo}>Um grupo que passa despercebido pela sociedade e que está envolvido diretamente com o processo de reciclagem de resíduos é o dos catadores.</Text>
                            <Text style={styles.paragrafo}>MAIS DE 100 PONTOS VICIADOS EM LIXO EM NOVA IGUAÇU</Text>
                            <Text style={styles.paragrafo}>(Locais que constantemente são utilizados para realizar descartes incorretos.)</Text>
                        </View>
                        <Image
                            source={require('../img/pvl.png')}
                            style={{ width: 400, height: 400 }}
                            />
                        <Text style={styles.titulo}>A solução</Text>
                        <View style={styles.content}>
                            <Text style={styles.paragrafo}>O EcoRenda tem como proposta
                            otimizar o trabalho de catadores
                            indicando a eles pontos de coleta de
                            materiais específicos e também
                            estabelecimentos para compra
                            desses materiais.</Text>
                        </View>
                        <Text style={styles.titulo}>Como funciona?</Text>
                        <View style={styles.content}>
                            <Text style={styles.paragrafo}>
                                Com o EcoRenda, o catador conseguirá saber onde
                                há um doador do material desejado próximo a ele e
                                também a quantidade disponível. Podendo, então,
                                agendar a coleta. Tornando o processo de coleta
                                mais rápido e eficaz .
                            </Text>
                        </View>
                        <Image
                            source={require('../img/envolvidos.png')}
                            style={{ width: 400, height: 200 }}
                            />
                        {/* <Video 
                            source={{uri:'../img/EcoRenda_Trim.mp4'}} 
                        rate={1.0}
                        volume={1.0}
                        isMuted={false}
                        resizeMode="cover"
                        shouldPlay
                        isLooping
                        style={{ width: 300, height: 300 }}  // Can be a URL or a local file.                       
                        /> */}
                        <View >
                            <Text style={styles.paragrafo}>
                            Se interessou pela ideia?
                                ▪︎ Colabore com esse projeto!
                                ▪︎ Entre em contato conosco via Instagram
                            </Text>
                        </View>
                    <TouchableOpacity style={styles.content} onPress={() => Linking.openURL('https://www.instagram.com/eco_renda')}>
                        <Text style={styles.paragrafo}>
                            <MaterialCommunityIcons name="instagram" color='green' size={30} />    
                            Eco_Renda
                        </Text> 
                    </TouchableOpacity>
                </View>
            </ScrollView>
        );
};

export default Home


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f1f5c0",
        textAlign:'center',
        paddingTop:40,
    },
    paragrafo:{
        textAlign:'center',
        color:'green',
    },
    logo: {
        width: 160,
        height: 100,
        marginLeft:'auto',
        marginRight:'auto',
    },
    titulo:{
        fontSize:22,
        color: 'green',
        fontWeight:'bold',
        borderBottomWidth:3,
        borderBottomColor:'green',
        width:'100%',
        marginLeft:15,
        marginRight:15,
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
        margin:9,
        borderRadius:10,
    }
})