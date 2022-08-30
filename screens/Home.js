import React from 'react';
import { SafeAreaView, Text, StyleSheet, Image, View, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Home({navigation}){

    function handleLogout(navigation){
        AsyncStorage.setItem("TOKEN"," ").then(() => {
            navigation.reset({
                index: 0,
                routes: [{name: "Login"}]
            })
        }).catch((error) => {
            console.log(error)
            Alert.alert("Erro ao sair")
        })
    }

    return(
        <SafeAreaView style={styles.background}>
            <View style={styles.viewBtn}> 
                <TouchableOpacity style={styles.botao} onPress={()=>{handleLogout(navigation)}}>
                    <Text style={styles.txtBotao}>Sair</Text>
                    <MaterialCommunityIcons name="exit-to-app" color={'#fff'} size={25} />
                </TouchableOpacity>
            </View>
            <View style={styles.view}>
                <Text style={styles.textBemVindo}>Bem-vindo!</Text>
                <Image source={require('../assets/images/mgcode.png')} style={styles.img}/>
            </View>
        </SafeAreaView> 
    )
}

const styles = StyleSheet.create({
    background:{
        flex: 1,
        width: '100%',
        backgroundColor: '#ECF0F5'
    },
    view:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textBemVindo:{
        color: '#1d3e5f',
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    img:{
        width: 150,
        height: 30,
        resizeMode: 'contain'
    },
    viewBtn:{
        alignItems: 'flex-end',
        padding: 10
    },
    botao:{
      width: 70,
      height: 45,
      padding: 10,
      backgroundColor: '#AC2626',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 3,
      flexDirection: "row"
    },
    txtBotao:{
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold'
    }
});