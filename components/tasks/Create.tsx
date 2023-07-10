/* eslint-disable prettier/prettier */
import { TextInput, Text, Pressable, Button } from "react-native";
import React from 'react'
import { View } from 'react-native'
import DatePicker from "react-native-date-picker";
import { InputWhite, PressableWhite } from "./Create.styles";
import { TextWhite } from "../../App.styles";
import { ActivityIndicator, MD2Colors } from "react-native-paper";


export default function Create() {
    const [title, setTitle] = React.useState('');
    const [description, setDescription] = React.useState('');
    const [date, setDate]: any = React.useState(new Date())
    const [toggleDate, setToggleDate] = React.useState(false);
    const [loading, setLoading] = React.useState(false);

    function createTask(){
      setLoading(true)
      if( title && description && date){
        
      } else {

      }
        console.log("data: ", date)
        console.log("title: ", title)
        console.log("description: ", description)
        setLoading(false)
    }

    return (
        <View>
          <TextWhite>Título</TextWhite>  
          <InputWhite onChangeText={ value => setTitle(value)}/>
          <TextWhite>Descrição</TextWhite>
          <InputWhite onChangeText={ value => setDescription(value)}/>
          <PressableWhite onPress={() => setToggleDate(true)}>
            <TextWhite>Data de expectativa de conclusão: { date && date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear()}</TextWhite>
          </PressableWhite>
          <DatePicker
            date={date}
            androidVariant = 'nativeAndroid'
            mode="date"
            onDateChange={((value) => setDate(value))}
            modal={true}
            open={toggleDate}
            onConfirm={() => { setToggleDate(false)}}
            onCancel={() => { setToggleDate(false)}}
           />
           <Pressable disabled={loading} onPress={() => createTask()}>
              {
                !loading ? <Text>Cadastrar</Text> : <ActivityIndicator size="large" animating={true} color={MD2Colors.red800} />
              }
           </Pressable>
        </View>

    )
}