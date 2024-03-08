import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Icon from "react-native-vector-icons/FontAwesome";
import Home from "./components/Home";
import Start from "./components/Start";
import Welcome from "./components/Welcome";
import Signin from "./components/signin";
import Register from "./components/Register";
import Action from "./components/Action";
import BottomTabNavigator from "./navigations/BottomNav";
import { ThemeProviderIntoDarkMode } from "./context/themeContext";

const Stack = createNativeStackNavigator();

const MyTab = () => {
  return (
    <Stack.Navigator initialRouteName="Dashboard">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="start"
        component={Start}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="welcome"
        component={Welcome}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Action"
        component={Action}
        options={{
          headerStyle: { backgroundColor: "#25272a" },
          headerTitleStyle: { color: "white" },
        }}
      />
      <Stack.Screen
        name="Signin"
        component={Signin}
        options={{
          headerStyle: { backgroundColor: "#26282c" },
          headerTitleStyle: { color: "white" },
          headerLeft: () => (
            <Icon
              name="arrow-left"
              size={20}
              color="#bda437"
              style={{ marginLeft: 10, marginRight: 10 }}
            />
          ),
        }}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{
          headerStyle: { backgroundColor: "#26282c" },
          headerTitleStyle: { color: "white" },
          headerLeft: () => (
            <Icon
              name="arrow-left"
              size={20}
              color="#bda437"
              style={{ marginLeft: 10, marginRight: 10 }}
            />
          ),
        }}
      />
      <Stack.Screen
        name="Dashboard"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <ThemeProviderIntoDarkMode>
      <NavigationContainer>
        <MyTab />
      </NavigationContainer>
    </ThemeProviderIntoDarkMode>
  );
};

export default App;
