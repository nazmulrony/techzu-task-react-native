import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-paper";
import { createTask } from "../firebase/createTask";
import { useEffect, useState } from "react";
import { useGetTasks } from "../services/queries";
import { useAddTask } from "../services/mutations";
const TasksScreen = () => {
    const { data, isPending } = useGetTasks();
    const { mutateAsync: addTask } = useAddTask();
    const [tasks, setTasks] = useState([]);

    const getHandler = async () => {
        const tasks = await getTasks();
        console.log(tasks);
    };

    const handler = async () => {
        const res = await addTask({
            title: "test title",
            description: "test desc",
        });
        console.log(res);
    };
    if (isPending) {
        return <Text>Loading...</Text>;
    }
    console.log({ data });
    return (
        <View>
            <Text>{JSON.stringify(data)}</Text>
            <Button onPress={handler}>Click Here</Button>
            <Button onPress={getHandler}>Get</Button>
        </View>
    );
};
export default TasksScreen;
const styles = StyleSheet.create({});
