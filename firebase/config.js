/* eslint-disable prettier/prettier */
import { initializeApp } from 'firebase/app';
import { getFirestore} from 'firebase/firestore/lite';
const firebaseConfig = {
    apiKey: 'AIzaSyDg4hERgtuIErIa8s2SC4B2NGUAN-Zh7uU',
    authDomain: 'taskmanager-9bcfd.firebaseapp.com',
    databaseURL: 'https://taskmanager-9bcfd.firebaseio.com/',
    projectId: 'taskmanager-9bcfd',
    storageBucket: 'taskmanager-9bcfd.appspot.com',
    messagingSenderId: 'XXXXXXX',
    appId: '1:132491308341:android:0566f4f6d05f441a0df07c'
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export {db};

