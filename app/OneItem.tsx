import { StyleSheet, Text, View, Image, FlatList,TouchableOpacity, TouchableHighlight, ScrollView, Dimensions } from 'react-native';
import React, {useEffect, useState} from 'react';
import SlideShow from '../component/SlideShow';
import { useStore } from '../state/zustand/store';
import { Post } from '../type/type';
import { colors, sizes } from '../theme';

const OneItem = () => {

  const StoreData = useStore((state) => state.data)
  //const GetStoreData = useStore((state) => state.getdata) // use in common component not use here
  
  useEffect(() => {
    //GetStoreData()
   }, []);

  return (
  <View>
      <SlideShow data={StoreData} />  

      
  </View>  
  
)}

export default OneItem


