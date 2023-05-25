import { StyleSheet, Image } from 'react-native'
import React from 'react'




const UserImageViewer = ({placeholderImageSource,selectedImage }) => {

    const imageSource = selectedImage !== null
    ? { uri: selectedImage }
    : placeholderImageSource;


  return (
      <Image source={imageSource} style={styles.image}/>
  )
}

export default UserImageViewer

const styles = StyleSheet.create({
    image: {
        width: 90,
        height: 90,
        borderRadius: 50,
      },
})