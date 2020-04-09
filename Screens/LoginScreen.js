import { Button, ScrollView, TextInput, View } from 'react-native';

import React from 'react';
import StyledText from '../Components/Text';

function Login() {

    return (
            <ScrollView style={{padding: 60}}>
                <StyledText>0
                    Login
                </StyledText>
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