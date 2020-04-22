import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const name = 'MIAV!';
const ComponentsScreen = () => {
    return(
        <View>
            <Text style={styles.textStyle}>Getting started with Miav!</Text>
            <Text style={styles.subStyle}>My name is {name}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 45,
    }, 
    subStyle: {
        fontSize: 20,
    }
})

export default ComponentsScreen;