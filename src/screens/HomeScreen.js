import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";


const HomeScreen = ({ navigation }) => {
  
  return <View>
    <Text style={styles.text}>Getting started with MIAV!</Text>
    <Button 
      onPress={ () => navigation.navigate('Components')}
      title="Go to components Demo"
      />
      <Button 
      onPress={ () => navigation.navigate('List') }
        title="Go to list Demo"
      />
    </View>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 45
  }
});

export default HomeScreen;
