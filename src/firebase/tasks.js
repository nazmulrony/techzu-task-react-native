import {
    Timestamp,
    addDoc,
    collection,
    deleteDoc,
    doc,
    getDocs,
    orderBy,
    query,
    updateDoc,
    where,
} from "firebase/firestore";
import { db } from "../../firebase.config";

const taskCollection = collection(db, "tasks");

export async function getTasksRequest(uid) {
    const q = await query(
        taskCollection,
        where("uid", "==", uid)
        //OrderBy query wasn't working for me even after indexing in fireStore. So I sorted the task in client side
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
        createdAt: Timestamp.now(),
        ...data,
    };
    return await addDoc(taskCollection, taskData);
}

export async function updateTask(taskId) {
    const taskRef = doc(taskCollection, taskId);
    return await updateDoc(taskRef, { isCompleted: true });
}

export async function deleteTask(taskId) {
    const taskRef = doc(taskCollection, taskId);
    return await deleteDoc(taskRef);
}
