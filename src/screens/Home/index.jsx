import React, { useState } from "react";
import {View, Text, Image, ToastAndroid, TouchableOpacity,TextInput, KeyboardAvoidingView} from "react-native";


import { style } from "./styles";

export function Home({navigation})
{
    var [peso, setPeso] = useState('');
    var [altura, setAltura] = useState('');
    var [idade, setIdade] = useState('');

    function imcResult(peso, altura) 
    {
        return (peso / ( (altura /100) * (altura/100))).toFixed(2)
    }

    function imcDataTxtToNumber() 
    {
        
        if(peso == "" || idade == "" || altura == "")
        {
            ToastAndroid.showWithGravity
            (
                "Alguns campos estão vazios",
                ToastAndroid.SHORT,
                ToastAndroid.BOTTOM
            );
            
            return
        }
        
        peso = parseFloat(peso)
        altura = parseFloat(altura)
        idade = parseInt(idade)

        const imc = imcResult(peso, altura) 

        navigation.navigate('Result', {imcResult: imc, resultStatus: classifyImc(imc)})
    }

    function classifyImc(imc) 
    {
        
        if(imc < 18.5)
            return "Magreza"
        else if(imc >= 18.5 && imc <= 24.9)
            return "Normal"
        else if(imc >= 24.9 && imc < 30)
            return "Sobrepeso"
        else
            return "Obesidade"

    }


    return(
        
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={style.container}>

            <View style={style.main}>
                
                <Text style={style.title}>
                    Insira seus dados abaixo{'\n'}
                    e deixe a calculadora fazer o resto
                </Text>

                <View style={style.InfoContainerColect}>
                    <Text style={style.infoText} >Indique o seu peso</Text>

                    <View style={style.InfoColect}>

                        <TextInput style={style.input}
                         placeholder="kg" keyboardType="numeric"
                         onChangeText={peso => setPeso(peso)}
                         />
                        <Image style={style.inputIcon} source={require('../../assets/kg.png')}/>
                    </View>

                </View>

                <View style={style.InfoContainerColect}>
                    <Text style={style.infoText} >Indique o sua altura</Text>
                    <View style={style.InfoColect}>
                        <TextInput style={style.input} placeholder="cm" keyboardType="numeric"
                        onChangeText={altura => setAltura(altura)}
                        />
                        <Image style={style.inputIcon} source={require('../../assets/height.png')}/>
                    </View>
                </View>

                <View style={style.InfoContainerColect}>
                    <Text style={style.infoText} >Informe sua idade</Text>
                    <View style={style.InfoColect}>
                        <TextInput style={style.input} placeholder="anos" keyboardType="numeric"
                        onChangeText={idade => setIdade(idade)}
                        />
                        <Image style={style.inputIcon} source={require('../../assets/growth.png')}/>
                    </View>
                </View>

                <TouchableOpacity style={style.button} activeOpacity={0.7} onPress={()=>{imcDataTxtToNumber()}}>
                    <Text style={style.textButton}>Calcular</Text>
                    <Image style={style.iconButton} source={require('../../assets/math.png')}/>
                </TouchableOpacity>

            </View>

            <View style={style.footer}>
                <TouchableOpacity style={style.backBtn} onPress = { () =>{navigation.goBack()} } >
                    <Image style={style.iconBack} source={require('../../assets/previous.png')}/>
                    <Text style={style.textBackBtn}> Saber mais</Text>
                </TouchableOpacity>    
            </View>


            </KeyboardAvoidingView>
    )
}