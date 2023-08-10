import { StyleSheet, Text, View, Image, FlatList,TouchableOpacity, TouchableHighlight } from 'react-native';
import React, {useEffect, useState} from 'react';
import { useStore } from '../state/zustand/store';

import { Post } from '../type/type';

type SlideProps = {
    data: Post[]
  };

const SlideShow: React.FC<SlideProps> = (props) => {

const {data} = props

//const StoreData = useStore((state) => state.data)

const [index, setindex] = useState<number>(0);

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

  </View>
  </>
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
  backgroundColor: '#492B8C',
  flex: 1,
  top: 100,

  flexDirection: 'row',
  justifyContent: 'center', 
  // alignItems: 'center',
},

circle: {
  position: 'absolute',
  //left: 37,
  top: 127,
  width: 300,
  height: 300,
  borderRadius: 150,
  backgroundColor: '#FFFFFF',
  flex: 1,
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
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
top: 450,
width: 272,
//height: 90,
//left: 43,


flexWrap: 'wrap',
textAlign: 'center',
color: '#FFFFFF',


fontStyle: 'normal',

fontWeight: '600',
fontSize: 30,
//lineHeight: 45,

},


});
