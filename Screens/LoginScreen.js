import { ScrollView, Text, TextInput, View, Button } from 'react-native';

import React from 'react';

function Login() {

    return (
            <ScrollView style={{padding: 60}}>
                <Text 
                    style={{fontSize: 27}}>
                    Login
                </Text>
                <TextInput placeholder='Username' />
                <TextInput placeholder='Password' />
                <View style={{margin:7}} />
                <Button 
                          //  onPress={return (<view> <text>login </text></view>) }
                        
                          title="Submit"
                      />
                  </ScrollView>
            )
        }

export default Login;