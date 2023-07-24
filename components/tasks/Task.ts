/* eslint-disable prettier/prettier */
import {addDoc, collection, deleteDoc, doc, endAt, getDoc, getDocs, orderBy, query, startAt, updateDoc, where } from "firebase/firestore/lite";
import { db } from "../../firebase/config";
import { Toast } from "react-native-toast-message/lib/src/Toast";

export async function getTasks() {
    const tasksCol = collection(db, 'tasks');
    const queryTasks = query(tasksCol);
    const querySnapshot = await getDocs(queryTasks);
    var tasksList: any = [];
    querySnapshot.forEach(doc => tasksList.push( { idDocument: doc.id, data: doc.data() }));
    return tasksList;
}
export async function searchTasks(value: string){
    const tasksCol = collection(db, 'tasks');
    const queryTasks = query(tasksCol, orderBy('createdAt'));
    const querySnapshot = await getDocs(queryTasks);
    var tasksList: any = [];
    querySnapshot.forEach((doc) => {
        tasksList.push( { idDocument: doc.id, data: doc.data() });
    });
    var taskListFiltered = tasksList.filter((task: any) => task.data.title.toLowerCase().includes(value.toLowerCase()) || task.data.description.toLowerCase().includes(value.toLowerCase()));
    return taskListFiltered;
}
export async function filterByStatus(status: string){
    const tasksCol = collection(db, 'tasks');
    var queryTasks: any;
    if (status === 'Completo'){
        queryTasks = query(tasksCol, where('done', '==', true));
    } else if ( status === 'Incompleto') {
        queryTasks = query(tasksCol, where('done', '==', false));
    } else {
        queryTasks = query(tasksCol);
    }
    const querySnapshot = await getDocs(queryTasks);
    var tasksList: any = [];
    querySnapshot.forEach((doc) => {
        tasksList.push( { idDocument: doc.id, data: doc.data() });
    });
    return tasksList;
}
export async function changeStatus( task : object, id: string ) {
    try {
        const docRef = doc(db, 'tasks', id);
        var docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            updateDoc(docRef, { done: !docSnap.data().done}).then(() => {
                Toast.show({
                    type: 'success',
                    text1: 'Atualizado!',
                    text2: 'Atualização de status da tarefa concluida com sucesso!',
                  });
            }).catch((error) => {
                console.log('erro: ', error);
            });
        } else {
            Toast.show({
                type: 'danger',
                text1: 'Erro',
                text2: 'Ocorreu um erro ao tentar atualiar a tarefa, tente novamente.',
              });
        }
    } catch (error) {
        console.log('deu erro: ', error);
    }
}
export async function editTask(task: object, id: string) {
    const docRef = doc(db, 'tasks', id);
    return updateDoc(docRef, task);
}
export async function deleteTask(task: object, id: string) {
    const docRef = doc(db, 'tasks', id);
    var docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        return deleteDoc(docRef);
    }
}
export async function createTask(title: string, description: string) {
    const form = { title: title, description: description, createdAt: new Date(), done: false };
    const tasksCol = collection(db, 'tasks');
    return addDoc(tasksCol, form);
}
