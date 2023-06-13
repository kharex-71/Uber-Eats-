import { View, StyleSheet, TextInput, Image, Pressable } from 'react-native'
import React,{useState} from 'react'
import { AntDesign } from '@expo/vector-icons';

const CustumInput = ({placeholder, value,secured, onChangeText,icon, ...other}) => {
    const [shown,setShown] = useState(false)
    
  return (
    <View style={styles.container} {...other}>
        <View style={styles.icon}>
            <Image source={icon}/>
        </View>
        <View style={styles.textInput}>
            <TextInput placeholder={placeholder} value={value} onChangeText={onChangeText} secureTextEntry={shown} 
            style={{ fontSize: 18, width: 300,height:50}} {...other}/>
        </View>
        {secured && 
                <Pressable onPress={()=>setShown(!shown)} style={{position: "absolute",right:10}}> 
                    {shown ? (
                                <AntDesign name="eye" size={24} color="black" />
                            ):(
                                <AntDesign name="eyeo" size={24} color="black" />
                            )}
                </Pressable>}
    </View>
  )
}

export default CustumInput

const styles = StyleSheet.create({
    container:{
    width:344,
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#EEEEEE",
    marginVertical: 8,
    borderRadius:5,
    borderWidth: 1,
    borderColor:"##1F546020",
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