import React from 'react';
import { View, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const SettingsScreen = () => {

  //hook para obtener el safe area, luego se puede usar para maquetear
  const insets = useSafeAreaInsets();


  return (
    <View>
      <Text>Config</Text>
      <Text>INSETS:</Text>
      <Text>{JSON.stringify(insets, null, 2)}</Text>
    </View>
  );
};

export default SettingsScreen;
