import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

let prmImg =require("../../../assets/account/promoDels.png")

const PromotionWidget = ({imgIcon=true,title,subTitle}) => {
  return (
    <View style={styles.container}>
        <View style={styles.text}>
            <Text style={{fontFamily: "bold", fontSize: 16, paddingBottom: 8}}>{title}</Text>
            <Text style={{fontFamily: "medium", fontSize: 16}}>View basket for final discount</Text>
        </View>
        <View style={styles.icon}>
          {imgIcon ? (<Image source={require("../../../assets/icon/promoIcon.png")}/>) : (<Image source={prmImg}/>)}
            
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