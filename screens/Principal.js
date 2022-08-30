import React from 'react';
import { SafeAreaView, Text, StyleSheet, Image, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/FontAwesome';

import Home from './Home';
import Pessoas from './Pessoas';
import Atendimentos from './Atendimentos';
import Financeiro from './Financeiro';


const Tab = createBottomTabNavigator();

export default function Principal({}){
    return(
        <Tab.Navigator
      initialRouteName="Feed"
      screenOptions={{
        tabBarActiveTintColor: '#1d3e5f',
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarLabel: 'Home',
          tabBarIcon: () => (
            <MaterialCommunityIcons name="home" color={'#1d3e5f'} size={25} />
          ),
        }}
      />
      <Tab.Screen
        name="Cadastrados"
        component={Pessoas}
        options={{
            headerShown: false,
            tabBarLabel: 'Pessoas',
            tabBarIcon: () => (
              <Icon name="users" color={'#1d3e5f'} size={25} />
            ),
        }}
      />
      <Tab.Screen
        name="Atendimentos"
        component={Atendimentos}
        options={{
            headerShown: false,
            tabBarLabel: 'Atendimentos',
            tabBarIcon: () => (
              <MaterialCommunityIcons name="view-list" color={'#1d3e5f'} size={25} />
            ),
        }}
      />
      <Tab.Screen
        name="Financeiro"
        component={Financeiro}
        options={{
            headerShown: false,
            tabBarLabel: 'Financeiro',
            tabBarIcon: () => (
              <Icon name="money" color={'#1d3e5f'} size={25} />
            ),
        }}
      />
    </Tab.Navigator>
    );
}
