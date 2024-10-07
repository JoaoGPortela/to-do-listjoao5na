import React, { useState } from "react";

import {
    ActivityIndicator,
    Alert,
    Image,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from "react-native";

import { style } from "./styles";
import Logo from '../../assets/logo.png'
import {MaterialIcons} from '@expo/vector-icons'
import { themas } from "../../global/themes";
export default function Login (){
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [loading,setLoading] = useState(false);

   async function getLogin(){
        try {
            setLoading(true)
            if(!email || !password){
                return Alert.alert('Atenção', 'Informe os campos obrigatórios!')
            }

            setTimeout(()=>{
                if(email == 'teste@gmail.com' && password == '123456'){
                    alert('Logado com sucesso')
                }else{
                    alert('Usuário não encontrado')
                }
                
                setLoading(false)
            },3000)
            
           

        } catch (error) {
            console.log(error)
        }
    }


    return (
        <View style={style.container}>
            <View style={style.boxTop}>
                <Image 
                source={Logo}
                style={style.logo}
                resizeMode="contain"
                />
                <Text style={style.title}>Bem-vindo de volta!</Text>
            </View>
            <View style={style.boxMid}>
                <Text style={style.titleInput}>ENDEREÇO EMAIL</Text>
                <View style={style.boxInput}>
                <TextInput
                style={style.inputText}
                value={email}
                onChangeText={setEmail}
                />
                <MaterialIcons
                    name='email'
                    size={20}
                    color={themas.colors.gray}
                />
                </View>
                <Text style={style.titleInput}>SENHA</Text>
                <View style={style.boxInput}>
                <TextInput
                style={style.inputText}
                onChangeText={setPassword}
                 
                 />
                <MaterialIcons
                    name='remove-red-eye'
                    size={20}
                    color={themas.colors.gray}
                />
                </View>
            </View>
            <View style={style.boxBottom}>
                <TouchableOpacity style={style.button} onPress={()=>getLogin()}>
                    {loading?
                    <ActivityIndicator />
                    :
                    <Text style={style.textButton}>Entrar</Text>}
                    
                </TouchableOpacity>
            </View>
            <Text style={style.textBottom}>Não tem conta? <Text style={{color:themas.colors.primary}}>Crie agora!</Text></Text>
        </View>
    )
}