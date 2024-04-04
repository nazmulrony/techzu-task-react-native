import { useContext, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, TextInput } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { UserContext } from "../utils/UserProvider";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { app } from "../../firebase.config";

const SignupScreen = () => {
    const { user, setUser } = useContext(UserContext);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSignup = async () => {
        try {
            const auth = getAuth(app);
            const res = await createUserWithEmailAndPassword(
                auth,
                email,
                password
            );
            setUser(res.user);
        } catch (error) {}
    };
    return (
        <SafeAreaView style={styles.screen}>
            <Text style={styles.signupText}>Sign up</Text>
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
                <Button mode="contained" onPress={handleSignup}>
                    Sign in
                </Button>
            </View>
            <View style={styles.login}>
                <Text>Already have an account?</Text>
                <Text style={styles.loginText}>login</Text>
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
        color: "blue",
    },
});
