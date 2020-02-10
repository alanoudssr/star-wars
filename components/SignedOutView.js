import React from 'react';
import { ScrollView, StyleSheet, Text, View, TouchableOpacity, ImageBackground, Image } from 'react-native';


export default class SignedOutView extends React.Component {
    constructor(props) {
        super(props);
    }

    login = () => {
        const { navigation } = this.props;
        navigation.navigate("Login")
    }

    render() {
        return (
            <ScrollView style={styles.container}>
                <ImageBackground source={require('../assets/images/bg2.jpg')} style={{ width: '100%', height: '100%' }}>
                    <View style={styles.welcomeContainer}>

                        <Image
                            style={styles.welcomeImage}
                            source={require("../assets/images/logo.png")}
                        />
                    </View>

                    <Text style={styles.text}>Welcome young Padawan{"\n"}Identify yourself to view our planetary system</Text>
                    <TouchableOpacity style={styles.btn} onPress={this.login}>
                        <Text style={styles.btnText}>ENTER THE GALAXY</Text>
                    </TouchableOpacity>

                </ImageBackground>
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
    btn: {
        backgroundColor: 'yellow',
        padding: 20,
        alignItems: 'center',
        margin: 10,
        borderRadius: 10,
        marginBottom: 420
    },
    btnText: {
        fontSize: 20,
        fontWeight: 'bold',
        letterSpacing: 1,
        fontVariant: ['small-caps'],
        textTransform: 'uppercase'
    },
    welcomeImage: {
        width: 150,
        height: 100,
        resizeMode: 'contain',
        marginTop: 80,
    },
    welcomeContainer: {
        alignItems: 'center',
        marginTop: 10,
        marginTop: 10,
    },
    text: {
        color: 'white',
        fontSize: 15,
        textAlign: 'center',
        marginTop: 100,
        textShadowColor: 'black',
        textShadowRadius: 10,
        textShadowOffset: { width: 2, height: 2 },
        backgroundColor: '#111',
    }
});