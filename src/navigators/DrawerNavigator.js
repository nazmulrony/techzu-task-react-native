import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "../screens/HomeScreen";
import SettingsScreen from "../screens/SettingsScreen";
import TasksScreen from "../screens/TasksScreen";

const Drawer = createDrawerNavigator();
const DrawerNavigator = () => {
    return (
        <Drawer.Navigator
            screenOptions={{
                drawerActiveTintColor: "#663399",
            }}
        >
            <Drawer.Screen component={HomeScreen} name="Home" />
            <Drawer.Screen component={TasksScreen} name="Tasks" />
            <Drawer.Screen component={SettingsScreen} name="Settings" />
        </Drawer.Navigator>
    );
};
export default DrawerNavigator;
