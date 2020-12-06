import 'react-native-gesture-handler';
import * as React from 'react';
import { Image } from 'react-native';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../pages/home'
import MapScreen from '../pages/map'
import PengingatScreen from '../pages/pengingat'
import BantuanScreen from '../pages/bantuan'
import LoginScreen from '../pages/login'
import TbparuScreen from '../pages/tbparu'
import KustaScreen from '../pages/kusta'
import HivScreen from '../pages/hiv'
import DiareScreen from '../pages/diare'
import IspaScreen from '../pages/ispa'
import DbdScreen from '../pages/dbd'

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

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
          component={PengingatScreen} 
          options={{
            drawerIcon: ({}) => (
              <Image source={require('../drawable/calendaricon.png')} style={{ width: 25, height: 25}} />
            )
          }} />
        <Drawer.Screen 
          name="Login" 
          component={LoginScreen}
          options={{
            drawerLabel: () => null,
            title: null,
            drawerIcon: () => null
          }} 
        />
        <Drawer.Screen 
          name="Tb Paru" 
          component={TbparuScreen}
          options={{
            drawerLabel: () => null,
            title: null,
            drawerIcon: () => null
          }} 
        />
        <Drawer.Screen 
          name="Kusta" 
          component={KustaScreen}
          options={{
            drawerLabel: () => null,
            title: null,
            drawerIcon: () => null
          }} 
        />
        <Drawer.Screen 
          name="Hiv" 
          component={HivScreen}
          options={{
            drawerLabel: () => null,
            title: null,
            drawerIcon: () => null
          }} 
        />
        <Drawer.Screen 
          name="Diare" 
          component={DiareScreen}
          options={{
            drawerLabel: () => null,
            title: null,
            drawerIcon: () => null
          }} 
        />
        <Drawer.Screen 
          name="Ispa" 
          component={IspaScreen}
          options={{
            drawerLabel: () => null,
            title: null,
            drawerIcon: () => null
          }} 
        />
        <Drawer.Screen 
          name="Dbd" 
          component={DbdScreen}
          options={{
            drawerLabel: () => null,
            title: null,
            drawerIcon: () => null
          }} 
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}