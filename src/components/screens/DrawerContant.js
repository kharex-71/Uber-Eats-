import React from "react"
import { View, StyleSheet } from "react-native"
import {
    Avatar,
    Title,
    Caption,
    Drawer,
    } from "react-native-paper"
import { DrawerContentScrollView, DrawerItem} from "@react-navigation/drawer"
import Icon from "react-native-vector-icons/MaterialCommunityIcons"
const DrawerContant = (props) => {
    return (
        <View style={{flex:1}}>
            <DrawerContentScrollView {...props}>
                <View style={{flex:1}}>
                    <View style={{paddingLeft: 20}}>
                        <View style={{flexDirection: "row", marginTop:15}}>
                                <Avatar.Image size={50} source={require('../../../assets/adaptive-icon.png')} />
                            <View style={{marginLeft:15, flexDirection: "column"}}>
                                <Title>@UserName</Title>
                                <Caption>FirstName@mail.ru</Caption>
                            </View>
                        </View>
                    </View>
                    <Drawer.Section style={{paddingLeft:15}}>
                            <DrawerItem 
                                icon={({color,size})=>(
                                    <Icon 
                                        name="account"
                                        color={color}
                                        size={size}
                                    />
                                    )}
                                        label="Profile"
                                        onPress={()=> alert("დარჩი")}
                            />

                            <DrawerItem 
                                icon={({color,size})=>(
                                    <Icon 
                                        name="home"
                                        color={color}
                                        size={size}
                                    />
                                    )}
                                        label="Home"
                                        onPress={()=> alert("დარჩი")}
                            />

                            <DrawerItem 
                                icon={({color,size})=>(
                                    <Icon 
                                        name="bookmark"
                                        color={color}
                                        size={size}
                                    />
                                    )}
                                        label="Save"
                                        onPress={()=> alert("დარჩი")}
                            />
                    </Drawer.Section>

                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.Sectionstyle}>
                <DrawerItem 
                icon={({color,size})=>(
                    <Icon 
                    name="exit-to-app"
                    color={color}
                    size={size}
                    />
                    )}
                    label="Sign Out"
                    onPress={()=> alert("დარჩი")}
                />
            </Drawer.Section>
        </View>
    )
}

const styles = StyleSheet.create({
    Sectionstyle: {
        marginBottom: 15,
        borderTopColor: "#999999",
        borderTopWidth:1
    },
    
});

export default DrawerContant;

