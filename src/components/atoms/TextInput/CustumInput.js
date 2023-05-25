import { View, StyleSheet, TextInput, Image } from 'react-native'
import React from 'react'

const CustumInput = ({placeholder, value, onChangeText,icon}) => {
  return (
    <View style={styles.container}>
        <View style={styles.icon}>
            <Image source={icon}/>
        </View>
        <View style={styles.textInput}>
            <TextInput placeholder={placeholder} value={value} onChangeText={onChangeText}/>
        </View>
    </View>
  )
}

export default CustumInput

const styles = StyleSheet.create({
    container:{
    width:324,
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#EEEEEE",
    marginVertical: 8,
    borderRadius:5,
    },
    icon: {
        paddingHorizontal: 9,
        borderRightWidth: 1,
        borderRightColor: "#A9A9A9",
    },
    textInput:{
        marginLeft: 3,
    }
})