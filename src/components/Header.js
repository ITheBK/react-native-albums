//import library to make components

import React from 'react';
import { Text, View } from 'react-native';

//make a Component
const Header = (props) => {
  const { textStyle, viewStyle } = styles;

  return (
    <View elevation={1} style={viewStyle}>
    <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    position: 'relative'
  },
  textStyle: {
    fontSize: 20

  }
};

//Make the component available to other  parts
export default Header;
