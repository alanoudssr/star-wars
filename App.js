
import React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';

import AppNavigator from './navigation/AppNavigator';
import axios from "axios";

export default class App extends React.Component {

  state = {
    user: "",
    planets: [],
    characters: '',
  };

  componentDidMount() {
    this.getApiInfo()
  }

  setUser = (user) => {
    this.setState({ user });
  }

  getApiInfo() {
    axios
      .get(`https://swapi.co/api/people`)
      .then(res => {
        let characters = res.data.results.map(character => { return { name: character.name, year: character.birth_year } })
        this.setState({ characters });

      })
      .catch(error => error);
    axios
      .get(`https://swapi.co/api/planets`)
      .then(res => {
        let planets = res.data.results.sort((a, b) => a.name - b.name)
        this.setState({ planets });
      })
      .catch(error => error);
  };



  render() {
    return (
      <View style={styles.container}>
        {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
        <AppNavigator screenProps={{
          planets: this.state.planets,
          setUser: this.setUser,
          characters: this.state.characters,
          user: this.state.user
        }} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});