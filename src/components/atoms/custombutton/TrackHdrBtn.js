import {  Text,Pressable,Image } from 'react-native'
import React from 'react'
import { View } from 'react-native-web'

const TrackHdrBtn = ({onPress,iconUrl,title}) => {
  return (
    <Pressable 
    onPress={onPress} 
    style={{alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
            borderRadius:99,
            backgroundColor: "#EEEEEE",
            marginHorizontal: 12,
            }}>
                {iconUrl &&<Image style={{paddingHorizontal: 16, resizeMode: "contain"}} source={iconUrl}/>}
      {title && <Text style={{fontSize: 14, paddingHorizontal: 16, paddingVertical:7}}>{title}</Text>}
    </Pressable>
  )
}

export default TrackHdrBtn