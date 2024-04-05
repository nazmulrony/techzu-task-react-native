import { FlatList, RefreshControl, StyleSheet, Text } from "react-native";
import ListEmptyComponent from "../components/ListEmptyComponent";
import { useGetTasks } from "../services/queries";

const HomeScreen = () => {
    const { data, isPending, isFetching, refetch } = useGetTasks();
    return (
        <FlatList
            style={styles.screen}
            showsVerticalScrollIndicator={false}
            data={data}
            ListEmptyComponent={
                <ListEmptyComponent
                    isLoading={isPending}
                    text={"No task created!"}
                />
            }
            refreshControl={
                <RefreshControl
                    refreshing={isFetching}
                    onRefresh={refetch}
                    colors={["#663399"]}
                />
            }
            keyExtractor={(item) => item?.id}
            renderItem={({ item }) => (
                <Text style={styles.listItem}>{item?.title}</Text>
            )}
        />
    );
};
export default HomeScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 16,
    },
    listItem: {
        fontSize: 16,
        fontWeight: "500",
        marginBottom: 10,
        backgroundColor: "#ffffff",
        paddingVertical: 4,
        paddingHorizontal: 8,
        borderRadius: 4,
    },
});
