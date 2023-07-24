/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Keyboard } from 'react-native';
import { PressableButton } from './Create.styles';
import { InputWhite, Text } from '../../App.styles';
import { ActivityIndicator, MD2Colors } from 'react-native-paper';
import Toast from 'react-native-toast-message';
import { createTask } from './Task';

export default function Create({ closeModal }: {closeModal: any}) {
    const [title, setTitle] = React.useState('');
    const [description, setDescription] = React.useState('');
    const [loading, setLoading] = React.useState(false);

    function hideModal(){
      closeModal();
    }

    async function create(){
      Keyboard.dismiss();
      if ( title && description ){
        try {
          setLoading(true);
          createTask(title, description).then(() => {
              Toast.show({
                type: 'success',
                text1: 'Sucesso!',
                text2: 'Tarefa criada com sucesso!',
              });
              hideModal();
          }).catch((errorCreate) => {
              console.log('erro ao cadastrar: ', errorCreate);
          });
        } catch ( error: any) {
            Toast.show({
              type: 'error',
              text2: 'Erro no cadastro, tente novamente',
            });
        } finally {
            setLoading(false);
        }
      }
    }

    return (
        <View>
          <Text color="white">Título</Text>
          <InputWhite width="100%" onChangeText={ (value: string) => setTitle(value)}/>

          <Text color="white">Descrição</Text>
          <InputWhite width="100%" onChangeText={ (value: string) => setDescription(value)}/>

          {
            title.length > 0 && description.length > 0 &&
            <PressableButton disabled={loading} onPress={() => create()}>
              {
                !loading ?
                  <Text color="white">CADASTRAR</Text>
                  :
                  <ActivityIndicator size="large" animating={true} color={MD2Colors.red800} />
              }
            </PressableButton>
          }

        </View>
    );
}
