import { signOut } from "firebase/auth";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-paper";
import { UserContext, auth } from "../utils/UserProvider";
import { useContext } from "react";

const SettingsScreen = () => {
    const { user } = useContext(UserContext);
    console.log({ user });
    return (
        <View>
            <Text>SettingsScreen</Text>
            <Button onPress={() => signOut(auth)}>Logout</Button>
        </View>
    );
};
export default SettingsScreen;
const styles = StyleSheet.create({});
