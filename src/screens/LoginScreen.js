import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, TextInput } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors } from "../../styles";
import { useLogin } from "../services/mutations";

const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    //Login hook using tanStack query
    const { mutateAsync: loginUser, isPending, error, isError } = useLogin();

    const handleLogin = async () => {
        await loginUser({ email, password });
    };
    return (
        <SafeAreaView style={styles.screen}>
            <Text style={styles.loginText}>Login</Text>
            <View style={styles.formContainer}>
                <TextInput
                    mode="outlined"
                    label="Email"
                    keyboardType="email-address"
                    value={email?.toLocaleLowerCase()}
                    onChangeText={(value) => setEmail(value)}
                />
                <TextInput
                    mode="outlined"
                    label="Password"
                    value={password}
                    secureTextEntry
                    onChangeText={(value) => setPassword(value)}
                />
                {isError ? (
                    <Text style={styles.errorText}>{error.message}</Text>
                ) : null}
                <Button
                    mode="contained"
                    onPress={handleLogin}
                    loading={isPending}
                >
                    Login
                </Button>
            </View>
            <View style={styles.signup}>
                <Text>Don't have an account?</Text>
                <Text
                    style={styles.signupText}
                    onPress={() => navigation.navigate("Signup")}
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
        color: colors.primary500,
    },
    errorText: {
        color: colors.error500,
    },
});
