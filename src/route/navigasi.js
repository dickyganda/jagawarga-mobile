import * as React from 'react';
import { Image, View, TouchableOpacity, Text } from 'react-native';
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
import PenyakitPage from '../pages/penyakitPage';

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

const LoginButtonStructure = (props) => {
  const isLogin = false;
  return (
    <View>
      {isLogin ? (
        <Text style={{ marginRight: 25, color: 'white', fontWeight: 'bold' }}>Username</Text>
      ) : (
        <TouchableOpacity
          style={{ marginRight: 25, backgroundColor: '#25a0f7', padding: 8, borderRadius: 8 }}
          onPress={() => props.navigationProps.navigate('Login')}
        >
          <Text style={{ fontWeight: 'bold', color: 'white' }}>Login</Text>
        </TouchableOpacity>
      )}
    </View>
  )
}

function LoginScreenStack() {
  return (
    <Stack.Navigator initialRouteName="LoginScreen">
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          headerShown: false
        }}
      />
    </Stack.Navigator>
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
          headerRight: () => <LoginButtonStructure navigationProps={navigation} />,
          headerStyle: { backgroundColor: '#2faaff' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' }
        }}
      />
      <Stack.Screen
        name="Sick"
        component={PenyakitPage}
        options={{
          title: 'Jenis-Jenis Penyakit',
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
        <Drawer.Screen
          name="Login"
          component={LoginScreenStack}
          options={{
            drawerIcon: () => null,
            drawerLabel: () => null
          }} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default App;