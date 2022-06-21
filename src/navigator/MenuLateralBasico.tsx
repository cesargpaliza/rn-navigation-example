import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import StackNavigator from './StackNavigator';
import SettingsScreen from '../screens/SettingsScreen';
import { useWindowDimensions } from 'react-native';


const Drawer = createDrawerNavigator();

function MenuLateralBasico() {

  const { width } = useWindowDimensions()

  return (
    <Drawer.Navigator
      // Codigo si es que queremos mostrar siempre em menu
      // En este caso cdo el telefono este en girado
      screenOptions={{
        drawerType: width >= 600 ? 'permanent' : 'front',
      }}
    
    >
      <Drawer.Screen name="StackNavigaror" options={{title: 'Home'}} component={StackNavigator} />
      <Drawer.Screen name="SettingsScreen" options={{title: 'Settings'}} component={SettingsScreen} />
    </Drawer.Navigator>
  );
}
export default MenuLateralBasico