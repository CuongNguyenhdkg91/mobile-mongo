import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import React, {useEffect, useState} from 'react';

type Post = {
  id: string;
  title: string;
  content: string;
  published: boolean;
  authorId: string;
};


//const who = 'HUHU'


const App= () => {

  const [data, setData] = useState<Post[]>([]);
  
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

  return (
    <View style={styles.container}>
      <FlatList
      data = {data}
      keyExtractor={({id}) => id}
      renderItem={({item}) => (
      <>
      <Text>{item.title}</Text>
      <Image         
      style={styles.tinyLogo}
      source = {{
          uri: item.content,
        }} />
      </>
      )}
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tinyLogo: {
    width: 300,
    height: 300,
  },
});

export default App
