import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  StyleSheet,
} from 'react-native';
import { Actions } from 'react-native-router-flux';

// Consts and Libs
import { AppStyles, AppSizes, AppColors } from '@theme/';

// Components
import { Button } from 'native-base';
import { JumboButton, Spacer, Text } from '@ui/';

/* Styles ==================================================================== */
const styles = StyleSheet.create({
  background: {
    backgroundColor: AppColors.brand.primary,
    height: AppSizes.screen.height,
    width: AppSizes.screen.width,
  },
  logo: {
    width: AppSizes.screen.width * 0.85,
    resizeMode: 'contain',
  },
  whiteText: {
    color: '#FFF',
  },
});

class Home extends Component {
  static componentName = 'Home';

  static propTypes = {
    trackScoreStart: PropTypes.func.isRequired,
    logout: PropTypes.func.isRequired,
  }

  trackScore = () => {
    //  Blat the state for the track score flow, then move to the screen.
    this.props.trackScoreStart('Champions of Midgard');
    Actions.trackScore();
  }

  render = () => {
    const { logout } = this.props;

    return (
      <View style={[AppStyles.containerCentered, AppStyles.container, styles.background]}>
        <View style={[AppStyles.row, AppStyles.paddingHorizontal]}>
          <View style={[AppStyles.flex1]}>
            <JumboButton
              title="Track Score"
              subtitle="Record the result of a game"
              onPress={this.trackScore}
            />
          </View>
        </View>

        <Spacer size={10} />

        <View style={[AppStyles.row, AppStyles.paddingHorizontal]}>
          <View style={[AppStyles.flex1]}>
            <JumboButton
              title="Game Stats"
              subtitle="Who da best?"
              onPress={Actions.gameStats}
            />
          </View>
        </View>

        <Spacer size={10} />

        <View style={[AppStyles.row, AppStyles.paddingHorizontal]}>
          <View style={[AppStyles.flex1]}>
            <Button onPress={logout}>
              <Text>Logout</Text>
            </Button>
          </View>
        </View>
      </View>
    );
  }
}

export default Home;
