/* eslint-disable prettier/prettier */
import { View } from 'react-native';
import { InputWhite, Text } from '../../App.styles';
import { PressableButton } from './Create.styles';
import React from 'react';
import { editTask } from './Task';
import { Toast } from 'react-native-toast-message/lib/src/Toast';
import { ActivityIndicator, MD2Colors } from 'react-native-paper';

export function Edit({ task, id, closeModal}: {task: any, id: any, closeModal: any}) {
    const [loading, setLoading] = React.useState(false);
    const [taskTitle, setTaskTitle] = React.useState(task.title);
    const [taskDescription, setTaskDescription] = React.useState(task.description);

    function edit(){
      setLoading(true);
      editTask(task, id).then(() => {
          Toast.show({
              type: 'success',
              text1: 'Atualizado!',
              text2: 'Atualização da tarefa concluida com sucesso!',
          });
          closeModal();
      }).catch(() => {
        Toast.show({
            type: 'danger',
            text1: 'Erro',
            text2: 'Ocorreu um erro ao tentar atualiar a tarefa, tente novamente.',
        });
      }).finally(() => {
        setLoading(false);
      });
    }
    return (
        <View>
          <Text color="white">Título</Text>
          <InputWhite width="100%" value={taskTitle} onChangeText={ (value: string) => setTaskTitle( value)}/>

          <Text color="white">Descrição</Text>
          <InputWhite width="100%" value={taskDescription} onChangeText={ (value: string) => setTaskDescription(value) }/>

           <PressableButton disabled={loading} onPress={() => edit()}>
              {
                !loading ?
                <Text color="white">EDITAR</Text>
                    :
                <ActivityIndicator size="large" animating={true} color={MD2Colors.red800} />
              }

           </PressableButton>
        </View>
    );
}
