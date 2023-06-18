import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, FlatList,TouchableOpacity } from 'react-native';
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
  
  const [index, setindex] = useState(0);
  const [row, setrow] = useState<Post>();

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

  useEffect(() => {
    setrow(data[index]) 
  },[index])

  return (
    <View style={styles.container}>
      <FlatList
      data = {data}
      keyExtractor={({id}) => id}
      renderItem={({item}) => (
      <>
      <Text>{item.title + ' - ' + index + ' - ' + row.title}</Text>
      <TouchableOpacity onPress={() => {
        setindex(index >= (data.length-1)? 0 : index+1)
      }} >
        <Image         
        style={styles.tinyLogo}
        source = {{
            uri: item.content,
          }}
        />
      </TouchableOpacity>
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
