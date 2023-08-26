import { StyleSheet, Text, View, Image, FlatList,TouchableOpacity, TouchableHighlight, TextInput, KeyboardAvoidingView } from 'react-native';
import React, {useEffect, useState} from 'react';
import { useStore } from '../state/zustand/store';
import { Platform } from 'react-native';
import axios from 'axios';

import { Post } from '../type/type';

type SlideProps = {
    data: Post[]
  };

const SlideShow: React.FC<SlideProps> = (props) => {

const {data} = props

//const StoreData = useStore((state) => state.data)

const [index, setindex] = useState<number>(0);

//const [txt,addtext] = useState('')

return (

  <View style={{
    //backgroundColor: '#492B8C',
    //height: '40%',
    //padding: 24,
    flex: 1,
    //alignItems: 'center',
    justifyContent: 'flex-start', //not work keyboard avoid if no
    //gap:20
  }}>
      <View style={{
        alignItems: 'center'
      }}>
        <Text style = {styles.title}>{(index+1) + ' - ' + data[index].title + ' - Lớp ' + data[index].grade}</Text>
        <TouchableHighlight style={styles.circle}
                            onPress={() => {
                              setindex(index >= (data.length-1)? 0 : index+1)
                            }} >
          <Image  
          style={{width: 400, height: 300}}       
          source = {{
              uri: data[index].content,
            }}
          />
        </TouchableHighlight>
      </View>

      <View>
        <TextInput  style={styles.input}
                    // multiline
                    // numberOfLines={2}
                    //onChange={(text)=>{addtext(text)}}
                    clearTextOnFocus
                    onSubmitEditing={(e)=>{
                      //console.log(e.nativeEvent.text)
                      const text = e.nativeEvent.text
                      var title = text.match(/\D*/)[0].trim()
                      title = title ==''? data[index].title : title
                      var grade = text.match(/[0-9]*$/)[0]
                      grade = grade ==''? data[index].grade : grade
                      console.log({id:data[index].id,title:title,grade:grade})
                      axios.put('https://web-app-next-lac.vercel.app/api/AddText',{id:data[index].id,title:title,grade:grade})
                      //.then (res => console.log(res.data))
                      //const check = new RegExp('[0-9]*$')
                      //console.log(check.exec(text))
                    }}
        ></TextInput>
      </View>

  </View>

);
}

const samplePost: Post = {title:"gogo", content: "https://fujifilm-x.com/wp-content/uploads/2021/01/gfx100s_sample_04_thum-1.jpg"}

const defaultProps: SlideProps = {
  data: [samplePost]
}

SlideShow.defaultProps = defaultProps

export default SlideShow

const styles = StyleSheet.create({

container: {
  //backgroundColor: '#492B8C',
  flex: 1,
  flexDirection: 'column',
  //gap: 20,
  //top: 100,
  //height: '100%',
  
  //alignItems: 'center', //default is stretch
  justifyContent: 'space-between', 

},

circle: {
  //position: 'absolute',
  //left: 37,
  //top: 127,
  width: 400,
  height: 400,
  borderRadius: 400,
  //margin: 10,
  backgroundColor: '#FFFFFF',

  //flex: 1,
  //flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
},

title: {
position: 'absolute',
//top: 450,
//width: 272,
//height: 90,
//left: 43,
//flexWrap: 'wrap',
//textAlign: 'center',

fontStyle: 'normal',
fontWeight: '600',
fontSize: 30,
zIndex: 10,
//color: '#FFFFFF',
//lineHeight: 45,



},

input: {
  //height: 45,
  margin: 12,
  borderWidth: 1,
  //padding: 10,
  fontSize: 30,
  backgroundColor: '#FFFFFF'
},

});
