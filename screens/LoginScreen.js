import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  TextInput,
  ImageBackground,
  TouchableHighlight
} from 'react-native';


export default class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    }
  }

  login = (username, password) => {
    const user = this.search(username, this.props.screenProps.characters)
    if (user !== undefined) {
      if (password == user.year) {
        this.props.screenProps.setUser(username)
        const { navigation } = this.props;
        navigation.navigate("Home")

      } else {
        alert('invalid password')

      }
    } else {
      alert('user not found')
    }
  }

  search(nameKey, myArray) {
    for (var i = 0; i < myArray.length; i++) {
      if (myArray[i].name === nameKey) {
        return myArray[i];
      }
    }
  }

  render() {

    return (

      <KeyboardAvoidingView behavior='padding' style={styles.container}>
        <ImageBackground source={require('../assets/images/bg2.jpg')} style={{ width: '100%', height: '100%' }}>

          <View style={styles.welcomeContainer}>
            <Image
              style={styles.welcomeImage}
              source={require("../assets/images/logo.png")}
            />
          </View>

          <View style={styles.container}>
            <TextInput style={styles.textInput} placeholder="username" onChangeText={(username) => this.setState({ username })} underlineColorAndroid='transparent' />
            <TextInput style={styles.textInput} placeholder="password" onChangeText={(password) => this.setState({ password })} underlineColorAndroid='transparent' />
            <TouchableHighlight style={styles.btn} onPress={() => this.login(this.state.username, this.state.password)}>
              <Text style={styles.btnText}>LOG IN</Text>
            </TouchableHighlight>
          </View>

        </ImageBackground>
      </KeyboardAvoidingView >
    );
  }
}

LoginScreen.navigationOptions = {
  header: null,
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textInput: {
    textAlign: 'center',
    margin: 10,
    borderColor: 'yellow',
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    color: 'white',
    fontSize: 17
  },
  btn: {
    backgroundColor: 'yellow',
    padding: 20,
    alignItems: 'center',
    margin: 10,
    borderRadius: 10
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
    margin: 30,
    marginTop: 80,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginTop: 10,
    marginBottom: 20,
  },
});
