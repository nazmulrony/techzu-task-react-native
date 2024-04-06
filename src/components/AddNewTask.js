import { useContext, useRef } from "react";
import { Controller, useForm } from "react-hook-form";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-paper";
import { colors } from "../../styles";
import { useAddTask } from "../services/mutations";
import { UserContext } from "../utils/UserProvider";
import InputField from "./InputField";

const AddNewTask = () => {
    const { user } = useContext(UserContext);
    const inputRef = useRef();

    const {
        control,
        handleSubmit,
        reset,
        formState: { errors },
        getValues,
    } = useForm();

    const { mutateAsync: addTask, isPending, error, isError } = useAddTask();

    console.log(getValues());

    // Add task handler
    const handleAddTask = async (values) => {
        inputRef?.current?.blur();
        const res = await addTask({
            uid: user?.uid,
            isCompleted: false,
            ...values,
        });

        if (res.type === "document") {
            reset({ title: "" });
        }
    };

    return (
        <View style={styles.container}>
            <Controller
                name="title"
                control={control}
                rules={{
                    required: "Title is required",
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <InputField
                        label="Title"
                        error={errors?.title?.message}
                        value={value}
                        onChangeText={(value) => onChange(value)}
                        inputConfig={{
                            ref: inputRef,
                        }}
                    />
                )}
            />
            {isError ? (
                <Text style={styles.errorText}>{error?.message}</Text>
            ) : null}
            <Button
                mode="contained"
                loading={isPending}
                onPress={handleSubmit(handleAddTask)}
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
