import React from 'react';
import { View,StyleSheet, Text, Image,FlatList,TextInput } from 'react-native';
import CardBusca from '../components/cardBusca';


const Busca = (props) => {
    
    const dados = [
        {
          id: Math.random(), 
          nome: "Gustavo",
          endereco: "gustavo@gmail.com",
          materiais: [{
              nome: "Alumínio",
              nome: "Vidro",
              nome: "Papel",
          }]
        },
        {
            id: Math.random(), 
            nome: "Rayssa",
            endereco: "rayssa@gmail.com",
            materiais:[
                {
                    nome: "Alumínio",
                    nome: "Vidro",
                    nome: "Papel",
                    nome: "Plástico",
                }]
          }, {
            id: Math.random(), 
            nome: "Thalis",
            endereco: "thalis@gmail.com",
            materiais:[{
                nome: "Vidro",
                nome: "Papel",
            } ]
          }, {
            id: Math.random(), 
            nome: "Lucas",
            endereco: "lucas@gmail.com",
            materiais: [{
                nome: "Alumínio",
                nome: "Papel",
            }]
          },
      ]
    return (
        <View style={styles.container}>
            <Image  style={styles.logo} source={require('../img/logo_principal.png')}/>
 
                <Text style={styles.label}>Buscar</Text>
                <TextInput style={styles.input} placeholder="buscar" />
                    
                 <FlatList 
                    data={dados}
                    keyExtractor={(item) => `${item.id}`}
                    renderItem={({item}) => (
                        <CardBusca data={item} materiais={item.materiais}/>
                    )}
                    />
                
        </View>
    );
};

export default Busca

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#f1f5c0",
        textAlign:'center',
    },
    logo: {
        width: 160,
        height: 100,
        marginTop:60,
    },
    label: {
        fontSize:20,
        color:'#c3c634',
        fontWeight:'bold',
        textAlign:'left'
    },
    input:{
        color: 'green',
        height:50,
        backgroundColor:'#e2e482',
        width:'90%',
        padding:4,
    },
    content:{
        backgroundColor:'#e4ec7b',
        padding: 20,
    },
      map: {
        flex: 1
      }
})