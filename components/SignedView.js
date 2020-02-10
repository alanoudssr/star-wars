import React from 'react';
import { ScrollView, StyleSheet, Text, TextInput } from 'react-native';
import Planet from '../components/Planet.js'


export default class SignedView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            planets: this.props.planets
        }
    }

    // filter function
    search(keyword) {
        keyword = keyword.searchTerm.toLowerCase()
        const filteredPlanets = this.props.planets.filter((planet) => {
            planet = planet.name.toLowerCase();
            return planet.indexOf(keyword) > -1;
        });
        this.setState({ planets: filteredPlanets });
    }

    // display planet details
    showDetails = (planet) => {
        const { navigation } = this.props;
        navigation.navigate("List", {
            planet: planet
        })
    }

    render() {
        //    renders a planet component for each planet in the list
        const planets = this.state.planets.map((planet, index) => {
            return <Planet show={() => this.showDetails(planet)} key={index} name={planet.name} population={planet.population} />
        })

        return (
            <ScrollView style={styles.container}>
                <Text style={styles.logoutBtnText} onPress={() => this.props.setUser('')}>LOG OUT</Text>
                <TextInput style={styles.textInput} placeholder="Search" onChangeText={(searchTerm) => this.search({ searchTerm })} underlineColorAndroid='transparent' />
                {planets}
            </ScrollView>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 15,
        marginBottom: 20,
        backgroundColor: '#111',
    },
    textInput: {
        margin: 10,
        borderColor: 'yellow',
        borderWidth: 2,
        borderRadius: 10,
        padding: 5,
        paddingLeft: 15,
        color: 'white',
        fontSize: 17
    },
    logoutBtnText: {
        color: 'yellow',
        textAlign: 'right'
    }
});
