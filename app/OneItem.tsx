import { StyleSheet, Text, View, Image, FlatList,TouchableOpacity, TouchableHighlight, ScrollView, Dimensions,KeyboardAvoidingView } from 'react-native';
import React, {useEffect, useState} from 'react';
import SlideShow from '../component/SlideShow';
import { useStore } from '../state/zustand/store';
import { Post } from '../type/type';
import { colors, sizes } from '../theme';
import { Platform } from 'react-native'

const OneItem = () => {

  var StoreData = useStore((state) => state.data)
  StoreData = StoreData.filter(item =>{
    return item.published === false
})
  //console.log(StoreData)
  //const GetStoreData = useStore((state) => state.getdata) // use in common component not use here
  
  useEffect(() => {
    //GetStoreData()
   }, []);

  return (
  <View style={{
    height: '80%'
  }}>
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{
        flex:1,
        backgroundColor: '#492B8C',
      }}>
        <SlideShow data={StoreData} />  
    </KeyboardAvoidingView>
  </View>
  
)}

export default OneItem

