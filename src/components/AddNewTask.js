import { useContext, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, TextInput } from "react-native-paper";
import { useAddTask } from "../services/mutations";
import { colors } from "../../styles";
import { UserContext } from "../utils/UserProvider";

const AddNewTask = () => {
    const { user } = useContext(UserContext);
    const [taskTitle, setTaskTitle] = useState("");
    const { mutateAsync: addTask, isPending, error, isError } = useAddTask();

    const handleAddTask = async () => {
        const res = await addTask({
            title: taskTitle,
            uid: user?.uid,
            isCompleted: false,
        });
        if (res.type === "document") {
            setTaskTitle("");
        }
    };
    return (
        <View style={styles.container}>
            <TextInput
                mode="outlined"
                label="Title"
                value={taskTitle}
                onChangeText={(value) => setTaskTitle(value)}
            />
            {isError ? (
                <Text style={styles.errorText}>{error?.message}</Text>
            ) : null}
            <Button
                mode="contained"
                loading={isPending}
                onPress={handleAddTask}
            >
                Add Task
            </Button>
        </View>
    );
};
export default AddNewTask;
const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        padding: 16,
        borderRadius: 8,
        gap: 8,
    },
    errorText: {
        color: colors.error500,
    },
});
