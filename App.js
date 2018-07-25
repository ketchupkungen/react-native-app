import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default class App extends Component {
  state = {
    placeName: ''
  }

  placeNameChangedHandler = (e) => {
    alert(e);
    this.setState({
      placeName: val
    })
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <Text>My guuuuuuuuurd!!!</Text>
          <TextInput
            placeholder="An awesome place" 
            value={this.state.placeName}
            onChangeText={this.placeNameChangedHandler}
            style={{styles.placeInput}}
          />
          <Button 
            title="Add"
            style={{styles.placeButton}}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: 'space-between'
    alignItems: "center"
  },
  placeInput: {
    width: "70%"
  },
  placeButton: {
    width: "30%"
  }
});
