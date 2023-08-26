import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, FlatList,TouchableOpacity, TouchableHighlight, ScrollView, Dimensions } from 'react-native';
import React, {useEffect, useState} from 'react';
import { colors, sizes } from '../theme';
import { Post } from '../type/type';
import { useStore } from '../state/zustand/store';
import axios from 'axios';


const {width} = Dimensions.get("window")

type FrameProps = {
  item: Post
}

const GridItem = (props: FrameProps) => {

  const GetStoreData = useStore((state) => state.getdata) 
  const FilterGrid = useStore((state) => state.filterItem)

  const{item}= props

return (
  <View style = {styles.card} >
    <TouchableOpacity style ={styles.badge} 
                      onPress={()=>{
                        //FilterGrid(item.id)
                        axios.put('https://web-app-next-lac.vercel.app/api/ChangeShow',{id:item.id,published:true})
                      }}>
      {/* <View style ={styles.badge}></View> */}
    </TouchableOpacity>
    <Image style = {{
        //position: 'absolute',
        width: 180,
        //height: 120,
        height: 200,
        resizeMode:'contain'
    }}
    source = {{uri: item.content,}} />
    <TouchableOpacity onPress={()=>{
/*       axios.delete(`https://https://web-app-next-lac.vercel.app//api/DeleteItem/${item.id}`)
      .then(()=> {

        GetStoreData()
      }) */
      GetStoreData()
      //console.log(item.id)
    }}>
      <Text>{item.title}</Text>
      {/* <Text>{item.id}</Text> */}
      {/* <Text>{(width - sizes.padding * 2.4 - sizes.base)/1.5}</Text> */}
    </TouchableOpacity>
  </View>

)}

export default GridItem

const styles = StyleSheet.create({

  card: {

    alignItems: 'center',
    justifyContent: 'center',

    shadowColor: colors.black,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 13,
    elevation: 2,

    backgroundColor: colors.white,  
    borderRadius: sizes.radius,
    //padding: sizes.base + 0,
    marginBottom: sizes.base,

    minWidth: (width - sizes.padding * 1 - sizes.base) / 2,
    maxWidth: (width - sizes.padding * 1 - sizes.base) / 2,
    maxHeight: (width - sizes.padding * 2.4 - sizes.base)/1.5+20,

  },

  badge: {
    height: 15,
    width: 15,
    borderRadius: 15,
    paddingLeft: 30,
    backgroundColor: 'rgba(255, 73, 13,0.2)' ,
    
    position:'absolute',
    top: 0,
    left:5,
    zIndex:10,
/*     marginTop: 5,
    marginBottom: 5,
    marginRight: 0,
    marginLeft: 0, */

    alignItems: 'center',
    justifyContent: 'center',

  },
    

})

