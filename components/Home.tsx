/* eslint-disable prettier/prettier */
import React from 'react';
import { Container, InputWhite, Text, ViewFlex, gray } from '../App.styles';
import { Card } from './Card';
import { ButtonGray, ViewContainer} from './Home.styles';
import { Modal } from 'react-native-paper';
import { View, Keyboard, ScrollView } from 'react-native';
import Create from './tasks/Create';
import { Loading } from './Loading';
import { changeStatus, deleteTask, editTask, filterByStatus, getTasks, searchTasks } from './tasks/Task';
import { Edit } from './tasks/Edit';
import { ArrowClockwise, MagnifyingGlass, Plus } from 'phosphor-react-native';
import SelectDropdown from 'react-native-select-dropdown';
import { PressableWhite } from './tasks/Create.styles';
import { Toast } from 'react-native-toast-message/lib/src/Toast';

export function Home() {
    const options = ['Todos', 'Incompleto', 'Completo'];
    const [tasks, setTasks]: any[] = React.useState([]);
    const [taskSelect, setTaskSelect]: any[] = React.useState();
    const [idTaskSelect, setIdTaskSelect] = React.useState('');
    const [visibleModal, setVisibleModal] = React.useState(false);
    const [visibleModalEditor, setVisibleModalEditor] = React.useState(false);
    const [loading, setLoading] = React.useState(true);
    const [taskSearch, setTaskSearch] = React.useState('');
    const containerStyle = {backgroundColor: '#363636', padding: 20, margin: 20};

    const showModal = () => setVisibleModal(true);
    const hideModal = () => setVisibleModal(false);


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


    function initModalEditor(task: any, id: any){
        setVisibleModalEditor(true);
        setTaskSelect(task);
        setIdTaskSelect(id);
    }

    function destroyModalEditor(){
        setVisibleModalEditor(false);
        setTaskSelect('');
        setIdTaskSelect('');
    }

    async function filterTask(status: string){
        const taskFilter = await filterByStatus(status);
        setTasks(taskFilter);
    }

    async function filterByText(text: string){
        Keyboard.dismiss();
        setTasks(await searchTasks(text));
    }

    async function changeTaskStatus( task :  any, id: any ) {
        changeStatus(task, id).then(() => {
            Toast.show({
                type: 'success',
                text1: 'Parabéns',
                text2: 'Tarefa concluida com sucesso!',
            });
            initTasks();
        });
    }

    async function removeTask(task: any, id: any){
        deleteTask(task, id).then(() => {
            Toast.show({
                type: 'success',
                text2: 'Tarefa deletada com sucesso.'
            });
            initTasks();
        }).catch((error) => {
            Toast.show({
                type: 'danger',
                text1: 'Atualizado!',
                text2: 'Atualização de status da tarefa concluida com sucesso!'
            });
            console.log('deu erro: ', error);
        });
    }

    React.useEffect(() => {
        initTasks();
    }, []);

    return (
        <View style={{ flex: 1}}>
            <ViewContainer contentContainerStyle={{ flexGrow: 1 }}>
                { loading && <Loading/> }
                <Container>
                    {
                        !visibleModal &&
                        <View>
                            <Text color="white">Filtrar por:</Text>
                            <SelectDropdown data={options} defaultValue="Todos" onSelect={filterTask} buttonStyle={{ width: '100%', backgroundColor: gray}} buttonTextStyle={{ color: 'white'}} dropdownStyle={{ width: '100%'}}/>
                        </View>
                    }
                    <Toast />
                    {
                        !visibleModal &&
                        <ViewFlex direction="row" justify="space-between">
                            <InputWhite width="80%"  placeholder="Buscar por..." onChangeText={(value: any) => setTaskSearch(value)}/>
                            <ButtonGray onPress={() => filterByText(taskSearch)}>
                                <MagnifyingGlass color="white"/>
                            </ButtonGray>
                        </ViewFlex>
                    }

                    {
                        !visibleModal &&
                        <ViewFlex direction="row" justify="space-around">
                            <ViewFlex direction="column" justify="center">
                                <Text color='white'>Recarregar</Text>
                                <PressableWhite  onPress={initTasks} >
                                    <ArrowClockwise color="white"/>
                                </PressableWhite>
                            </ViewFlex>

                            <ViewFlex direction="column" justify="center">
                                <Text color='white'>Nova Tarefa</Text>
                                <PressableWhite onPress={showModal}>
                                    <Plus color="white"/>
                                </PressableWhite>
                            </ViewFlex>

                        </ViewFlex>
                    }

                    {
                        !visibleModal && tasks.map((task: any) => {
                            return (
                                <Card task={task.data} id={task.idDocument} key={task.idDocument} callModal={initModalEditor} deleteFunction={removeTask} changeStatus={changeTaskStatus}/>
                            );
                        })
                    }


                    <Modal visible={visibleModal} dismissableBackButton={true} onDismiss={hideModal} contentContainerStyle={containerStyle}>
                        <Create closeModal={hideModal} />
                    </Modal>
                    <Modal visible={visibleModalEditor} dismissableBackButton={true} onDismiss={destroyModalEditor} contentContainerStyle={containerStyle}>
                        <Edit task={taskSelect} id={idTaskSelect} closeModal={destroyModalEditor} />
                    </Modal>

                </Container>
            </ViewContainer>
        </View>

    );
}
