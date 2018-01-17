import React, { Component } from 'react';
import {
  View,
  Image,
  StatusBar,
} from 'react-native';
import { Spinner, Text } from 'native-base';

class Launch extends Component {
  static componentName = 'Launch';

  static propTypes = {
  }

  componentDidMount = () => {
    // Show status bar on app launch
    StatusBar.setHidden(false, true);
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

export default Launch;
