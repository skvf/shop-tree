import { FlatList, Image, Text, View } from 'react-native';

import React from 'react';
import StyledText from './Text'

const USERS = [{
    id: 1,
    name: "Sheila",
    sign: "Aquario",
    imageURI: "https://randomuser.me/api/portraits/lego/2.jpg"
},{
    id: 2,
    name: "Mateus",
    sign: "Libra",
    imageURI: "https://randomuser.me/api/portraits/lego/6.jpg"
}];

function UsersListItem({ user }) {
    return (
        <>
            <Image style={{width: 50, height: 50}} source={{ uri: user.imageURI}} />
            <StyledText>Name: {user.name}</StyledText>
            <StyledText>Sign: {user.sign}</StyledText>
        </>
    )
}

function UsersList(props) {
    return (<FlatList
            data={USERS}
            renderItem={(params) => <UsersListItem user={params.item} />}
        />)
}


export default UsersList;

