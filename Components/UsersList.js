import { FlatList, Image, Text, View } from 'react-native';

import React from 'react';

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
            <Text style={{ fontWeight: "bold" }}>Name: {user.name}</Text>
            <Text>Sign: {user.sign}</Text>
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

