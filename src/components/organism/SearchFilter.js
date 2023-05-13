import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'

const SearchFilter = ({data,input,setInput}) => {
  return (
    <View>
      <FlatList data={data} renderItem={({item})=> {
        if (input === "") {
            setInput
        } else if(item.title.toLowerCase().includes(input.toLowerCase())){
                <View style={styles.Container}>
                    <Text>{item.title}</Text>
                </View>
        } 
        
      }}/>
    </View>
  )
}

export default SearchFilter

const styles = StyleSheet.create({
    Container: {
        marginLeft: 45,
        paddingTop: 10,
    }
})