import React, { useEffect } from 'react'
import { View, Text, Button } from 'react-native';
import { DrawerScreenProps } from '@react-navigation/drawer';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { styles } from '../theme/appTheme';


interface Props extends DrawerScreenProps<any, any>{}

export const Pantalla1Screen = ( { navigation }: Props) => {

    //En la version actual de DreawerNavigation el boton para desplegar el menu ya se pone automaticamente
    //pero en caso de necesitar un boton que desplieque el menu se realiza de la siguiente manera
    useEffect(() => {
        navigation.setOptions({
            headerLeft: () => <Button 
                                title="Menu"
                                onPress={ () => navigation.toggleDrawer() }
                              />
        })
    }, []);
    


    return (
        <View style={styles.globalMargin} >
            <Text style={styles.title} >
                Pantalla 1 Screen
            </Text>
            <Button
                title='PAGINA 2'
                // Name de la pagina utilizada en la definicion de la paginacion
                onPress={ () => navigation.navigate('Pantalla2')}
            />
            <Button
                title='PAGINA 3'
                onPress={ () => navigation.navigate('Pantalla3')}
            />

            <Text>Navegar con argumentos</Text>

            {/* Como segundo argumento se mandan los datos */}
            <TouchableOpacity 
                style={{
                    ...styles.botonGrande,
                    backgroundColor: '#10B981'
                }}
                onPress={ () => navigation.navigate('PersonaScreen', {
                    id: 1,
                    nombre: 'CESAR GERMAN'
                })}
                >
                <Text style={styles.botonGrandeTexto}>César</Text>
            </TouchableOpacity>

            <TouchableOpacity 
                style={{
                    ...styles.botonGrande,
                    backgroundColor: '#EC4899',
                }}
                onPress={ () => navigation.navigate('PersonaScreen', {
                    id: 2,
                    nombre: 'SOFIA ROSALES'
                })}
            >
                <Text style={styles.botonGrandeTexto}>Sofia</Text>
            </TouchableOpacity>

        </View>
    )
}

