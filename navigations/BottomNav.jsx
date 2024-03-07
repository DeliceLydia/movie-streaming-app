import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AntDesign from "react-native-vector-icons/AntDesign";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Dashboard from "../components/Dashboard";
import Search from "../components/Search";
import Profile from "../components/Profile";
import MyList from "../components/MyList";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabel: "",
        tabBarActiveTintColor: "#F2B916",
        tabBarInactiveTintColor: "#F2B916",
        tabBarStyle: {
          backgroundColor: "#26282C",
          height: 60,
          paddingTop: 15,
          borderTopColor: "#26282C",
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Dashboard}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <AntDesign
              name="home"
              type="font-awesome"
              color={"#F2B916"}
              size={30}
            />
          ),
        }}
      />
      <Tab.Screen
        name="MovieSearch"
        component={Search}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <EvilIcons
              name="search"
              type="font-awesome"
              color={"white"}
              size={30}
            />
          ),
        }}
      />
      <Tab.Screen
        name="List"
        component={MyList}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <FontAwesome
              name="folder-o"
              type="material-community"
              color={"white"}
              size={30}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: true,
          headerStyle: { backgroundColor: "#202123" },
          headerTitleStyle: { color: "white" },
          tabBarIcon: () => (
            <AntDesign
              name="appstore-o"
              type="material-community"
              color={"white"}
              size={30}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
