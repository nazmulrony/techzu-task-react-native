import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, TextInput } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSignup } from "../services/mutations";
import { colors } from "../../styles";

const SignupScreen = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    //signup hook
    const { mutateAsync: createUser, isPending, error, isError } = useSignup();

    const handleSignup = async () => {
        await createUser({ email, password });
    };
    return (
        <SafeAreaView style={styles.screen}>
            <Text style={styles.signupText}>Sign up</Text>
            <View style={styles.formContainer}>
                <TextInput
                    mode="outlined"
                    label="Email"
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
                    onPress={handleSignup}
                    loading={isPending}
                >
                    Sign up
                </Button>
            </View>
            <View style={styles.login}>
                <Text>Already have an account?</Text>
                <Text
                    onPress={() => navigation.navigate("Login")}
                    style={styles.loginText}
                >
                    login
                </Text>
            </View>
        </SafeAreaView>
    );
};
export default SignupScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: "white",
        paddingHorizontal: 16,
    },
    formContainer: {
        gap: 10,
    },
    login: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 4,
        marginTop: 16,
    },
    signupText: {
        fontSize: 18,
        fontWeight: "600",
        marginBottom: 10,
        marginTop: "70%",
    },
    loginText: {
        color: colors.primary500,
    },
    errorText: {
        color: colors.error500,
    },
});
