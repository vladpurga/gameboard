/**
 * Launch Screen
 *  - Shows a nice loading screen whilst:
 *    - Preloading any specified app content
 *    - Checking if user is logged in, and redirects from there
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Image,
  StatusBar,
} from 'react-native';
import { Spinner, Text } from 'native-base';
import { Actions } from 'react-native-router-flux';

class AppLaunch extends Component {
  static componentName = 'AppLaunch';

  static propTypes = {
    resume: PropTypes.func.isRequired,
  }

  constructor() {
    super();
    console.ignoredYellowBox = ['Setting a timer'];
  }

  componentDidMount = () => {
    // Show status bar on app launch
    StatusBar.setHidden(false, true);

    //  First, see if we can resume the user's logged in session. If we can, we
    //  can go straight to the home screen.
    this.props.resume().then((resumed) => {
      if (resumed) {
        Actions.app({ type: 'reset' });
      } else {
        Actions.login({ type: 'reset' });
      }
    });

    //  Anonymous firebase authentication. This will be deprecated.
    // this.props.firebaseLogin();

    // // Preload content here
    // Promise.all([
      // this.props.getMeals(),
      // this.props.getRecipes(),
    // ]).then(() => {
      // // Once we've preloaded basic content,
      // // - Try to authenticate based on existing token
      // this.props.login()
      // // Logged in, show index screen
        // .then(() => Actions.app({ type: 'reset' }))
      // // Not Logged in, show Login screen
        // .catch(() => Actions.authenticate({ type: 'reset' }));
    // }).catch(err => Alert.alert(err.message));
  }

  render = () => (
    <View style={{ flex: 1, backgroundColor: '#eee' }}>
      <View
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Image
          style={{
            flex: 1,
            alignSelf: 'stretch',
            width: undefined,
            height: undefined,
          }}
          source={require('../../images/launch.jpg')}
        />
      </View>
      <View style={{ flex: 1 }} />
      <View
        style={{
          flex: 2,
          backgroundColor: 'transparent',
          justifyContent: 'center',
        }}
      >
        <Spinner color="black" />
        <Text style={{ textAlign: 'center' }}>Unpacking meeples...</Text>
      </View>
    </View>
  );
}

/* Export Component ==================================================================== */
export default AppLaunch;
