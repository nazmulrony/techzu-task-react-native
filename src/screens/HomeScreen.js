import { useContext } from "react";
import { FlatList, RefreshControl, StyleSheet, Text, View } from "react-native";
import { colors } from "../../styles";
import ListEmptyComponent from "../components/ListEmptyComponent";
import { useGetTasks } from "../services/queries";
import { UserContext } from "../utils/UserProvider";
import SimplifiedTaskCard from "../components/SimplifiedTaskCard";
import ErrorMessage from "../components/ErrorMessage";

const HomeScreen = () => {
    const { user } = useContext(UserContext);
    const { data, isPending, refetch, error, isError } = useGetTasks(user?.uid);
    return (
        <View style={styles.screen}>
            {isError ? (
                <ErrorMessage message={error.message} />
            ) : (
                <FlatList
                    style={styles.container}
                    showsVerticalScrollIndicator={false}
                    keyboardShouldPersistTaps="handled"
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
                        <SimplifiedTaskCard task={item} />
                    )}
                />
            )}
        </View>
    );
};
export default HomeScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        backgroundColor: colors.background,
    },
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: "#fff",
        borderRadius: 8,
    },
    listItem: {
        fontSize: 16,
        fontWeight: "500",
        marginBottom: 10,
        backgroundColor: colors.background,
        padding: 8,
        borderRadius: 8,
    },
});
