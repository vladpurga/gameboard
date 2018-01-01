/**
 * Global App Config
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */
/* global __DEV__ */
import { AppColors, AppFonts } from '@theme/';

export default {
  // App Details
  appName: 'GameBoard',

  // Build Configuration - eg. Debug or Release?
  DEV: __DEV__,

  // Google Analytics - uses a 'dev' account while we're testing
  gaTrackingId: (__DEV__) ? 'UA-84284256-2' : 'UA-84284256-1',

  // URLs
  urls: {
  },

  navbarProps: {
    navigationBarStyle: { backgroundColor: 'white' },
    titleStyle: {
      color: AppColors.textPrimary,
      alignSelf: 'center',
      letterSpacing: 2,
      fontSize: AppFonts.base.size,
    },
    backButtonTintColor: AppColors.textPrimary,
  },

  tabProps: {
    swipeEnabled: false,
    activeBackgroundColor: 'rgba(255,255,255,0.1)',
    inactiveBackgroundColor: AppColors.brand.primary,
    tabBarStyle: { backgroundColor: AppColors.brand.primary },
  },

  icons: {
    style: { color: 'white' },
  },

};
