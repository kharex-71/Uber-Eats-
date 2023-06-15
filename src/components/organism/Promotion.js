import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import * as ROUTE from "../../constants/routes"

import HeaderBtn from "../atoms/custombutton/HeaderBtn"
import SearchInput from '../atoms/TextInput/SearchInput';
import Screen from '../atoms/screendimensions/Screen';

const BackIcon = require("../../../assets/icon/backArrow.png")

const Promotion = ({promoIcon,saveUp= false,input,header=false, onPress}) => {
    const navigation = useNavigation();
  return (
    <Screen>
{header && <View style={styles.headerWrapper}>
    <View style={{display: "flex",justifyContent: "space-between",flexDirection: "row"}}>
        <Pressable onPress={onPress} style={styles.headerContaienr}>
            <Image source={BackIcon}/>
            <Text style={{fontSize: 20, marginLeft: 16}}>Promotions</Text>
        </Pressable>
            <Text style={{color: "#34A853"}}>Enter code</Text>
    </View>
    <View style={{display: "flex", marginTop: 32, marginHorizontal: 24}}> 
        <Text style={{fontSize: 24, fontWeight: 600}}>Available promotions</Text>
        <Text style={{color: "#545454"}}>Limit of one per order</Text>
    </View>
    </View>}
        {input && <View style={{marginTop:5, alignItems:"center"}}>
            <SearchInput placeholder="Enter Promo code" icon={require("../../../assets/account/icons/promotions.png")}/>
        </View>}
        <View style={styles.contaienr}>
            <View style={{display: "flex", flexDirection: "row",justifyContent: "space-between"}}>
                {saveUp && <Text style={{fontWeight:700, fontSize:24}}>US$25 off</Text>}
                {promoIcon && <Image source={require("../../../assets/account/promo.png")}/>}
            </View>
            <View style={styles.textContaienr}>
                <Text style={{fontWeight: 500,fontSize:14,color:"#545454"}}> 
                    US$25 minimum order Delivery orders only     
                </Text>
                <Text style={{fontWeight: 500,fontSize:14,color:"#545454"}}> 
                    Use by 29 Jul 2022 8am       
                </Text>
            </View>
            <View style={{flexDirection:"row"}}>
                <HeaderBtn title="Selected" />
                <HeaderBtn title="Detail" style={{marginHorizontal: 7}}/>
            </View>
        </View>
    </Screen>
  )
}

export default Promotion;

const styles = StyleSheet.create({
    headerWrapper:{
        marginHorizontal: 15,
        paddingTop: 10,
    },
    headerContaienr:{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
    },
    contaienr:{
        borderWidth:2,
        borderColor:"#34A853",
        margin: 20,
        padding:20
    },
    textContaienr: {
        height: 60,
        flexDirection: "column",
        justifyContent: "space-between",
        marginVertical: 13
    }
})