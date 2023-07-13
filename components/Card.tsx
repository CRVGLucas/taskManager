/* eslint-disable prettier/prettier */
import React from 'react';
import {TextWhite, ViewRow} from '../App.styles';
import {CardContainer} from './Card.styles';
import {Checkbox, Modal} from 'react-native-paper';
import {Pressable} from 'react-native';
import { Edit } from './tasks/Edit';
export function Card({task, changeStatus, callModal}: {task: any; changeStatus: any, callModal: any}) {
  const date = new Date(task.createdAt.seconds * 1000);
  const showModal = () => callModal(task);
  

  function handleStatus() {
    changeStatus(task);
  }

  return (
    <CardContainer>
      <ViewRow>
        <TextWhite>
           {date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear()}
        </TextWhite>

        <Pressable onPress={() => showModal()}>
            <TextWhite>Editar</TextWhite>
        </Pressable>
      </ViewRow>

      <ViewRow>
        <TextWhite>{task.title}</TextWhite>
        <ViewRow>
          <TextWhite>{task.done ? 'Completo' : 'Incompleto'}</TextWhite>
          <Checkbox
            status={task.done ? 'checked' : 'unchecked'}
            uncheckedColor="red"
            color="green"
            onPress={() => handleStatus()}
          />
        </ViewRow>
      </ViewRow>
      <TextWhite>{task.description}</TextWhite>

    </CardContainer>
  );
}
