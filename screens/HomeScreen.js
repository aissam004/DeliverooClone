//import liraries
import React, {useLayoutEffect} from 'react';
import {  Text, StyleSheet,SafeAreaView } from 'react-native';

// create a component
const HomeScreen = ({ navigation }) => {
    
   useLayoutEffect(() => {
       navigation.setOptions({
         headerShown:false
     })
      }, [])
    return (
        <SafeAreaView>
            <Text className="text-red-500">MyComponent</Text>
        </SafeAreaView>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default HomeScreen;
