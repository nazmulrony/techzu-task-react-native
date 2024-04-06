import { Entypo, FontAwesome5, Ionicons } from "@expo/vector-icons";
import { createDrawerNavigator } from "@react-navigation/drawer";
import AppBar from "../components/AppBar";
import HomeScreen from "../screens/HomeScreen";
import SettingsScreen from "../screens/SettingsScreen";
import TasksScreen from "../screens/TasksScreen";
import { useContext, useEffect } from "react";
import { UserContext } from "../utils/UserProvider";
import { useGetUserByEmail } from "../services/queries";

const Drawer = createDrawerNavigator();
const DrawerNavigator = () => {
    const { user, setUserDetails } = useContext(UserContext);

    //fetching user name and photo and saving it state
    const { data, isSuccess } = useGetUserByEmail(user?.email);

    useEffect(() => {
        if (isSuccess) {
            setUserDetails(data);
        } else {
            setUserDetails(null);
        }
    }, [isSuccess]);
    return (
        <Drawer.Navigator
            screenOptions={{
                drawerActiveTintColor: "#663399",
                headerRight: () => <AppBar />,

                headerStyle: {
                    height: 100,
                },
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
