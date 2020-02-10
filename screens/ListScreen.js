import React from 'react';
import {
  StyleSheet,
  Text,
  ScrollView,
  ImageBackground
} from 'react-native';


export default function ListScreen({ navigation }) {
  const { planet } = navigation.state.params;
  return (
    <ImageBackground source={require('../assets/images/bg2.jpg')} style={{ width: '100%', height: '100%' }}>

      <ScrollView style={styles.container}>
        <Text style={styles.name}>{planet.name}</Text>
        <Text style={styles.title}>Climate</Text>
        <Text style={styles.text}> {planet.climate}</Text>
        <Text style={styles.title}>Gravity</Text>
        <Text style={styles.text}>{planet.gravity}</Text>
        <Text style={styles.title}>Terrain</Text>
        <Text style={styles.text}>{planet.terrain}</Text>
        <Text style={styles.title}>Population</Text>
        <Text style={styles.text}>{planet.population}</Text>
        <Text style={styles.title}>Orbital Period</Text>
        <Text style={styles.text}>{planet.orbital_period}</Text>
      </ScrollView>
    </ImageBackground>

  );
}

ListScreen.navigationOptions = {
  title: 'Planet Details',
  headerStyle: { backgroundColor: 'yellow' },
  headerTitleStyle: { color: 'black' },
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    marginBottom: 20,
  },
  text: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
  },
  name: {
    color: 'white',
    textAlign: 'center',
    fontSize: 34,
    marginBottom: 20,
    letterSpacing: 2,
    fontVariant: ['small-caps'],
    fontWeight: 'bold',
    color: 'yellow',
    textTransform: 'uppercase',
  },
  title: {
    color: 'yellow',
    textAlign: 'center',
    fontSize: 24,
    marginTop: 20,
    textShadowColor: 'yellow',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 30
  }
});