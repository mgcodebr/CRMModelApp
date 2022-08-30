import React, { useState } from 'react';
import { SafeAreaView, Text, StyleSheet, Image, FlatList, View, Button } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Financeiro(){
    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}>Tela do Financeiro</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    text:{
        fontSize: 20,
        fontWeight: 'bold',
        color: '#1d3e5f'
    }
})