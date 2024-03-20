import React from 'react'; 
import {SafeAreaView, Text, Button} from 'react-native';

function MemberDetail({navigation}) {
    return (
        <SafeAreaView>
        <Text>Member Detail</Text>
        <Button title="Update" onPress={() => navigation.navigate("MemberUpdateScreen")}></Button>
        </SafeAreaView>
        )
    }
    
export default MemberDetail;