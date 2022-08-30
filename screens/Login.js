import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, SafeAreaView, ImageBackground, Image, TextInput, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';
import usuarioService from '../services/UsuarioService';
const imgbg = '../assets/images/background.png';

const Login = ({navigation}) => {

  const [email, setEmail] = useState(null);
  const [senha, setSenha] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [isLoadingToken, setLoadingToken] = useState(true);

  function handleLogin() {

    let data = {
      username: email,
      password: senha
    }

    usuarioService.login(data)
    .then((response) => {
      setLoading(false)
      navigation.reset({
        index: 0,
        routes: [{name: "Principal"}]
      })  
    })
    .catch((error) => {
      setLoading(false)
      Alert.alert(
        "Login mal sucedido!",
        "Usuário ou senha incorretos.",
        [
          { text: "OK", onPress: () => console.log("OK Pressed") }
        ]
      );
    })
  }

  function handleLoginToken(token) {

    setLoadingToken(true);
    let data = {
      token: token
    }
    usuarioService.loginToken(data)
    .then((response) => {
      setLoadingToken(false)
      navigation.reset({
        index: 0,
        routes: [{name: "Principal"}]
      })  
    })
    .catch((error) => {
      console.log(error)
      setLoadingToken(false)
    })
  }

  useEffect(() =>{
    AsyncStorage.getItem("TOKEN").then((token) => {
      handleLoginToken(token);
    })
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={require(imgbg)} style={styles.imagemBackground}>
        
        { isLoadingToken &&
          <ActivityIndicator size="large" color="#0000ff" />
        }
        
        { !isLoadingToken &&    
        <>
          <Image source={require('../assets/images/logo.png')} style={styles.logo}/>
          <TextInput 
            style={styles.input}
            leftIcon={{ type:'font-awesome', name:'envelope'}}
            placeholder="E-mail"
            onChangeText={value=>setEmail(value)}
          />
          <TextInput 
            style={styles.input}
            secureTextEntry={true}
            placeholder="Senha"
            onChangeText={value=>setSenha(value)}
          />

          { isLoading && 
            <ActivityIndicator size="large" color="#0000ff" />
          }

          { !isLoading && 
            <TouchableOpacity style={styles.botao} onPress={()=>{handleLogin()}}>
              <Text style={styles.txtBotao}>Entrar</Text>
            </TouchableOpacity>
          }
        </>
        }
      </ImageBackground>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  imagemBackground:{
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo:{
    width: 251,
    height: 51,
    resizeMode: 'contain',
    marginBottom: 15,
  },
  input:{
    backgroundColor: '#fff',
    width: 300,
    marginBottom: 10,
    padding: 10,
    color: '#495057',
    borderRadius: 3,
    fontSize: 16,
    fontWeight: 'bold'
  },
  botao:{
    width: 300,
    height: 45,
    backgroundColor: '#0c88c0',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 3
  },
  txtBotao:{
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  }
});

export default Login;