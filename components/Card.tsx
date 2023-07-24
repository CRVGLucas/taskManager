/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, ViewFlex, green, light} from '../App.styles';
import {CardContainer} from './Card.styles';
import {Checkbox} from 'react-native-paper';
import {Pressable} from 'react-native';
import { Pencil, Trash } from 'phosphor-react-native';
export function Card({task, id, deleteFunction, changeStatus, callModal}: {task: any, id: any, deleteFunction: any, changeStatus: any, callModal: any}) {
  const date = new Date(task.createdAt.seconds * 1000);
  const showModal = () => callModal(task, id);
  function deleteTask () { deleteFunction(task, id) }
  function handleStatus() { changeStatus(task, id);}

  return (
    <CardContainer>
      <ViewFlex direction="row" justify="space-between">
        <Text color="white">
           {date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear()}
        </Text>
        <ViewFlex direction="row" justify="center">
          <Pressable  onPress={() => deleteTask()}>
            <Trash/>
          </Pressable>

          {
            !task.done &&
            <Pressable onPress={() => showModal()}>
              <Pencil color={light}/>
            </Pressable>
          }

        </ViewFlex>

      </ViewFlex>

      <ViewFlex direction="row" justify="space-between">
        <Text color="white">{task.title}</Text>
        <ViewFlex direction="row" justify="space-between">
          <Text color="white">{task.done ? 'Completo' : 'Incompleto'}</Text>
          <Checkbox
            status={task.done ? 'checked' : 'unchecked'}
            uncheckedColor="red"
            color={green}
            disabled={task.done}
            onPress={() => handleStatus()}
          />
        </ViewFlex>
      </ViewFlex>

      <Text color="white">{task.description}</Text>
    </CardContainer>
  );
}
