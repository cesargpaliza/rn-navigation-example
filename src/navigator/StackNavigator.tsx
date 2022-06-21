

import { createStackNavigator , CardStyleInterpolators } from '@react-navigation/stack';
import React from 'react'

import { Pantalla1Screen } from "./../screens/Pantalla1Screen";
import { Pantalla2Screen } from "./../screens/Pantalla2Screen";
import { Pantalla3Screen } from "./../screens/Pantalla3Screen";
import { PersonaScreen } from "./../screens/PersonaScreen";


//definicion de tipado de parametros q recibira cada pantalla
export type RootStackParams = {
  Pantalla1Screen:undefined,
  Pantalla2Screen:undefined,
  Pantalla3Screen:undefined,
  PersonaScreen:{ id:number, nombre: string },
}



const Stack = createStackNavigator<RootStackParams>();

const StackNavigator = () => {
    
    return (
        <Stack.Navigator
            //Si queremos definir una pagina por defecto que no sea la 1ra
            // initialRouteName='<NAME PAGINA>'
            //Conocer todas las propiedades: https://reactnavigation.org/docs/stack-navigator/
            screenOptions={{
              headerShown: true, //muestra encabezado
              headerStyle: {
                elevation: 0, //android eliminar linea
                shadowColor: 'transparent',
              },

              cardStyle: {
                backgroundColor: '#fff',
              },
            }}
      >
          <Stack.Screen name="Pantalla1Screen" component={Pantalla1Screen} options={ {title: 'Página 1', cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid,}} />
          <Stack.Screen name="Pantalla2Screen" component={Pantalla2Screen} options={ {title: 'Página 2', cardStyleInterpolator: CardStyleInterpolators.forFadeFromCenter,}} />
          <Stack.Screen name="Pantalla3Screen" component={Pantalla3Screen} options={ {title: 'Página 3', cardStyleInterpolator: CardStyleInterpolators.forScaleFromCenterAndroid,}} />
          <Stack.Screen name="PersonaScreen" component={PersonaScreen} options={ {title: 'Persona', }} />
        </Stack.Navigator>
      );
    

}

export default StackNavigator
