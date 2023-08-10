import { StyleSheet, Text, View, Image, FlatList,TouchableOpacity, TouchableHighlight, ScrollView, Dimensions } from 'react-native';
import React, {useEffect, useState} from 'react';
import { colors, sizes } from '../theme';
import { useStore } from '../state/zustand/store';
import GridItem from '../component/GridItem';

const {width} = Dimensions.get("window")

const Listings = () => {

  const StoreData = useStore((state) => state.data)
  const GetStoreData = useStore((state) => state.getdata)
  
  useEffect(() => {
    GetStoreData()
   }, []);
 
  return (
    <ScrollView 
          showsVerticalScrollIndicator = {false} 
          style={{ marginTop: sizes.base*3,
            paddingVertical: sizes.base*2}}
          >
            <View style={{
              flexDirection: 'row',
              justifyContent: 'space-between',

              flexWrap: 'wrap',
              paddingHorizontal: sizes.base*1.5,
              marginBottom: sizes.base * 3.5,
              
            }}>
              {StoreData?.map(item => (
                  <GridItem key = {item.id} item = {item}/>
              )
              )}
            </View>  
    </ScrollView>
  
)}

export default Listings

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

