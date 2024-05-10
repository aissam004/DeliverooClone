//import liraries
import React, { useLayoutEffect } from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'
import {
    UserIcon,
    ChevronDownIcon,
    MagnifyingGlassCircleIcon,
    AdjustmentsHorizontalIcon
} from 'react-native-heroicons/outline'
// create a component
const HomeScreen = ({ navigation }) => {

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
    }, [])
    return (
        <SafeAreaView className='bg-white pt-5'>
            <Text className="flex-1">

                <View className="flex-row pb-3 items-center mx-3 space-x-2">
                    <Image
                        source={{
                            uri: "https://links.papareact.com/wru"
                        }}
                        className="h-7 w-7 bg-gray-300 rounded-full"
                    />
                    <View className="flex-1">
                        <Text className="font-bold text-gray-400 text-xs">
                            Deliver now!
                        </Text>


                        <Text className="font-bold text-xl">
                            Current Location
                            <ChevronDownIcon size={20} color="#00CCBB" />
                        </Text>

                    </View>
                    <UserIcon size={35} color="#00CCBB" />

                </View>
            </Text>
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
