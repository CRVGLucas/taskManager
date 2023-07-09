/* eslint-disable prettier/prettier */
import React from 'react';
import { Container, TextWhite } from '../App.styles';
import { Card } from './Card';
import { collection, getDocs } from 'firebase/firestore/lite';
import { db } from '../firebase/config';
export function Home() {
    const [tasks, setTasks]: any[] = React.useState([])

    async function getTasks(){
        try{
            const tasksCol = collection(db, 'tasks');
            const tasksSnapshot = await getDocs(tasksCol);
            const tasksList: any = tasksSnapshot.docs.map(task => task.data());
            setTasks([...tasksList])
            console.log('O que vem aqui: ', tasksList);
        } catch ( error: any) {
            console.log('Deu erro: ', error);
        }

    }

    React.useEffect(() => {
        getTasks();
    }, []);

    return (
        <Container>
            <TextWhite>Home Page!</TextWhite>
            {
                tasks.map((task: any, indice: any) => {
                    return (
                        <Card task={task} key={indice}/>
                    );
                })
            }
        </Container>
    );
}
