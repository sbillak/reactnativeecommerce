import React,{useEffect} from 'react';
import {View,Text} from 'react-native';
export const Nike = ({navigation}) => {
  useEffect(() => {
    navigation.setOptions({
      headerTintColor:'white',
      headerStyle:{backgroundColor: 'black', elevation: 0,
      shadowOpacity: 0,}
    });
  });
    return (
      <View >
         <Text style={{color:'white'}}>Nike Page</Text>
      </View>
    );
  }