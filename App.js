import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import AntDesign from "react-native-vector-icons/AntDesign";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Icon from 'react-native-vector-icons/FontAwesome';
import Home from "./components/Home";
import Start from "./components/Start";
import Welcome from "./components/Welcome";
import Signin from "./components/signin";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import MovieSearch from "./components/MovieSearch";
import Profile from "./components/Profile";
import MyList from "./components/MyList";
import Action from "./components/Action";

const Stack = createNativeStackNavigator();
const Tab= createBottomTabNavigator()

const MyTab = () => {
  return (
      <Stack.Navigator initialRouteName="Dashboard">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
         {/* <Stack.Screen
          name="Search"
          component={Search}
          options={{ headerShown: false }}
        /> */}
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
          component={BottomTabNavigator
          }
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
  );
};


const BottomTabNavigator = ()=> {
  return (
    <Tab.Navigator screenOptions={{tabBarLabel:'', tabBarActiveTintColor:'#F2B916', tabBarInactiveTintColor:'#F2B916',
    tabBarStyle:{
      backgroundColor:'#26282C', height:60, paddingTop:15, borderTopColor:'#26282C'
    },
  // tabBarActiveBackgroundColor:'#F2B916',
    }} >
      <Tab.Screen name='Home' component={Dashboard} options={{headerShown:false, tabBarIcon:()=><AntDesign name='home' type='font-awesome' color={'#F2B916'} size={30}/>}}/>
      <Tab.Screen name='MovieSearch' component={MovieSearch} options={{headerShown:false, tabBarIcon:()=><EvilIcons name='search' type='font-awesome' color={'white'} size={30}/>}}/>
      <Tab.Screen name='List' component={MyList} options={{headerShown:false, tabBarIcon:()=><FontAwesome name='folder-o' type='material-community' color={'white'} size={30}/>}}/>
      <Tab.Screen name='Profile' component={Profile} options={{headerShown:false, tabBarIcon:()=><AntDesign name='appstore-o' type='material-community' color={'white'} size={30}/>}}/>
    </Tab.Navigator>
  );
}

const App =  () => {
  return(
    <NavigationContainer>
      <MyTab />
    </NavigationContainer>
  )
}

export default App;
