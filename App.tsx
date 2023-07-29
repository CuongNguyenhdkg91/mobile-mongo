import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, FlatList,TouchableOpacity, TouchableHighlight, ScrollView, Dimensions } from 'react-native';
import React, {useEffect, useState} from 'react';
import OneItem from './component/SingleItem';
import { colors, sizes } from './component/theme';

type Post = {
  id?: string;
  title: string;
  content: string;
  published?: boolean;
  authorId?: string;
};

const {width} = Dimensions.get("window")

const App= () => {

  const [data, setData] = useState<Post[]>();
  const getdata = async () => {
    try {
    const response = await fetch('https://api-node-test-one.vercel.app')
    const json = await response.json()
    setData(json)
  
    }
    catch (error){
      console.log(error)
    }
  }
  
  useEffect(() => {
    getdata();
   }, []);


  const tabs = ["Single", "GridScroll", "GirdFlat", "Another"]
  const [goto,setgoto] = useState('Single')

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
              {data?.map(item => (
                <TouchableOpacity key= {item.id}>
                  <View style = {styles.card} >
                      <View style ={styles.badge}>
                          <Image style = {{
                              width: 100,
                              height: 80,
                          }}
                          source = {{uri: item.content,}} />
{/*                           <Image source = {require('./plants.png')} />
                          <Image source = {require('./assets/favicon.png')} /> */}
                      </View>
                    <Text>{item.title}</Text>
                  </View>
                </TouchableOpacity>
              )
              )}
            </View>  
          </ScrollView>

          )
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

