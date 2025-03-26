import React from 'react';
import {View, Button, StyleSheet} from 'react-native'
import Card from "../components/Card"

export default function StackScreen({ navigation }){
    return(
        <View style={styles.container}>
            <Card />
            <Card />
            <Button title="Veja a mágica" onPress={() => navigation.navigate('Stack 2')} />
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgb(169, 169, 169)',
    },
});