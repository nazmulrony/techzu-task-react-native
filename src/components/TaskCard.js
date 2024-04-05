import { StyleSheet, Text, View } from "react-native";
import { colors } from "../../styles";
import { Button } from "react-native-paper";
import { useDeleteTask, useUpdateTask } from "../services/mutations";
import dayjs from "dayjs";
import { getMilliseconds } from "../utils/getMilliSeconds";

const TaskCard = ({ task }) => {
    const { mutateAsync: updateTask, isPending } = useUpdateTask();
    const { mutateAsync: deleteTask, isPending: isDeleting } = useDeleteTask();

    return (
        <View style={styles.container}>
            <View style={{ flex: 1, gap: 8 }}>
                <Text style={styles.title}>{task?.title}</Text>
                <View style={{ gap: 4 }}>
                    <View
                        style={[
                            styles.status,
                            task?.isCompleted && {
                                backgroundColor: colors.success50,
                            },
                        ]}
                    >
                        <Text
                            style={[
                                styles.statusText,
                                task?.isCompleted && {
                                    color: colors.success500,
                                },
                            ]}
                        >
                            {task.isCompleted ? "Completed" : "Incomplete"}
                        </Text>
                    </View>
                    <Text style={{ fontSize: 12 }}>
                        Created At:{" "}
                        {dayjs(getMilliseconds(task?.createdAt)).format(
                            "MMMM D, YYYY"
                        )}
                    </Text>
                </View>
            </View>
            <View style={{ gap: 4 }}>
                <Button
                    mode="contained"
                    loading={isPending}
                    disabled={isPending || task?.isCompleted}
                    onPress={async () => await updateTask(task?.id)}
                    compact
                    labelStyle={{
                        marginVertical: 4,
                    }}
                >
                    Complete
                </Button>
                <Button
                    mode="contained"
                    loading={isDeleting}
                    disabled={isDeleting}
                    onPress={async () => await deleteTask(task?.id)}
                    buttonColor={colors.error500}
                    compact
                    labelStyle={{
                        marginVertical: 4,
                    }}
                >
                    Delete
                </Button>
            </View>
        </View>
    );
};
export default TaskCard;
const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: colors.primary500,
        padding: 10,
        marginBottom: 10,
        borderRadius: 8,
        flexDirection: "row",
        justifyContent: "space-between",
        gap: 8,
    },
    title: {
        fontSize: 14,
        fontWeight: "500",
    },
    status: {
        backgroundColor: colors.error50,
        paddingHorizontal: 6,
        paddingVertical: 4,
        borderRadius: 8,
        width: 80,
    },
    statusText: {
        textAlign: "center",
        color: colors.error500,
        fontSize: 12,
    },
});
