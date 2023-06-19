import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, FlatList,TouchableOpacity, TouchableHighlight } from 'react-native';
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

  return (
    <>
    <View style={styles.container}>

      <TouchableHighlight style={styles.circle}
      onPress={() => {
        setindex(index >= (data.length-1)? 0 : index+1)
      }} >
        <Image  
        style={styles.tinyLogo}       
        source = {{
            uri: data[index].content,
          }}
        />
      </TouchableHighlight>

      <Text style = {styles.title}>{data[index].title +  ' - ' + index}</Text>

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
    //position: 'absolute', //mess up the onPress listener
    //left: 37,
    //top: 127,
    width: 230,
    height: 180,

    },
  
title: {
position: 'absolute',
width: 272,
height: 90,
left: 43,
top: 423,

fontStyle: 'normal',

fontWeight: '600',
fontSize: 30,
lineHeight: 45,
textAlign: 'center',
color: '#FFFFFF',
  },

circle: {
  position: 'absolute',
  left: 37,
  top: 127,
  width: 300,
  height: 300,
  borderRadius: 150,
  backgroundColor: '#FFFFFF',
  alignItems: 'center',
  justifyContent: 'center',
}

});

export default App
