import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, FlatList,TouchableOpacity, TouchableHighlight, ScrollView, Dimensions } from 'react-native';
import React, {Component, useEffect, useState} from 'react';
import { colors, sizes } from './theme';
import { useStore } from './state/zustand/store';

import OneItem from './app/OneItem';
import Listings from './app/Listings';

const {width} = Dimensions.get("window")

const App= () => {

  const tabs = ["Single", "GirdFlat", "Another", "GridScroll"]
  const [goto,setgoto] = useState('Single')

  const GetStoreData = useStore((state) => state.getdata) 
  useEffect(() => {
      GetStoreData()
  }, []);

  const NavBar = () => {
    return tabs.map(tab => {
      return(
      <TouchableOpacity key = {tab} style={styles.tab}
        onPress={() => {setgoto(() => tab)}}
      >
        <Text style = {styles.navtext}> {tab} </Text>
      </TouchableOpacity>
      )
    })}

    const gotopage = (state: string) => {
      switch (state) {
        case 'Single':
          return <OneItem />
        case 'GridScroll':
          return <Listings />
        default:
          return <></>
      }
    }
  return (
  <View>
    <View style = {styles.tabs}>
      {NavBar()}
    </View>
      {gotopage(goto)}
  </View>  
  
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

