import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Icon from 'react-native-vector-icons/FontAwesome';
import Home from "./components/Home";
import Start from "./components/Start";
import Welcome from "./components/Welcome";
import Signin from "./components/signin";
import Signup from "./components/signup";
import Dashboard from "./components/Dashboard";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
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
          component={Signup}
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
          component={Dashboard}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
