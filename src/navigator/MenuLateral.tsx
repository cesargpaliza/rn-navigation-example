import React from 'react';
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer';
import StackNavigator from './StackNavigator';
import SettingsScreen from '../screens/SettingsScreen';
import { useWindowDimensions, Text, View, Image, TouchableOpacity } from 'react-native';
import { styles } from '../theme/appTheme';


const Drawer = createDrawerNavigator();

function MenuLateral() {

  const { width } = useWindowDimensions()

  return (
    <Drawer.Navigator
      // Codigo si es que queremos mostrar siempre em menu
      // En este caso cdo el telefono este en girado
      screenOptions={{
        drawerType: width >= 600 ? 'permanent' : 'front',
      }}
      
      // No se pueden renderizar componentes de rn, solo se puede pasar pantallas
      drawerContent={ (props) => <MenuInterno {...props}/> }
    >
      <Drawer.Screen name="StackNavigator" component={StackNavigator} />
      <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
    </Drawer.Navigator>
  );
}
export default MenuLateral


//COMPONENTE CON EL CONTENIDO DEL MENU
//desestructuramos navigation de las props
const MenuInterno = ({navigation}: DrawerContentComponentProps) => {
   return (    
     <DrawerContentScrollView>

       {/* Avatar */}
       <View style={styles.avatarContainer}>
         <Image
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/512/179/179841.png'
          }}
          style= { styles.avatar}
         />
       </View>
       
       {/* Opciones de Menu */}
       <View style={styles.menuContainer}>
         
         <TouchableOpacity 
            style={ styles.menuBoton }
            onPress= {() => navigation.navigate('StackNavigator')}    
        >
            <Text style={ styles.menuTexto }>Navegacion</Text>
         </TouchableOpacity>
         <TouchableOpacity 
            style={ styles.menuBoton }
            onPress= {() => navigation.navigate('SettingsScreen')}   
        >
            <Text style={ styles.menuTexto }>Ajustes</Text>
         </TouchableOpacity>

       </View>

     </DrawerContentScrollView>
   )
}
