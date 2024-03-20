import React from 'react'; 
import {SafeAreaView, Text, Button} from 'react-native';

function Member({navigation}) {
    return (
        <SafeAreaView>
        <Text>Member</Text>
        <Button title="Detail" onPress={() => navigation.navigate("MemberDetailScreen")}></Button>
        </SafeAreaView>
        )
    }
    
export default Member;