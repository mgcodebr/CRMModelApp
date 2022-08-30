import React, { useState } from 'react';
import { SafeAreaView, Text, StyleSheet, Image, FlatList, View, Modal, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Atendimentos(){

    function colorEtiqueta(id_etiqueta){
        if(id_etiqueta == 1){
            return '#b3b3b3'
        }else if(id_etiqueta == 2){
            return '#0a6cd5'
        }else if(id_etiqueta == 3){
            return '#fcfb0a'
        }else if(id_etiqueta == 4){
            return '#e90909'
        }
    }

    function abrirModalAtendimento(nome, telefone){
        setModalVisible(true);
        setNome(nome);
        setTelefone(telefone);
    }

    const [nome, setNome] = useState('');
    const [telefone, setTelefone] = useState('');
    const [etiqueta, setEtiqueta] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const [pessoas, setPessoas] = useState([
        { id_etiqueta:1, name: 'João Silva', telefone: '(35)99322-3123', id: '1'},
        { id_etiqueta:3, name: 'José Souza', telefone: '(35)99322-3123', id: '2'},
        { id_etiqueta:4, name: 'Maria Pereira Souza', telefone: '(35)98822-0223', id: '3'},
        { id_etiqueta:2, name: 'Ana Maria Silva', telefone: '(35)97382-0932', id: '4'},
        { id_etiqueta:2, name: 'Pedro Antônio Silva', telefone: '(35)99322-3123', id: '5'},
        { id_etiqueta:3, name: 'Joana Maria Souza', telefone: '(35)99322-3123', id: '6'},
        { id_etiqueta:4, name: 'Antônio Carlos Silva', telefone: '(35)99322-3123', id: '7'},
        { id_etiqueta:1, name: 'Carlos Mendes Souza', telefone: '(35)99322-3123', id: '8'},
        { id_etiqueta:2, name: 'Marcia Santos Silva', telefone: '(35)99322-3123', id: '9'},
        { id_etiqueta:3, name: 'Julio José da Silva', telefone: '(35)99322-3123', id: '10'}
    ]);

    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Atendimentos:</Text>
            <FlatList style={styles.list}
                data={pessoas}
                renderItem={({ item }) => (
                    <View style={styles.viewItem}>
                        <TouchableOpacity style={styles.item} onPress={() => {abrirModalAtendimento(item.name, item.telefone)}}>
                            <Text style={styles.itemText}>
                                {item.name}{'\n'}{item.telefone}
                            </Text>
                            <View style={styles.etiqueta}>
                                <Icon name="circle" color={colorEtiqueta(item.id_etiqueta)} size={35}/>
                            </View>
                        </TouchableOpacity>
                    </View>
                )}
                keyExtractor={(item) => item.id}
                contentContainerStyle={{ flexGrow: 1}, {justifyContent: 'center'}}
            />

            {/* MODAL ATENDIMENTOS */}
            <View style={styles.viewModal}>
                <Modal transparent visible={modalVisible}>
                    <View style={styles.modal}>
                        <View style={styles.conteudoModal}>
                            <View style={styles.modalClose}>
                                <MaterialCommunityIcons name="close-box" color={'#1d3e5f'} size={35} onPress={() => setModalVisible(false)}/>
                            </View>
                            <View style={styles.titleModal}>
                                <Text style={styles.nome}>Atendimento:</Text>
                                <Text style={styles.nome}>{nome}</Text>
                            </View>
                            <View style={styles.textModal}>
                                <Text style={styles.dados}> 
                                    Origem: Instagram{'\n'}
                                    Tentativas: 3{'\n'} 
                                    Agendamento: 05/08/2022 {'\n'}
                                    Etiqueta: Lead Frio {'\n'}
                                    Atendente: Rafael {'\n'}
                                    Status: Em contato {'\n'}
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
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    itemText:{
        color: '#1d3e5f',
        fontSize: 18,
        fontWeight: 'bold',
    },
    viewItem:{
        justifyContent:'center',
        alignItems:'center',
    },
    etiqueta:{
        justifyContent: 'center'
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
    }
});