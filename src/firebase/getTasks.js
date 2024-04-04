import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase.config";

const taskCollection = collection(db, "tasks");

export async function getTasks(data) {
    const tasksSnapshot = await getDocs(taskCollection);
    const tasks = tasksSnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
    }));
    return tasks;
}
