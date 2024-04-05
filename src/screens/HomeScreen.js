import { FlatList, RefreshControl, StyleSheet, Text } from "react-native";
import ListEmptyComponent from "../components/ListEmptyComponent";
import { useGetTasks } from "../services/queries";
import { colors } from "../../styles";
import { useContext } from "react";
import { UserContext } from "../utils/UserProvider";

const HomeScreen = () => {
    const { user } = useContext(UserContext);

    const { data, isPending, refetch } = useGetTasks(user?.uid);
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
                    refreshing={false}
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
        backgroundColor: colors.background,
    },
    listItem: {
        fontSize: 16,
        fontWeight: "500",
        marginBottom: 10,
        backgroundColor: "#ffffff",
        padding: 8,
        borderRadius: 8,
    },
});
