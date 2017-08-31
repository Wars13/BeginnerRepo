// Import libraries for making a component
import React from 'react';
import { Text, View } from 'react-native';

// Make a Component
const Header = (props) => {
  const { textStyle, viewStyle } = styles;
  return (
  <View style={viewStyle}>
    <Text style={textStyle}>{props.headerText}</Text>
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
    paddingTop: 15, // like in css. Add padding to the top of the element
    shadowColor: '#000', //shadow on the element with black colour
    shadowOffset: { width: 0, height: 10 }, //how taller and how wider the shadow should be.
    shadowOpacity: 0.9, //darkness of the shadow
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
    fontSize: 20
  }
};
// Make the component available to other parts of the app.
export default Header;
