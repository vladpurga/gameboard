/**
 * Authenticate Screen
 *  - Entry screen for all authentication
 *  - User can tap to login, forget password, signup...
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */
import React, { Component } from 'react';
import {
  View,
  Image,
  StyleSheet,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { GoogleSignin, GoogleSigninButton } from 'react-native-google-signin';

// Consts and Libs
import { AppStyles, AppSizes, AppColors } from '@theme/';

// Components
import { JumboButton, Spacer, Text, Button } from '@ui/';

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

/* Component ==================================================================== */
class Authenticate extends Component {
  static componentName = 'Authenticate';

  googleSignIn = async () => {
    //  Ensure we have Google Play Services available, prompting the user to
    //  install if needed. If we still fail, we cannot recover.
    try {
      await GoogleSignin.hasPlayServices({ autoResolve: true });
    } catch (err) {
      console.log('Play services error', err.code, err.message);
      throw err;
    }

    //  Configure Sign In - the fields we want etc.
    await GoogleSignin.configure({
      iosClientId: '<FROM DEVELOPER CONSOLE>', // only for iOS
    });

    //  Get the current user, which might already be available if we are already
    //  logged in. If the user is already signed in, we can store the user and
    //  we're done.
    const currentUser = await GoogleSignin.currentUserAsync();
    if (currentUser) {
      return currentUser;
    }

    //  We don't have a current user, so we need to sign in.
    try {
      const user = await GoogleSignin.signIn();
      return user;
    } catch (err) {
      console.log('Sign in error', err.code, err.message);
      throw err;
    }
  }

  render = () => (
    <View style={[AppStyles.containerCentered, AppStyles.container, styles.background]}>
      <Image
        source={require('../../images/logo.png')}
        style={[styles.logo]}
      />

      <View style={[AppStyles.row, AppStyles.paddingHorizontal]}>
        <View style={[AppStyles.flex1]}>
          <JumboButton
            title="Track Score"
            subtitle="Record the result of a game"
            onPress={Actions.trackScore}
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

      <GoogleSigninButton
        style={{ width: 48, height: 48 }}
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
        onPress={this.googleSignIn}
      />

      <Spacer size={10} />

      <View style={[AppStyles.row, AppStyles.paddingHorizontal]}>
        <View style={[AppStyles.flex1]}>
          <Button
            title="Login"
            icon={{ name: 'lock' }}
            onPress={Actions.login}
            backgroundColor="#CB009E"
          />
        </View>
      </View>

      <Spacer size={10} />

      <View style={[AppStyles.row, AppStyles.paddingHorizontal]}>
        <View style={[AppStyles.flex1]}>
          <Button
            title="Sign up"
            icon={{ name: 'face' }}
            onPress={Actions.signUp}
            backgroundColor="#CB009E"
          />
        </View>
      </View>

      <Spacer size={15} />

      <Text p style={[AppStyles.textCenterAligned, styles.whiteText]}>
        - or -
      </Text>

      <Spacer size={10} />

      <View style={[AppStyles.row, AppStyles.paddingHorizontal]}>
        <View style={[AppStyles.flex1]} />
        <View style={[AppStyles.flex2]}>
          <Button
            small
            title="Skip"
            onPress={Actions.app}
            raised={false}
            backgroundColor="rgba(255,255,255,0.2)"
          />
        </View>
        <View style={[AppStyles.flex1]} />
      </View>

      <Spacer size={40} />
    </View>
  )
}

/* Export Component ==================================================================== */
export default Authenticate;
