import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../screens/LoginScreen";
import DrawerNavigator from "./DrawerNavigator";

const Stack = createStackNavigator();
const StackNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            {/* <Stack.Screen component={LoginScreen} name="LoginScreen" /> */}
            <Stack.Screen component={DrawerNavigator} name="DrawerNavigator" />
        </Stack.Navigator>
    );
};
export default StackNavigator;
