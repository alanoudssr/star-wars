import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';


export default function Planet(props) {
    const dotsArr = new Array(props.population.length)
    if (props.population !== 'unknown') {
        for (var i = 0; i < dotsArr.length; i++) {
            dotsArr[i] = '';
        }
    }
    const dots = dotsArr.map((dot, index) => {
        return (<View style={{ backgroundColor: 'yellow', height: 2, width: 2, borderRadius: 50, position: 'absolute', top: (index % 2 == 0 ? 20 : 50), left: 40 + (25 * index) }}></View>)
    })

    return (
        <ScrollView contentContainerStyle={styles.container}>
            {dots}
            <Text onPress={props.show} style={styles.text}>Name: {props.name}</Text>
            <Text style={styles.text}>Population: {props.population}</Text>

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
        backgroundColor: 'transparent',
        borderRadius: 10,
        borderColor: 'yellow',
        borderWidth: 2,
        margin: 10,
        alignItems: 'center'
    },
    text: {
        color: 'white',
        textAlign: 'center',
    }
});