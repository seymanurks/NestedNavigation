import React from 'react'; 
import {SafeAreaView, Text, Button} from 'react-native';

function Profile({navigation}) {
    return (
        <SafeAreaView>
        <Text>Profile</Text>
        <Button title="Edit" onPress={() => navigation.navigate("ProfileEditScreen")}></Button>
        </SafeAreaView>
        )
    }
    
export default Profile;