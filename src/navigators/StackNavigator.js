import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../screens/LoginScreen";
import SignupScreen from "../screens/SignupScreen";
import DrawerNavigator from "./DrawerNavigator";
import { useContext } from "react";
import { UserContext } from "../utils/UserProvider";

const Stack = createStackNavigator();

const StackNavigator = () => {
    const { user } = useContext(UserContext);
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            {user?.email ? (
                <Stack.Screen
                    component={DrawerNavigator}
                    name="DrawerNavigator"
                />
            ) : (
                <>
                    <Stack.Screen component={LoginScreen} name="Login" />
                    <Stack.Screen component={SignupScreen} name="Signup" />
                </>
            )}
        </Stack.Navigator>
    );
};
export default StackNavigator;
