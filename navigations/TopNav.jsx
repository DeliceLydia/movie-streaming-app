import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Featured from "../Types/Features";
import Series from "../Types/Series";
import Dashboard from "../components/Dashboard";

const Tab = createMaterialTopTabNavigator();

const TopNav = () =>{
  return (
    <Tab.Navigator
      initialRouteName="Featured"
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
        tabBarLabelStyle: { fontSize: 12 }
      }}
    >
      <Tab.Screen
        name="Featured"
        component={Featured}
        options={{ tabBarLabel: 'Home' }}
      />
      <Tab.Screen
        name="Series"
        component={Series}
        options={{ tabBarLabel: 'Series' }}
      />
    </Tab.Navigator>
  );
}

export default TopNav;
