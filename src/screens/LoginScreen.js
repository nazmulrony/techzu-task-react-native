import { useContext, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, TextInput } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { UserContext } from "../utils/UserProvider";

const LoginScreen = ({ navigation }) => {
    const { user, setUser } = useContext(UserContext);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async () => {
        console.log({ email, password });
    };
    return (
        <SafeAreaView style={styles.screen}>
            <Text style={styles.loginText}>Login</Text>
            <View style={styles.formContainer}>
                <TextInput
                    mode="outlined"
                    label="Email"
                    onChangeText={(value) => setEmail(value)}
                />
                <TextInput
                    mode="outlined"
                    label="Password"
                    secureTextEntry
                    onChangeText={(value) => setPassword(value)}
                />
                <Button mode="contained" onPress={handleLogin}>
                    Sign in
                </Button>
            </View>
            <View style={styles.signup}>
                <Text>Don't have an account?</Text>
                <Text
                    style={styles.signupText}
                    onPress={() => navigation.navigate("SignupScreen")}
                >
                    Signup
                </Text>
            </View>
        </SafeAreaView>
    );
};
export default LoginScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: "white",
        paddingHorizontal: 16,
    },
    formContainer: {
        gap: 10,
    },
    signup: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 4,
        marginTop: 16,
    },
    loginText: {
        fontSize: 18,
        fontWeight: "600",
        marginBottom: 10,
        marginTop: "70%",
    },
    signupText: {
        color: "blue",
    },
});
