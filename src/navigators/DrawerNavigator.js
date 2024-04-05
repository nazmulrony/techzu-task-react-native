import { Entypo, FontAwesome5, Ionicons } from "@expo/vector-icons";
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
            <Drawer.Screen
                component={HomeScreen}
                name="Home"
                options={{
                    drawerIcon: ({ size, color }) => (
                        <Entypo name="home" size={size} color={color} />
                    ),
                }}
            />
            <Drawer.Screen
                component={TasksScreen}
                name="Tasks"
                options={{
                    drawerIcon: ({ size, color }) => (
                        <FontAwesome5 name="tasks" size={size} color={color} />
                    ),
                }}
            />
            <Drawer.Screen
                component={SettingsScreen}
                name="Settings"
                options={{
                    drawerIcon: ({ size, color }) => (
                        <Ionicons
                            name="settings-sharp"
                            size={size}
                            color={color}
                        />
                    ),
                }}
            />
        </Drawer.Navigator>
    );
};
export default DrawerNavigator;
