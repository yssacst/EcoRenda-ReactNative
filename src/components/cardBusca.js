import React from 'react';
import { Text, View, FlatList, StyleSheet} from "react-native";

const CardBusca = (props) =>{
    return (
            <View style={styles.cardbusca}>
                <Text>Nome: {props.data.nome}</Text>                
                <Text>Endereco: {props.data.endereco}</Text>  
                <Text>Materiais aceitos: </Text>  
                <FlatList 
                    data={props.data.materiais}
                    keyExtractor={(item) => `${item.id}`}
                    renderItem={({item}) => (
                        <Text>
                            {item.nome}
                        </Text> 
                    )}
                    />              
            </View>
        );
}

export default CardBusca;


const styles = StyleSheet.create({
    cardbusca: {
        backgroundColor:'white',
        margin:5,
        borderRadius:10,
        padding:15,

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
    }
});