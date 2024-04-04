import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "../screens/HomeScreen";
import SettingsScreen from "../screens/SettingsScreen";
import TasksScreen from "../screens/TasksScreen";

const Drawer = createDrawerNavigator();
const DrawerNavigator = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen component={HomeScreen} name="HomeScreen" />
            <Drawer.Screen component={TasksScreen} name="TasksScreen" />
            <Drawer.Screen component={SettingsScreen} name="SettingsScreen" />
        </Drawer.Navigator>
    );
};
export default DrawerNavigator;
