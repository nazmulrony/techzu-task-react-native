import { StyleSheet, Text, View } from "react-native";
import { colors } from "../../styles";
const ErrorMessage = ({ message = "Something went wrong!" }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.message}>{message}</Text>
        </View>
    );
};
export default ErrorMessage;

const styles = StyleSheet.create({
    container: {
        minHeight: 300,
        justifyContent: "center",
    },
    message: {
        color: colors.error500,
        textAlign: "center",
        fontSize: 16,
        fontWeight: "500",
    },
});
