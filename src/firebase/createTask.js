import { Timestamp, addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase.config";

const taskCollection = collection(db, "tasks");

export async function createTask(data) {
    const taskData = {
        createdAt: Timestamp.now(),
        isCompleted: false,
        ...data,
    };
    return await addDoc(taskCollection, taskData);
}
