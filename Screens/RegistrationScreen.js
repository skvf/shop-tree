import React from 'react';
import {View, Text, TextInput, ScrollView, Button} from 'react-native';

//  <3

function Register(){ 
    return(

            <ScrollView style={{padding: 60}}>
                <View>
                    <Text>Name: </Text>
                    <TextInput placeholder='Insert your name' > </TextInput>
                    <Text>Email: </Text>
                    <TextInput placeholder='Insert your email' > </TextInput>
                    <Text>password: </Text>
                    <TextInput placeholder='Insert a password' > </TextInput>
                </View>
              
            </ScrollView>
            )
        }

export default Register;