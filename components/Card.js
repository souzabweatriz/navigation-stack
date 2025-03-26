import React from 'react';
import {View, Text, StyleSheet} from 'react-native';


export default function Card(img){
    return(
        <View style={styles.card}>
            <Text style={styles.cardText}>Navegando entre as páginas</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    card:{
        margin: 20,
        backgroundColor: 'rgb(29, 40, 75)',
        padding:100,
        alignItems: 'center',
    },
    cardText:{
        fontSize:28,
        color: 'white',
    }
});