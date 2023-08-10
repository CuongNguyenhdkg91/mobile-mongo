import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, FlatList,TouchableOpacity, TouchableHighlight, ScrollView, Dimensions } from 'react-native';
import React, {useEffect, useState} from 'react';
import { colors, sizes } from '../theme';
import { Post } from '../type/type';

type FrameProps = {
  item: Post
}

const {width} = Dimensions.get("window")

const GridItem = (props: FrameProps) => {

  const{item}= props

  return (
                <TouchableOpacity >
                  <View style = {styles.card} >
                      <View style ={styles.badge}>
                          <Image style = {{
                              width: 100,
                              height: 80,
                          }}
                          source = {{uri: item.content,}} />
                      </View>
                    <Text>{item.title}</Text>
                  </View>
                </TouchableOpacity>
 
)}

export default GridItem

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
    padding: sizes.base + 4,
    marginBottom: sizes.base,

    minWidth: (width - sizes.padding * 2.4 - sizes.base) / 2,
    maxWidth: (width - sizes.padding * 2.4 - sizes.base) / 2,
    maxHeight: (width - sizes.padding * 2.4 - sizes.base) / 2,

  },

  badge: {
    height: 120,
    width: 120,
    borderRadius: 120,
    backgroundColor: 'rgba(41,216,143,0.2)' ,
    
    marginTop: 5,
    marginRight: 0,
    marginBottom: 5,
    marginLeft: 0,

    alignItems: 'center',
    justifyContent: 'center',

  },
    

})

