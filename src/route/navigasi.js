import * as React from 'react';
import { Image, View, TouchableOpacity, Text, Alert } from 'react-native';
import 'react-native-gesture-handler';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import AsyncStorage from '@react-native-async-storage/async-storage'

import CustomSidebar from '../pages/customSidebar';

import HomeScreen from '../pages/home'
import MapScreen from '../pages/map'
import PengingatScreen from '../pages/pengingat'
import BantuanScreen from '../pages/bantuan'
import LoginScreen from '../pages/login'
import PenyakitPage from '../pages/penyakitPage';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

import { AuthContext } from '../utils/authContext';

import axios from 'axios';
import { BASE_URL, LOGIN } from '../store/typeStore';

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
  const [nama, setNama] = React.useState(null);
  React.useEffect(() => {
    async function getName() {
      const nameUser = await AsyncStorage.getItem('nama');
      await setNama(nameUser)
    }
    getName();
  }, [])
  return (
    <View>
      { nama != null ? (
        <Text style={{ marginRight: 25, color: 'white', fontWeight: 'bold' }}>{nama}</Text>
      ) : (
        <Text></Text>
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

function Logout({navigation}) {
  const { signOut } = React.useContext(AuthContext);
  signOut();
  return null
  // (
  //   <Stack.Navigator initialRouteName="LoginScreen">
  //     <Stack.Screen
  //       name="Login"
  //       component={LoginScreen}
  //       options={{
  //         headerShown: false,
  //       }}
  //     />
  //   </Stack.Navigator>
  // );
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

function DrawerWithoutLogin({ navigation }) {
  return (
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
          component={LoginScreenStack}
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
              drawerIcon: ({}) => (
                <Image source={require('../drawable/loginicon.png')} style={{ width: 25, height: 25}} />
              )
            }} />
      </Drawer.Navigator>
  )
}

function DrawerWithLogin({ navigation }) {
  return (
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
          name="Logout"
          component={Logout}
          options={{
            drawerIcon: ({}) => (
              <Image source={require('../drawable/log-out.png')} style={{ width: 25, height: 25}} />
            )
          }} />
      </Drawer.Navigator>
  )
}

function App() {
  const [state, dispatch] = React.useReducer(
    (prevState, action) => {
      switch (action.type) {
        case 'RESTORE_TOKEN':
          return {
            ...prevState,
            userToken: action.token,
          };
        case 'SIGN_IN':
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token,
          };
        case 'SIGN_OUT':
          return {
            ...prevState,
            isSignout: true,
            userToken: null,
          };
      }
    },
    {
      isSignout: false,
      userToken: null
    }
  );

  React.useEffect(() => {
    const bootstrapAsync = async () => {
      let userToken;

      try {
        userToken = await AsyncStorage.getItem('userToken');
      } catch (e) {
        // fail restoring
      }
      dispatch({ type: 'RESTORE_TOKEN', token: userToken });
    };

    bootstrapAsync();
  }, []);

  const authContext = React.useMemo(
    () => ({
      signIn: async data => {
        axios
          .post(BASE_URL + LOGIN, data)
          .then( async (resp) => {
            const status = resp.data.response.status;
            if (status === 'success') {
              const nama = resp.data.response.data.nama;
              const nik = resp.data.response.data.nik;
              let userToken = nama+nik;
              await AsyncStorage.setItem('nama', nama);
              await AsyncStorage.setItem('nik', nik.toString());
              await AsyncStorage.setItem('userToken', userToken);
              dispatch({ type: 'SIGN_IN', token: userToken });
            } else {
              Alert.alert(
                "Ada kesalahan login!",
                `Status ${status}`
              )
            }
          })
          .catch((err) => {
            console.log('[err]', err);
          })
      },
      signOut: async () => {
        await AsyncStorage.removeItem('nama');
        await AsyncStorage.removeItem('nik');
        await AsyncStorage.removeItem('userToken');
        dispatch({ type: 'SIGN_OUT' })
      }
    }),
    []
  );

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        {state.userToken == null ? (
          <DrawerWithoutLogin />
        ) : (
          <DrawerWithLogin />
        )}
      </NavigationContainer>
    </AuthContext.Provider>
  )
}

export default App;