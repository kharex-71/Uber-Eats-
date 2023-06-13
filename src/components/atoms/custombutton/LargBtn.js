import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';

const LargBtn = ({onPress, title}) => {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <View style={styles.textBox}>
        <View>
            <Text style={styles.textVisual}>{title}</Text>
        </View>
        <View style={{marginRight: 0}}>
            <AntDesign name="arrowright" size={24} color="white"/>
        </View>
      </View>
    </Pressable>
  )
}

export default LargBtn

const styles = StyleSheet.create({
    container:{
        width: "100%",
        height: 55,
        marginVertical: 16,
        // marginTop: 19,
        backgroundColor: "#000000",
        borderRadius: 5,
        display: "flex", 
        alignItems: "center",
        justifyContent: "center",
    },
    textBox:{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    textVisual:{
        fontSize: 18,
        color: "#FFFFFF",
        fontWeight: 600,
    },
})