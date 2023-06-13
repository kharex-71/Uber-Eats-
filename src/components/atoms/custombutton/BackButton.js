import {Pressable, Image, StyleSheet, Text } from 'react-native'
import React from 'react'


const backIcon = require("../../../../assets/icon/backArrow.png")


const BackButton = ({title,iconUrl,onPress}) => {
  return (
    <Pressable onPress={onPress}>
    <Image style={styles.icon} source={iconUrl} title={title}/>
    {/* <Text>{title}</Text> */}
    </Pressable>
  )
}

export default BackButton

const styles = StyleSheet.create({
  icon: {
    // marginHorizontal: 17,
  }
})