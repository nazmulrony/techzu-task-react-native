import {
    Timestamp,
    addDoc,
    collection,
    doc,
    getDocs,
    orderBy,
    query,
    updateDoc,
    where,
} from "firebase/firestore";
import { db } from "../../firebase.config";

const taskCollection = collection(db, "tasks");

export async function getTasks(uid) {
    const q = await query(
        taskCollection,
        where("uid", "==", uid)
        //OrderBy query wasn't working for me. So I sorted the task in client side
        // orderBy("createdAt")

        // orderBy("createdAt", "desc")
    );
    const tasksSnapshot = await getDocs(q);
    const tasks = tasksSnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
    }));
    return tasks.sort((a, b) => b.createdAt - a.createdAt);
    // return tasks;
}

export async function addTaskRequest(data) {
    const taskData = {
        // createdAt: Timestamp.now(),
        createdAt: new Date(),
        ...data,
    };
    return await addDoc(taskCollection, taskData);
}

export async function updateTask(taskId) {
    const taskRef = doc(taskCollection, taskId);
    await updateDoc(taskRef, { isCompleted: true });
}
