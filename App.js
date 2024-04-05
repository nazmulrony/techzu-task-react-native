import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import StackNavigator from "./src/navigators/StackNavigator";
import { PaperProvider } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";
import UserProvider from "./src/utils/UserProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function App() {
    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                refetchOnWindowFocus: false,
            },
        },
    });
    return (
        <SafeAreaProvider>
            <QueryClientProvider client={queryClient}>
                <UserProvider>
                    <PaperProvider>
                        <NavigationContainer style={styles.container}>
                            <StatusBar style="auto" />
                            <StackNavigator />
                        </NavigationContainer>
                    </PaperProvider>
                </UserProvider>
            </QueryClientProvider>
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
