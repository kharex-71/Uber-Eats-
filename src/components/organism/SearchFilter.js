import { StyleSheet, View, FlatList,Image } from 'react-native'
import React from 'react'
import Text from "../atoms/fontsText/Text"

let icon = require("../../../assets/icon/Vector.png")

const SearchFilter = ({data,input,setInput}) => {
  return (
    <View>
      {/* <Text>hello world</Text> */}
      <FlatList data={data} renderItem={({item})=> {
        if (input === "") {
            return(
              <View style={styles.Container}>
                <Image style={styles.img} source={icon}/>
                <View style={styles.txt}>
                  <Text type="medium" color='black-400' >{item.title}</Text>
                </View>
              </View>
            )
        }else if(item.title.toLowerCase().includes(input.toLowerCase())){
          return(
            <View style={styles.Container}>
              <Image style={styles.img} source={icon}/>
              <View style={styles.txt}>
                <Text type="medium" color='black-400'>{item.title}</Text>
              </View>
            </View>
          )
        } 
        
      }}/>
    </View>
  )
}

export default SearchFilter

const styles = StyleSheet.create({
    Container: {
        marginLeft: 35,
        paddingTop: 10,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
    },
    img:{
      marginRight: 24,
    },
    txt:{
      width:"80%",
      borderBottomWidth: 1,
      paddingBottom: 12,
      borderBottomColor: "#E8E8E8",
    },
})