import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Dashboard from "../screens/Dashboard";
import Profile from "../screens/Profile";
import Help from "../screens/Help";
import Profit from "../screens/Profit";
import speed from "@expo/vector-icons/MaterialCommunityIcons";
import { AntDesign } from "@expo/vector-icons";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const DashboardIcon = ({ focused, color, size }) => (
  <AntDesign name="rightcircleo" size={24} color={color} />
);
const ProfileIcon = ({ focused, color, size }) => (
  <AntDesign name="rightcircleo" size={24} color={color} />
);
const HelpdIcon = ({ focused, color, size }) => (
  <AntDesign name="rightcircleo" size={24} color={color} />
);
const ProfitIcon = ({ focused, color, size }) => (
  <AntDesign name="rightcircleo" size={24} color={color} />
);
const MainDrawer = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="MainDashboard">
          {() => (
            <Drawer.Navigator
              screenOptions={{
                drawerStyle: {
                  backgroundColor: "#FFF", //mudar a cor
                  width: 230, //mudar a largura do sidebar
                },
              }}
            >
              <Drawer.Screen
                name="Dashboard"
                component={Dashboard}
                options={{ drawerIcon: DashboardIcon }}
              />
              <Drawer.Screen
                name="Profile"
                component={Profile}
                options={{ drawerIcon: ProfileIcon }}
              />
              <Drawer.Screen
                name="Notes"
                component={Help}
                options={{ drawerIcon: HelpdIcon }}
              />
              <Drawer.Screen
                name="Profit"
                component={Profit}
                options={{ drawerIcon: ProfitIcon }}
              />
            </Drawer.Navigator>
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default MainDrawer;
