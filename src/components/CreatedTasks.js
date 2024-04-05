import { useContext } from "react";
import { FlatList, RefreshControl, StyleSheet } from "react-native";
import { useGetTasks } from "../services/queries";
import { UserContext } from "../utils/UserProvider";
import ListEmptyComponent from "./ListEmptyComponent";
import TaskCard from "./TaskCard";
import TaskCount from "./TaskCount";
const CreatedTasks = () => {
    const { user } = useContext(UserContext);

    const { data, isPending, refetch } = useGetTasks(user?.uid);

    return (
        <FlatList
            style={styles.container}
            showsVerticalScrollIndicator={false}
            data={data}
            ListHeaderComponent={<TaskCount data={data} />}
            ListEmptyComponent={
                <ListEmptyComponent
                    isLoading={isPending}
                    text={"No task created!"}
                />
            }
            refreshControl={
                <RefreshControl
                    refreshing={false}
                    onRefresh={refetch}
                    colors={["#663399"]}
                />
            }
            keyExtractor={(item) => item?.id}
            renderItem={({ item }) => <TaskCard task={item} />}
        />
    );
};
export default CreatedTasks;
const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        padding: 10,
        borderRadius: 8,
        marginTop: 16,
    },
});
