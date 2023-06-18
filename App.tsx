import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, FlatList,TouchableOpacity } from 'react-native';
import React, {useEffect, useState} from 'react';

type Post = {
  id?: string;
  title: string;
  content: string;
  published?: boolean;
  authorId?: string;
};


//const who = 'HUHU'


const App= () => {

  const samplePost: Post = {title:"gogo", content: "https://fujifilm-x.com/wp-content/uploads/2021/01/gfx100s_sample_04_thum-1.jpg"}

  const [data, setData] = useState<Post[]>([samplePost]);
  
  const [index, setindex] = useState<number>(0);
  const [rowitem, setitem] = useState<Post>(samplePost);

  const getdata = async () => {
    try {
    const response = await fetch('https://api-node-test-one.vercel.app')
    const json = await response.json()
    setData(json)
    setitem(json[0])

    }
    catch (error){
      console.log(error)
    }
  }

  useEffect(() => {
    getdata();
   }, []);

  useEffect(() => {
    setitem(data[index]) 
  },[index])

  return (
    <>
    <View style={styles.container}>

      <TouchableOpacity 
      onPress={() => {
        setindex(index >= (data.length-1)? 0 : index+1)
        setitem(data[index]) 
      }} >
        <Image  
        style={styles.tinyLogo}       
        source = {{
            uri: rowitem.content,
          }}
        />
      </TouchableOpacity>

      <Text style = {styles.title}>{rowitem.title +  ' - ' + index}</Text>

      <StatusBar style="auto" />
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#492B8C',
    
    flex: 1,
/*  justifyContent: 'center', 
    alignItems: 'center', */
  },

  tinyLogo: {
    position: 'absolute',
    width: 300,
    height: 300,
    left: 37,
    top: 127,
  },
  
title: {
position: 'absolute',
width: 272,
height: 90,
left: 43,
top: 423,

fontFamily: 'Times New Roman',
fontStyle: 'normal',

fontWeight: '600',
fontSize: 30,
lineHeight: 45,
textAlign: 'center',
color: '#FFFFFF',
  },

});

export default App
