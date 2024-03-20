import React from 'react'; 
import {SafeAreaView, Text, Button} from 'react-native';

function MemberUpdate({navigation}) {
    return (
        <SafeAreaView>
        <Text>Member Update</Text>
        <Button title="Edit" onPress={() => navigation.navigate("ProfileEditScreen")}></Button>
        </SafeAreaView>
        )
    }
    
export default MemberUpdate;