import React from "react";

import { View, Text, Image, TouchableOpacity } from "react-native"
import { style } from "./styles";

export function Result({navigation, route}) 
{
    
    const {imcResult, resultStatus} = route.params;

    return (
        <View style={style.container}>

            <View style = {style.main}>
                <Image source={require('../../assets/imgResult.png')} style={style.imgResult}/>
                <Text style={style.title1}>O seu imc é</Text>
                <Text style={style.title2}> {JSON.stringify(imcResult)} kgm/2 </Text>

                <Text style={style.resultStatus1}>Este valor é considerado</Text>
                <Text style={style.resultStatus2}>{JSON.stringify(resultStatus)} </Text>
            </View>

            <View style = {style.footer}>
                <TouchableOpacity style={style.backBtn} onPress = { () =>{navigation.goBack()} } >
                        <Image style={style.iconBack} source={require('../../assets/previous.png')}/>
                        <Text style={style.textBackBtn}> Calcular novamente</Text>
                </TouchableOpacity>  
            </View>

        </View>
    )

}