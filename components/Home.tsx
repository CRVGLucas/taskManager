/* eslint-disable prettier/prettier */
import React from 'react';
import { BigText, Container, LoadingConainer, RoundButton, TextBlack, TextWhite } from '../App.styles';
import { Card } from './Card';
import { collection, getDocs } from 'firebase/firestore/lite';
import { db } from '../firebase/config';
import { ViewBottom } from './Home.styles';
import { ActivityIndicator, MD2Colors, Modal } from 'react-native-paper';
import { View } from 'react-native'
import Create from './tasks/Create';
import { Loading } from './Loading';
export function Home() {

    const [tasks, setTasks]: any[] = React.useState([])
    const [visibleModal, setVisibleModal] = React.useState(false);
    const [loading, setLoading] = React.useState(true)

    const showModal = () => setVisibleModal(true);
    const hideModal = () => setVisibleModal(false);

    const containerStyle = {backgroundColor: '#363636', padding: 20, margin: 20};

    async function getTasks(){
        setLoading(true)
        try{
            const tasksCol = collection(db, 'tasks');
            const tasksSnapshot = await getDocs(tasksCol);
            const tasksList: any = tasksSnapshot.docs.map(task => task.data());
            setTasks([...tasksList])
            console.log('O que vem aqui: ', tasksList);
        } catch ( error: any) {
            console.log('Deu erro: ', error);
        } finally {
            setLoading(false);
        }
    }

    function reloadTasks() {
        console.log('reload');
        getTasks();
    }

    function changeTaskStatus( task :  any ) {
        console.log('task: ', task);
        var tasksList: any[] = [];
        tasks.filter((taskList: any) => {
                if(taskList.title == task.title) {
                    taskList.done = !taskList.done
                }
                tasksList.push(taskList);
            }
        );
        //console.log(tasksList)
        setTasks(tasksList);
    }

    React.useEffect(() => {
        getTasks();
    }, []);

    return (
        <View>
            { loading && <Loading/> }
            <Container>
                {
                    tasks.map((task: any, indice: any) => {
                        return (
                            <Card task={task} key={indice} changeStatus={changeTaskStatus}/>
                        );
                    })
                }
                {
                    !visibleModal &&
                    <ViewBottom>
                        <RoundButton onPress={reloadTasks} >
                            <TextBlack>Reload</TextBlack>
                        </RoundButton>
                        <RoundButton onPress={showModal}>
                            <TextBlack>ADD</TextBlack>
                        </RoundButton>
                    </ViewBottom>
                }
                <Modal visible={visibleModal} dismissableBackButton={true} onDismiss={hideModal} contentContainerStyle={containerStyle}>
                    <Create/>
                </Modal>
            </Container>
        </View>
    );
}
