/* eslint-disable prettier/prettier */
import { View } from "react-native";
import { TextWhite } from "../../App.styles";
import { InputWhite, PressableButton } from "./Create.styles";
import { ActivityIndicator, MD2Colors } from "react-native-paper";
import React from "react";

export function Edit({ task, closeModal, changeTask}: {task: any, closeModal: any, changeTask: any}) {
    const [loading, setLoading] = React.useState(false);

    const [taskTitle, setTasterTitle] = React.useState(task.title);
    const [taskDescription, setTaskDescription] = React.useState(task.description);
    function edit(){
        setLoading(true);
        setLoading(false);
        changeTask({taskTitle,taskDescription});
        closeModal();
    }
    return (
        <View>
          <TextWhite>Título</TextWhite>
          <InputWhite value={taskTitle} onChangeText={ value => setTasterTitle( value)}/>

          <TextWhite>Descrição</TextWhite>
          <InputWhite value={taskDescription} onChangeText={ value => setTaskDescription(value) }/>

           <PressableButton disabled={loading} onPress={() => edit()}>
              {
                !loading ?
                  <TextWhite>Editar</TextWhite>
                  :
                  <ActivityIndicator size="large" animating={true} color={MD2Colors.red800} />
              }
           </PressableButton>
        </View>
    );    
}