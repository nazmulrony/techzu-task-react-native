import { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Button, TextInput } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSignup } from "../services/mutations";
import { colors } from "../../styles";
import ImagePicker from "../components/ImagePicker";
import { useForm, Controller } from "react-hook-form";
import InputField from "../components/InputField";

const SignupScreen = ({ navigation }) => {
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            name: "",
            email: "",
            password: "",
            photoUrl: "",
        },
    });
    //This signup hook also saves the name and photoUrl into fireStore
    const { mutateAsync: createUser, isPending, error, isError } = useSignup();

    // signup handler.
    const handleSignup = async (values) => {
        await createUser(values);
    };
    return (
        <SafeAreaView style={styles.screen}>
            <ScrollView
                keyboardShouldPersistTaps="handled"
                showsVerticalScrollIndicator={false}
            >
                <Text style={styles.signupText}>Sign up</Text>
                <View style={styles.formContainer}>
                    <Controller
                        name="name"
                        control={control}
                        rules={{
                            required: "Name is required",
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <InputField
                                label="Name"
                                error={errors?.name?.message}
                                value={value}
                                onChangeText={(value) => onChange(value)}
                            />
                        )}
                    />
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
                    <Controller
                        name="photoUrl"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                            <ImagePicker
                                setSelectedImage={(value) => onChange(value)}
                                label="Profile Image"
                            />
                        )}
                    />

                    {isError ? (
                        <Text style={styles.errorText}>{error.message}</Text>
                    ) : null}
                    <Button
                        mode="contained"
                        onPress={handleSubmit(handleSignup)}
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
            </ScrollView>
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
        marginTop: "45%",
    },
    loginText: {
        color: colors.primary500,
    },
    errorText: {
        color: colors.error500,
    },
});
