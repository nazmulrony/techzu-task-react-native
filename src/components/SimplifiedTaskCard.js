import dayjs from "dayjs";
import { StyleSheet, Text, View } from "react-native";
import { colors } from "../../styles";
import { getMilliseconds } from "../utils/getMilliSeconds";

const SimplifiedTaskCard = ({ task }) => {
    return (
        <View style={styles.container}>
            <View style={{ flex: 1, gap: 8 }}>
                <Text style={styles.title}>{task?.title}</Text>
                <Text style={{ fontSize: 12 }}>
                    Created At:{" "}
                    {dayjs(getMilliseconds(task?.createdAt)).format(
                        "MMMM D, YYYY"
                    )}
                </Text>
            </View>
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
            </View>
        </View>
    );
};
export default SimplifiedTaskCard;
const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: colors.border,
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
