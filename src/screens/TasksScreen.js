import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-paper";
import { createTask } from "../firebase/createTask";
import { useEffect, useState } from "react";
import { getTasks } from "../firebase/getTasks";
const TasksScreen = () => {
    const [tasks, setTasks] = useState([]);

    const getHandler = async () => {
        const tasks = await getTasks();
        console.log(tasks);
    };

    const handler = async () => {
        const res = await createTask({
            title: "test title",
            description: "test desc",
        });
        console.log(res);
    };
    return (
        <View>
            <Text>TasksScreen</Text>
            <Button onPress={handler}>Click Here</Button>
            <Button onPress={getHandler}>Get</Button>
        </View>
    );
};
export default TasksScreen;
const styles = StyleSheet.create({});
