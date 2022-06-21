import React from 'react'
import { View, Text, Button } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { styles } from '../theme/appTheme';

interface Props extends StackScreenProps<any,any>{}


export const Pantalla3Screen = ({ navigation } : Props) => {
    return (
        <View style={styles.globalMargin}>
            <Text>
                Pantalla3Screen
            </Text>

            <Button
                title='Regresar'
                onPress={() => navigation.pop()}
            />
            <Button
                title='Inicio'
                onPress={() => navigation.popToTop()}
            />

        </View>
    )
}
