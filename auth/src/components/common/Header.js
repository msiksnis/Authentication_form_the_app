// Import libraries for making a component
import React from "react";
import { Text, View } from "react-native";
// Make a component
const Header = props => {
  const { textStyle, viewStyle } = styles;
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: "#F8F8F8",
    justifyContent: "center",
    alignItems: "center",
    height: 70,
    paddingTop: 35,
    shadowColor: "#000",
    shadowOffset: { widyh: 0, height: 2 },
    shadowOpacity: 0.3,
    elevation: 2,
    position: "relative"
  },
  textStyle: {
    fontSize: 20,
    fontFamily: "Iowan Old Style"
  }
};
// Make a component available to other parts of the app
export { Header };
