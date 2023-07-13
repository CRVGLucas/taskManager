/* eslint-disable prettier/prettier */
import React from 'react'
import { View } from 'react-native'
import { InputWhite, PressableButton } from "./Create.styles";
import { TextWhite } from "../../App.styles";
import { ActivityIndicator, MD2Colors } from "react-native-paper";
import { db } from "../../firebase/config";
import { addDoc, collection } from "firebase/firestore/lite";
import { doc, setDoc } from "firebase/firestore"; 

export default function Create({ closeModal }: {closeModal: any}) {
    const [title, setTitle] = React.useState('');
    const [description, setDescription] = React.useState('');
    const date = new Date();
    const [loading, setLoading] = React.useState(false);

    function hideModal(){
      closeModal();
    }

    async function createTask(){

      if ( title && description && date ){
        try {
          // setLoading(true);
          // const form = { title: title, description: description, createdAt: date, done: false };
          // const tasksCol = collection(db, 'tasks');
          hideModal();
          // await addDoc(tasksCol, form).then((response: any) => {
          //   console.log('resposta: ', response)
          //  hideModal();
          // });
        } catch ( error: any) {

        } finally {
          setLoading(false);
        }
      }
    }

    return (
        <View>
          <TextWhite>Título</TextWhite>
          <InputWhite onChangeText={ value => setTitle(value)}/>

          <TextWhite>Descrição</TextWhite>
          <InputWhite onChangeText={ value => setDescription(value)}/>

           <PressableButton disabled={loading} onPress={() => createTask()}>
              {
                !loading ?
                  <TextWhite>CADASTRAR</TextWhite>
                  :
                  <ActivityIndicator size="large" animating={true} color={MD2Colors.red800} />
              }
           </PressableButton>
        </View>
    );
}
