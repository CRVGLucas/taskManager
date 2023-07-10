/* eslint-disable prettier/prettier */
import React from "react";
import { TextWhite, ViewColumn, ViewRow } from "../App.styles";
import { CardContainer } from "./Card.styles";
import { Checkbox } from 'react-native-paper';
export function Card({ task, changeStatus }: { task: any, changeStatus: any}) {
    const [date, setDate] = React.useState(new Date())

    React.useEffect(() => {
        setDate(new Date((task.createdAt.seconds) * 1000))
        console.log('data: ', date)
        console.log("horas: ", date.setSeconds(task.createdAt.nanoseconds))
    }, [])

    //console.log('tarefa: ',task);
    //
    function handleStatus(){
        changeStatus(task);
    }
    return (
        <CardContainer>

            <TextWhite>{ date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear() }</TextWhite>

            <ViewRow>
                <TextWhite>{ task.title }</TextWhite>
                <ViewRow>
                    <TextWhite>{ task.done ? 'Completo' : 'Incompleto'}</TextWhite>
                    <Checkbox status={ task.done ? 'checked' : 'unchecked'} uncheckedColor="red" color="green" onPress={() => handleStatus()}/>
                </ViewRow>
            </ViewRow>
            <TextWhite>{ task.description }</TextWhite>
        </CardContainer>
    )
}