import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const StartShopping = ({restName,onPress}) => {
  return (
    <View style={styles.Container}>
      <Pressable style={styles.Restourant} onPress={onPress}>
        <Text style={styles.RestName}>{restName}
          <Text style={styles.RestAddress}>(Address)
          </Text>
        </Text>
      </Pressable>
    </View>
  )
}

export default StartShopping

const styles = StyleSheet.create({
    Container:{
        alignItems: "center",
    },
    Restourant: {},
    RestName: {
        fontSize: 24,
    },
    RestAddress: {
    fontSize:36,
    color: "red"
    },
})