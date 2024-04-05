import { StyleSheet, Text, View } from "react-native";
import { ActivityIndicator } from "react-native-paper";
const ListEmptyComponent = ({ isLoading, containerStyle, text }) => {
    return (
        <View style={[styles.container, containerStyle]}>
            {isLoading ? (
                <ActivityIndicator size={"large"} />
            ) : (
                <Text style={styles.emptyText}>{text}</Text>
            )}
        </View>
    );
};
export default ListEmptyComponent;

const styles = StyleSheet.create({
    container: {
        minHeight: 400,
        justifyContent: "center",
    },
    emptyText: {
        color: "#575757",
        textAlign: "center",
        fontSize: 16,
        fontWeight: "500",
    },
});
