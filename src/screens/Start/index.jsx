import React from "react";
import {View, Text, Image, TouchableOpacity} from "react-native";

import A from 'react-native-a';

import { style } from "./styles";

export function Start({navigation})
{

    const saiba_mais_link = "https://receitadevida.com.br/nutricao/imc-a-importancia-e-como-calcular"

    return(
        <View style={style.container}>

            <View style={style.main}>
                <Image source={require('../../assets/imgpresentation.png')} style={style.imgPresentation}/>
                <Text style={style.title1}>Calcule o seu</Text>
                <Text style={style.title2}>IMC</Text>

                <Text style={style.info}>Porque é importante controlar sua saude</Text>
                <A href={saiba_mais_link} style={style.link}>Saber mais</A>
            </View>

            <View style={style.footer}>
                <TouchableOpacity style={style.button} activeOpacity={0.7} onPress={()=>{navigation.navigate('Home')}}>
                    <Text style={style.textButton}>Começar</Text>
                    <Image style={style.iconButton} source={require('../../assets/next.png')}/>
                </TouchableOpacity>
            </View>
        </View>
    )
}