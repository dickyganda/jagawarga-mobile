import * as React from 'react';
import { Image, View, TouchableOpacity } from 'react-native';
import 'react-native-gesture-handler';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import CustomSidebar from '../pages/customSidebar';

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
import CovidScreen from '../pages/covid'

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const NavigationDrawerStructure = (props) => {
  const toogleDrawer = () => {
    props.navigationProps.toggleDrawer();
  };

  return (
    <View style={{ flexDirection: 'row' }}>
      <TouchableOpacity onPress={() => toogleDrawer()}>
        <Image
          source={{ uri: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/drawerWhite.png' }}
          style={{ width: 25, height: 25, marginLeft: 5 }}
        />
      </TouchableOpacity>
    </View>
  )
}

function HomeScreenStack({ navigation }) {
  return (
    <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Home',
          headerLeft: () => <NavigationDrawerStructure navigationProps={navigation} />,
          headerStyle: { backgroundColor: '#2faaff' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' }
        }}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          title: 'Login',
          headerStyle: { backgroundColor: '#2faaff' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' }
        }}
      />
      <Stack.Screen
        name="Tb Paru"
        component={TbparuScreen}
        options={{
          title: 'Tb Paru',
          headerStyle: { backgroundColor: '#2faaff' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' }
        }}
      />
      <Stack.Screen
        name="Kusta"
        component={KustaScreen}
        options={{
          title: 'Kusta',
          headerStyle: { backgroundColor: '#2faaff' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' }
        }}
      />
      <Stack.Screen
        name="Hiv"
        component={HivScreen}
        options={{
          title: 'Hiv',
          headerStyle: { backgroundColor: '#2faaff' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' }
        }}
      />
      <Stack.Screen
        name="Diare"
        component={DiareScreen}
        options={{
          title: 'Diare',
          headerStyle: { backgroundColor: '#2faaff' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' }
        }}
      />
      <Stack.Screen
        name="Ispa"
        component={IspaScreen}
        options={{
          title: 'Ispa',
          headerStyle: { backgroundColor: '#2faaff' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' }
        }}
      />
      <Stack.Screen
        name="Dbd"
        component={DbdScreen}
        options={{
          title: 'Dbd',
          headerStyle: { backgroundColor: '#2faaff' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' }
        }}
      />
      <Stack.Screen
        name="Covid"
        component={CovidScreen}
        options={{
          title: 'Covid',
          headerStyle: { backgroundColor: '#2faaff' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' }
        }}
      />
    </Stack.Navigator>
  )
}

function MapScreenStack({ navigation }) {
  return (
    <Stack.Navigator initialRouteName="MapScreen">
      <Stack.Screen
        name="Map"
        component={MapScreen}
        options={{
          title: 'Map',
          headerLeft: () => <NavigationDrawerStructure navigationProps={navigation} />,
          headerStyle: { backgroundColor: '#2faaff' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' }
        }}
      />
    </Stack.Navigator>
  )
}

function BantuanScreenStack({ navigation }) {
  return (
    <Stack.Navigator initialRouteName="BantuanScreen">
      <Stack.Screen
        name="Bantuan"
        component={BantuanScreen}
        options={{
          title: 'Bantuan',
          headerLeft: () => <NavigationDrawerStructure navigationProps={navigation} />,
          headerStyle: { backgroundColor: '#2faaff' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' }
        }}
      />
    </Stack.Navigator>
  )
}

function PengingatScreenStack({ navigation }) {
  return (
    <Stack.Navigator initialRouteName="PengingatScreen">
      <Stack.Screen
        name="Pengingat"
        component={PengingatScreen}
        options={{
          title: 'Pengingat',
          headerLeft: () => <NavigationDrawerStructure navigationProps={navigation} />,
          headerStyle: { backgroundColor: '#2faaff' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' }
        }}
      />
    </Stack.Navigator>
  )
}

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContentOptions={{
          activeTintColor: '#e91e63',
          itemStyle: { marginVertical: 5 }
        }}
        drawerContent={(props) => <CustomSidebar {...props} />}>
        <Drawer.Screen
          name="Home"
          component={HomeScreenStack}
          options={{
            drawerIcon: ({ }) => (
              <Image source={require('../drawable/homeicon.png')} style={{ width: 25, height: 25 }} />
            )
          }}
        />
        <Drawer.Screen
          name="Map"
          component={MapScreenStack}
          options={{
            drawerIcon: ({ }) => (
              <Image source={require('../drawable/mapsicon.png')} style={{ width: 25, height: 25 }} />
            )
          }} />
        <Drawer.Screen
          name="Bantuan"
          component={BantuanScreenStack}
          options={{
            drawerIcon: ({ }) => (
              <Image source={require('../drawable/helphandicon.png')} style={{ width: 25, height: 25 }} />
            )
          }}
        />
        <Drawer.Screen
          name="Pengingat"
          component={PengingatScreenStack}
          options={{
            drawerIcon: ({ }) => (
              <Image source={require('../drawable/calendaricon.png')} style={{ width: 25, height: 25 }} />
            )
          }} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default App;