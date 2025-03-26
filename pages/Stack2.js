import React from 'react';
import { View, Text } from 'react-native'
import Card from '../components/Card'

export default function Stack2() {
    return (
        <View style={styles.container}>
            <Card />
            <Card />
            <Text style={styles.title} />
        </View>
    );
}

const styles = {
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgb(169, 169, 169) ',
    },
    title: {
        fontSize: 30,
    },
};