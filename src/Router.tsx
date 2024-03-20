import React from 'react'; 
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Member from './pages/member/Member';
import MemberDetail from './pages/member/MemberDetail';
import MemberUpdate from './pages/member/MemberUpdate';

import Profile from './pages/profile/Profile';
import ProfileEdit from './pages/profile/ProfileEdit';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const MemberStack = () => {
  return(
    <Stack.Navigator>
      <Stack.Screen name="MemberScreen" component={Member}/>
      <Stack.Screen name="MemberDetailScreen" component={MemberDetail}/>
      <Stack.Screen name="MemberUpdateScreen" component={MemberUpdate}/>
    </Stack.Navigator>
  )
}

const ProfileStack = () => {
  return(
    <Stack.Navigator>
      <Stack.Screen name="ProfileScreen" component={Profile}/>
      <Stack.Screen name="ProfileEditScreen" component={ProfileEdit}/>
    </Stack.Navigator>
  )
}

function App() {
return(
  <NavigationContainer>
    <Tab.Navigator initialRouteName='Member'>
      <Tab.Screen name="Profile" component={ProfileStack}></Tab.Screen>
      <Tab.Screen name="Member" component={MemberStack}></Tab.Screen>
    </Tab.Navigator>
  </NavigationContainer>
  )
}

export default App;