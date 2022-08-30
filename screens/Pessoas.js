import React, { useState, useRef, useEffect } from 'react';
import { SafeAreaView, Text, StyleSheet, Image, FlatList, View, Modal, TextInput, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import pessoas from './resultPessoa';

export default function Home(){

    function abrirModal(nome, cidade, documento){
        setModalVisible(true);
        setNome(nome);
        setDocumento(documento);
        setCidade(cidade);
    }

    function handleOrderClick(){
        console.log(pessoas);
    }

    const [nome, setNome] = useState('');
    const [cidade, setCidade] = useState('');
    const [documento, setDocumento] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const [searchText, setSearchText] = useState('');
    const [list, setList] = useState(pessoas);

    useEffect(()=>{
        if(searchText === ''){
            setList(pessoas);
        }else{
            setList(
                pessoas.filter((item) => {
                    if(item.name.indexOf(searchText) > -1){
                        console.log('entrou')
                        return true;
                    }else{
                        return false;
                    }
                })
            );
        }
    }, [searchText]); 

    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Pessoas Cadastradas:</Text>
            <View style={styles.filtro}>
                <TextInput style={styles.input} placeholder="Busque uma pessoa" placeholderTextColor="#888" value={searchText} onChangeText={(t) => setSearchText(t)}/>
                <TouchableOpacity onPress={handleOrderClick} style={styles.orderButton}>
                    <MaterialCommunityIcons name="order-alphabetical-ascending" color={'#AFAFAF'} size={30}/>
                </TouchableOpacity>
            </View>
            <FlatList style={styles.list}
                data={pessoas}
                renderItem={({ item }) => (
                    <View style={styles.viewItem}>
                        <Text style={styles.item} onPress={() => {abrirModal(item.name, item.cidade, item.documento)}}>{item.name} - {item.cidade} {'\n'} {item.documento}</Text>
                    </View>
                )}
                keyExtractor={(item) => item.id}
                contentContainerStyle={{ flexGrow: 1}, {justifyContent: 'center'}}
            />

            {/* MODAL PESSOAS */}
            <View style={styles.viewModal}>
                <Modal transparent visible={modalVisible}>
                    <View style={styles.modal}>
                        <View style={styles.conteudoModal}>
                            <View style={styles.modalClose}>
                                <MaterialCommunityIcons name="close-box" color={'#1d3e5f'} size={35} onPress={() => setModalVisible(false)}/>
                            </View>
                            <View style={styles.titleModal}>
                                <Text style={styles.nome}>{nome}</Text>
                            </View>
                            <View style={styles.textModal}>
                                <Text style={styles.dados}> 
                                    Dados cadastrais: {'\n'}
                                    Documento: {documento} {'\n'}
                                    Cidade: {cidade} {'\n'} 
                                    Telefone: (35)99834-4392 {'\n'}
                                    E-mail: rafael@mgcode.com.br {'\n'}
                                    Tipo: Pessoa Física {'\n'}
                                    Status: Ativo {'\n'}
                                </Text>
                            </View>
                        </View>
                    </View>
                </Modal>
            </View>
        </SafeAreaView> 
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#1d3e5f',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title:{
        fontSize: 30,
        color: '#fff',
        marginBottom: 20
    },
    list:{
        width: '100%',
    },
    item:{
        marginTop: 10,
        padding: 20,
        width: '90%',
        borderRadius: 3,
        backgroundColor: '#fff',
        color: '#1d3e5f',
        fontSize: 18,
        fontWeight: 'bold'
    },
    viewItem:{
        justifyContent:'center',
        alignItems:'center'
    },
    viewModal:{
        justifyContent: 'center',
        alignItems: 'center',
    },
    modal:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    conteudoModal:{
        padding: 10,
        backgroundColor: '#ccd',
        width: 350,
        height: 400,
        borderRadius: 5,
        borderColor: 'black',
    },
    titleModal:{
        paddingTop: 10,
        alignItems: 'center'
    },
    modalClose:{
        alignItems: 'flex-end'
    },
    nome:{
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000',
    },
    dados:{
        fontSize: 20,
        color: '#000',
        lineHeight: 35
    },
    filtro:{
        flexDirection: 'row',
        width: '90%',
        marginBottom: 10
    },
    input:{
        backgroundColor: '#AFAFAF',
        fontWeight: 'bold',
        padding: 10,
        width: 320,
        color: '#333',
        marginRight: 10,
        borderRadius: 5
    },
    orderButton:{
        padding: 5,
        justifyContent: 'center',
    }
});