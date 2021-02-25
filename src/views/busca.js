import React from 'react';
import { View,StyleSheet, Text, Image,FlatList,TextInput } from 'react-native';
import CardBusca from '../components/cardBusca';


const Busca = (props) => {
    
    const dados = [
        {
          id: Math.random(), 
          nome: "Gustavo",
          categoria: "Estabelecimento",
          endereco: "Rua violeta, 21 - Jd. Alvorada",
          materiais: [
              {id:1, nome: "Alumínio", cor:'yellow'},
              {id:2, nome: "Vidro", cor:'green'},
              {id:3, nome: "Papel", cor:'blue'}
          ]
        },
        {
            id: Math.random(), 
            nome: "Rayssa",
            categoria: "Doador",
                        endereco: "Av Ministro Lafaiete, 210 - Marco II",
            materiais:[
                {id:1, nome: "Papel", cor:'blue'}
            ]
          }, {
            id: Math.random(), 
            nome: "Thalis",
            categoria: "Estabelecimento",
            endereco: "Estrada das Cambucas, 23 - Jd Nova Era",
            materiais:[
                {id:1, nome: "Vidro", cor:'green'},
                {id:2, nome: "Papel", cor:'blue'}
             ]
          }, {
            id: Math.random(), 
            nome: "Lucas",
            categoria: "Doador",
            endereco: "Alcir Brasil, 98 - Jd Nova Era",
            materiais: [
                {id:1, nome: "Alumínio", cor:'yellow'},
            ]
          },
      ]
    return (
        <View style={styles.container}>
            <Image  style={styles.logo} source={require('../img/logo_principal.png')}/>
 
                <Text style={styles.label}>Buscar</Text>
                <Text style={styles.sublabel}>Encontre Doadores e estabelecimentos facilmente</Text>
                <TextInput style={styles.input} placeholder="Buscar" />
                    
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
    sublabel: {
        fontSize:12,
        color:'#c3c634',
        textAlign:'left'
    },
    input:{
        color: 'green',
        height:50,
        backgroundColor:'#e2e482',
        width:'90%',
        padding:4,
        borderRadius:5
    },
    content:{
        backgroundColor:'#e4ec7b',
        padding: 20,
    },
      map: {
        flex: 1
      }
})