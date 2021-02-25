import React from 'react';
import { Text, View, FlatList, StyleSheet} from "react-native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const CardBusca = (props) =>{
    return (
            <View style={styles.cardbusca}>
                <Text>Nome: {props.data.nome}</Text>                
                <Text>Sou um {props.data.categoria}</Text>                
                <Text>Endereco: {props.data.endereco}</Text>  
                <Text>Materiais disponíveis/aceitos: </Text>  
                <FlatList 
                    data={props.data.materiais}
                    keyExtractor={(item) => `${item.id}`}
                    renderItem={({item}) => (
                        <Text>
                            <MaterialCommunityIcons name="circle" color={item.cor} size={15} />    
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