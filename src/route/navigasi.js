import 'react-native-gesture-handler';
import * as React from 'react';
import { Image } from 'react-native';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import HomeScreen from '../pages/home'
import MapScreen from '../pages/map'
// import InfoScreen from '../pages/info'
import BantuanScreen from '../pages/bantuan'
import LoginScreen from '../pages/login'
import DetailpenyakitScreen from '../pages/detailpenyakit'

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      {/* <Avatar size='large' rounded icon={{ name: 'user-circle-o', type: 'font-awesome', size: 80 }} /> */}
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{
            drawerIcon: ({}) => (
              <Image source={require('../drawable/homeicon.png')} style={{ width: 25, height: 25}} />
            )
          }}
        />
        <Drawer.Screen 
        name="Map" 
        component={MapScreen}
        options={{
          drawerIcon: ({}) => (
            <Image source={require('../drawable/mapsicon.png')} style={{ width: 25, height: 25}} />
          )
        }} />
        <Drawer.Screen
         name="Bantuan" 
         component={BantuanScreen}
         options={{
          drawerIcon: ({}) => (
            <Image source={require('../drawable/helphandicon.png')} style={{ width: 25, height: 25}} />
          )
        }}
          />
        <Drawer.Screen 
        name="Pengingat" 
        component={BantuanScreen} 
        options={{
          drawerIcon: ({}) => (
            <Image source={require('../drawable/calendaricon.png')} style={{ width: 25, height: 25}} />
          )
        }} />
        <Drawer.Screen name="Login" component={LoginScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}