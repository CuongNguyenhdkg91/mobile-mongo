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
    //flex: 1,

    //backgroundColor: '#492B8C',
    height: '100%',
    //padding: 24,

    //alignItems: 'center',
    // justifyContent: 'flex-start', //not work keyboard avoid if no
    //gap:20
  }}>
    
{/*       <View style={{
        // alignItems: 'center'
      }}> */}
        <Text style = {styles.title}>{(index+1) + ' - ' + data[index].title + ' - Lớp ' + data[index].grade + ' - ' + (data[index].note === undefined? '' : data[index].note.join(' '))}</Text>
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{
          
          // marginTop: 70,
          // marginBottom: 70,
          // paddingTop: 70
          flex: 1,
          justifyContent: 'space-around'
        }}>
          <TouchableHighlight style={styles.circle}
                              onPress={() => {
                                setindex(index >= (data.length-1)? 0 : index+1)
                              }} >
            <Image  
            style={{width: 550, height: 450}}       
            source = {{
                uri: data[index].content,
              }}
            />
          </TouchableHighlight>
        </KeyboardAvoidingView>
      {/* </View> */}

      <View style={styles.AvoidKeyboard}>
        <TextInput  style={styles.input}
                    // multiline
                    // numberOfLines={2}
                    //onChange={(text)=>{addtext(text)}}
                    clearTextOnFocus
                    onSubmitEditing={(e)=>{
                      //console.log(e.nativeEvent.text)
                      const text = e.nativeEvent.text
                      var title = text.match(/\D[a-z]\D*/)
                      //console.log(title)
                      //console.log(typeof title)
                      //title ='' //to disable update title
                      title = title === null? data[index].title : title[0].trim()
                      //console.log(title)
                      // var grade = text.match(/[0-9]*$/) * return [""], use +
                      var grade = text.match(/[0-9]+/)
                      grade = grade === null? data[index].grade : grade[0] //check with null not ''
                      console.log(grade)
                      var note = text.match(/[A-Z]{2}/g)
                      note = note === null ? data[index].note : note
                      //console.log(note)
                      axios.put('https://web-app-next-lac.vercel.app/api/AddText',{id:data[index].id,title:title,grade:grade,note:note})
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

//container class not used
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
  // top: 70,
  // marginTop:70,
  //bottom: 0, //not work because it is relative postition
  width: 350,
  height: 350,
  borderRadius: 400,
  //margin: 10,
  backgroundColor: '#FFFFFF',
  overflow: 'hidden',

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
color: '#FFFFFF',
//lineHeight: 45,
},

input: {
  //height: 45,
  // margin: 60,
  borderWidth: 1,
  width: 300,
  // margin:0, not work
  //padding: 10,
  fontSize: 30,
  backgroundColor: '#FFFFFF'
},

AvoidKeyboard:{
  position: 'absolute',
  bottom: 0,
  alignSelf:'center'
  //backgroundColor: '#FFFFFF'
  //alignContent: 'center', not work
  //justifyContent: 'center', not work
  //alignItems: 'center', not work
}

});
