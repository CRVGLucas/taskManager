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
import { Icon } from 'react-native-elements'
import { changeStatus, getTasks } from './tasks/Task';
import { Edit } from './tasks/Edit';
export function Home() {

    const [tasks, setTasks]: any[] = React.useState([]);
    const [taskSelect, setTaskSelect]: any[] = React.useState();
    const [visibleModal, setVisibleModal] = React.useState(false);
    const [visibleModalEditor, setVisibleModalEditor] = React.useState(false);
    const [loading, setLoading] = React.useState(true)

    const showModal = () => setVisibleModal(true);
    const hideModal = () => setVisibleModal(false);

    const containerStyle = {backgroundColor: '#363636', padding: 20, margin: 20};

    async function initTasks(){
        setLoading(true);
        try {
            var listTasks = await getTasks();
            setTasks([...listTasks]);
        } catch ( error: any) {
            console.log('Deu erro: ', error);
        } finally {
            setLoading(false);
        }
    }

    async function updateTask(task: any){
        console.log("tarefa atualizada: ", task);
    }

    function initModalEditor(task: any){
        setVisibleModalEditor(true);
        setTaskSelect(task);
    }

    function destroyModalEditor(){
        setVisibleModalEditor(false);
        //setTaskSelect();
    }

    async function changeTaskStatus( task :  any ) {
        console.log('task: ', task);
        var tasksList = await changeStatus(task);
        setTasks(tasksList);
    }

    React.useEffect(() => {
        initTasks();
    }, []);

    return (
        <View>
            { loading && <Loading/> }
            <Container>
                {
                    !visibleModal && tasks.map((task: any, indice: any) => {
                        return (
                            <Card task={task} key={indice} callModal={initModalEditor} changeStatus={changeTaskStatus}/>
                        );
                    })
                }
                {
                    !visibleModal &&
                    <ViewBottom>
                        <RoundButton onPress={initTasks} >
                            <TextBlack>Reload</TextBlack>
                        </RoundButton>
                        <RoundButton onPress={showModal}>
                            <TextBlack>+</TextBlack>
                        </RoundButton>
                    </ViewBottom>
                }
                <Modal visible={visibleModal} dismissableBackButton={true} onDismiss={hideModal} contentContainerStyle={containerStyle}>
                    <Create closeModal={hideModal}/>
                </Modal>
                <Modal visible={visibleModalEditor} dismissableBackButton={true} onDismiss={hideModal} contentContainerStyle={containerStyle}>
                    <Edit task={taskSelect} closeModal={destroyModalEditor} changeTask={updateTask}/>
                </Modal>

            </Container>
        </View>
    );
}
