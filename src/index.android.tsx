import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    flex: 1,
    justifyContent: 'center'
  } as React.ViewStyle,
  instructions: {
    color: '#333333',
    marginBottom: 5,
    textAlign: 'center'
  } as React.ViewStyle,
  welcome: {
    fontSize: 20,
    margin: 10,
    textAlign: 'center'
  } as React.ViewStyle
});

interface Props {}
interface State {}

export default class Testing extends Component<Props, State> {
  public render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native with Typescript!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text>
      </View>
    );
  }
}

AppRegistry.registerComponent('Testing', () => Testing);

