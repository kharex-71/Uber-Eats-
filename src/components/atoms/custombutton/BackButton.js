import { Image, StyleSheet } from 'react-native'
import React from 'react'


const backIcon = require("../../../../assets/icon/backArrow.png")


const BackButton = ({title}) => {
  return (
    <Image source={backIcon} title={title}/>
  )
}

export default BackButton

const styles = StyleSheet.create({})