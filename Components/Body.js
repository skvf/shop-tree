import { TextInput, View } from 'react-native';

import React from 'react';

function Body() {
    const [name, setName] = React.useState("");

    return (
        <View>
            <TextInput value={name} onChangeText={setName} />
        </View>
    )
}

export default Body;