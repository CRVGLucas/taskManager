/* eslint-disable prettier/prettier */
import { collection, getDocs } from "firebase/firestore/lite";
import { db } from "../../firebase/config";
export async function getTasks() {
    const tasksCol = collection(db, 'tasks');
    const tasksSnapshot = await getDocs(tasksCol);
    const tasksList: any = tasksSnapshot.docs.map(task => task.data());
    return tasksList;
}
export async function changeStatus( task :  any ) {
    console.log('task: ', task);
    var tasksList: any[] = [];
    var taskFilter = await getTasks();
    taskFilter.filter((taskList: any) => {
            if (taskList.title === task.title) {
                taskList.done = !taskList.done;
            }
            tasksList.push(taskList);
        }
    );

    return tasksList;
}
export async function editTask(task: any) {
    console.log("tarefa editada: ", task);
}