/* eslint-disable prettier/prettier */
import { TextWhite } from "../App.styles";
import { CardContainer } from "./Card.styles";
export function Card({ task }: { task: any}) {
    console.log('tarefa: ',task);
    return (
        <CardContainer>
            <TextWhite>{ task.title }</TextWhite>
            <TextWhite>{ task.description }</TextWhite>
        </CardContainer>
    )
}