import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const PromotionWidget = () => {
  return (
    <View style={styles.container}>
        <View style={styles.text}>
            <Text style={{fontFamily: "Bold", fontSize: 16, paddingBottom: 8}}>Promotion applied</Text>
            <Text style={{fontFamily: "Medium", fontSize: 16}}>View basket for final discount</Text>
        </View>
        <View style={styles.icon}>
            <Image source={require("../../../assets/icon/promoIcon.png")}/>
        </View>
    </View>
  )
}

export default PromotionWidget

const styles = StyleSheet.create({
container:{
    backgroundColor: "#E9FFEF",
    padding: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent:"space-between",
    borderRadius: 15,
    marginTop: 36,
},
text:{},
icon: {}
})