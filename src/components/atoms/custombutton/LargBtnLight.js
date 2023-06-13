import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';

const LargBtnLight = ({onPress, title, icon}) => {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <View style={styles.textBox}>
        <View>
            <Text style={styles.textVisual}>{title}</Text>
        </View>
        <View style={{marginRight: 0}}>
            {icon && <AntDesign name="arrowright" size={24} color="white"/>}
        </View>
      </View>
    </Pressable>
  )
}

export default LargBtnLight

const styles = StyleSheet.create({
    container:{
        width: '100%',
        height: 55,
        marginBottom: 19,
        // marginTop: 28,
        backgroundColor: "lightgray",
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
        color: "#000000",
        fontWeight: 600,
    },
})