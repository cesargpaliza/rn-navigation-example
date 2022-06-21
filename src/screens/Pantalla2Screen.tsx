import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react'
import { View, Text, Button } from 'react-native';
import { styles } from '../theme/appTheme';

export const Pantalla2Screen = () => {


    const navigator = useNavigation()

    //sobreEscribir propiedades
    useEffect(() => {
        navigator.setOptions({
            title: 'PAGINA 2'
        })
    }, [])

    return (
        <View style={styles.globalMargin} >
            <Text>
                Pantalla2Screen
            </Text>
            <Button
                title='Pagina 3'
                onPress={ () => navigator.navigate('Pantalla3' as never) }
            />
        </View>
    )
}
