//Import libray to help create a Component
import React from 'react';
import { View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

//Create Component
//returns JSX can be rendered by react native baseljs.io
const App = () => (
    <View style={{ flex: 1 }}>
    <Header headerText={'Albums'} />
    <AlbumList />
    </View>
);

export default App;
