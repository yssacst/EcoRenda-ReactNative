import React from 'react';
import { View,StyleSheet, Text, Image,FlatList } from 'react-native';
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
    paragrafo:{
        textAlign:'center',
        color:'green',
    },
    logo: {
        width: 160,
        height: 100,
        marginTop:60,
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