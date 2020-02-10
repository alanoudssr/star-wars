import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import SignedView from '../components/SignedView.js'
import SignedOutView from '../components/SignedOutView.js'

export default class HomeScreen extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    let view;

    // checks if user is signed in and displays the appropriate screen
    if (this.props.screenProps.user) {
      view = (
        <SignedView planets={this.props.screenProps.planets} setUser={this.props.screenProps.setUser} navigation={this.props.navigation} />
      );
    } else {
      view = (<SignedOutView navigation={this.props.navigation} />);
    }

    return (
      <ScrollView style={styles.container}>
        {view}
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
  }
});
