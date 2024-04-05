import { Timestamp, addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase.config";

const taskCollection = collection(db, "tasks");

export async function getTasks() {
    const tasksSnapshot = await getDocs(taskCollection);
    const tasks = tasksSnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
    }));
    return tasks;
}

export async function addTaskRequest(data) {
    const taskData = {
        createdAt: Timestamp.now(),
        isCompleted: false,
        ...data,
    };
    return await addDoc(taskCollection, taskData);
}
