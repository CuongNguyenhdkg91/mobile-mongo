import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, FlatList,TouchableOpacity, TouchableHighlight, ScrollView, Dimensions } from 'react-native';
import React, {Component, useEffect, useState} from 'react';
import { colors, sizes } from './theme';
import { useStore } from './state/zustand/store';
import { NavigationContainer } from '@react-navigation/native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-ionicons'; 
import * as Font from 'expo-font';
import Ionicons from '@expo/vector-icons/Ionicons';



import OneItem from './app/OneItem';
import Listings from './app/Listings';

const {width} = Dimensions.get("window")

const Tab = createBottomTabNavigator();

const App= () => {

  const [goto,setgoto] = useState('Single')

  const GetStoreData = useStore((state) => state.getdata) 
  useEffect(() => {
      GetStoreData()
  }, []);

/*   const loadfont = async () => {
    await Font.loadAsync({
        Ionicons: require('@expo/vector-icons/fonts/Ionicons.ttf'),
    })}; */

return (

  <NavigationContainer>
    <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;
        iconName = 'list'

       /*  if (route.name === 'Single') {
          iconName = focused
            ? 'information-circle'
            : 'information-circle-outline';
        } else if (route.name === 'GridScroll') {
          iconName = focused ? 'list' : 'list-box';
        } */

        // You can return any component that you like here!
        
        return <Ionicons name='list' size={size} color={color} />;
      },
      tabBarActiveTintColor: 'tomato',
      tabBarInactiveTintColor: 'gray',
    })}
    >
      <Tab.Screen name="Single" component={OneItem} />
      <Tab.Screen name="GridScroll" component={Listings} />
    </Tab.Navigator>
  </NavigationContainer>
  
)}

export default App

const styles = StyleSheet.create({
  tabs: {
    //flex: 0,

    flexDirection: 'row',
    top: sizes.base * 4,

    borderBottomColor: colors.gray2,
    borderBottomWidth: StyleSheet.hairlineWidth,

    marginVertical: sizes.base,
    marginHorizontal: sizes.base * 2,
  },

  tab: {
    marginRight: sizes.base * 2,
    paddingBottom: sizes.base,
    borderBottomColor: colors.secondary,
    borderBottomWidth: 3,
  },

  navtext: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.primary,
  },

})

