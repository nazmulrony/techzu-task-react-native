import { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Button, TextInput } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors } from "../../styles";
import { useLogin } from "../services/mutations";
import { useForm, Controller } from "react-hook-form";
import InputField from "../components/InputField";

const LoginScreen = ({ navigation }) => {
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            email: "",
            password: "",
        },
    });

    //Login hook using tanStack query
    const { mutateAsync: loginUser, isPending, error, isError } = useLogin();

    // login handler
    const handleLogin = async (values) => {
        console.log(values);
        await loginUser({ email: values.email, password: values.password });
    };
    return (
        <SafeAreaView style={styles.screen}>
            <ScrollView
                keyboardShouldPersistTaps="handled"
                showsVerticalScrollIndicator={false}
            >
                <Text style={styles.loginText}>Login</Text>
                <View style={styles.formContainer}>
                    <Controller
                        name="email"
                        control={control}
                        rules={{
                            required: "Email is required",
                            pattern: {
                                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                message: "Invalid email",
                            },
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <InputField
                                label="Email"
                                error={errors?.email?.message}
                                value={value?.toLocaleLowerCase()}
                                onChangeText={(value) => onChange(value)}
                                inputConfig={{
                                    autoCapitalize: "none",
                                    keyboardType: "email-address",
                                }}
                            />
                        )}
                    />
                    <Controller
                        name="password"
                        control={control}
                        rules={{
                            required: "Password is required",
                        }}
                        render={({ field: { onChange, value } }) => (
                            <InputField
                                label="Password"
                                error={errors?.password?.message}
                                value={value}
                                onChangeText={(value) => onChange(value)}
                                inputConfig={{
                                    secureTextEntry: true,
                                }}
                            />
                        )}
                    />
                    {isError ? (
                        <Text style={styles.errorText}>{error.message}</Text>
                    ) : null}
                    <Button
                        mode="contained"
                        onPress={handleSubmit(handleLogin)}
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
            </ScrollView>
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
