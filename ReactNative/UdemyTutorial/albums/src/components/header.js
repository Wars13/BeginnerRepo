// Import libraries for making a component
import React from 'react';
import { Text, View } from 'react-native';

// Make a Component
const Header = () => {
  const { textStyle, viewStyle } = styles;
  return (
  <View style={viewStyle}>
    <Text style={textStyle}>Albums!</Text>
  </View>
);
};

const styles = {
  viewStyle: {
    backgroundColor: '#F8F8F8',
    //flex box properties 'justifyContent' and 'alignItems'
    justifyContent: 'center',
    alignItems: 'center',
    height: 60, // pixel value. get 60 pixels on the screen
    paddingTop: 15 // like in css. Add padding to the top of the element
  },
  textStyle: {
    fontSize: 20
  }
};
// Make the component available to other parts of the app.
export default Header;
