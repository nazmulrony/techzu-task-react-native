import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { colors } from "../../styles";

const TaskCount = ({ data }) => {
    const [completeTaskCount, setCompleteTaskCount] = useState(0);
    const [incompleteTaskCount, setIncompleteTaskCount] = useState(0);

    useEffect(() => {
        if (data) {
            const completed = data.filter((task) => task.isCompleted).length;
            const incomplete = data.length - completed;
            setCompleteTaskCount(completed);
            setIncompleteTaskCount(incomplete);
        }
    }, [data]);

    return (
        <View style={styles.container}>
            <Text style={{ color: colors.success500, fontWeight: "600" }}>
                Completed Tasks: {completeTaskCount}
            </Text>
            <Text style={{ color: colors.error500, fontWeight: "600" }}>
                Incomplete Tasks: {incompleteTaskCount}
            </Text>
        </View>
    );
};
export default TaskCount;
const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        borderRadius: 8,
        padding: 8,
        paddingHorizontal: 8,
        marginBottom: 10,
        flexDirection: "row",
        justifyContent: "space-between",
    },
});
