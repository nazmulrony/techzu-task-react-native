import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-paper";
import { useAddTask } from "../services/mutations";
import { useGetTasks } from "../services/queries";
import { colors } from "../../styles";
import AddNewTask from "../components/AddNewTask";
import CreatedTasks from "../components/CreatedTasks";

const TasksScreen = () => {
    return (
        <View style={styles.screen}>
            <AddNewTask />
            <CreatedTasks />
        </View>
    );
};
export default TasksScreen;
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        backgroundColor: colors.background,
    },
});
