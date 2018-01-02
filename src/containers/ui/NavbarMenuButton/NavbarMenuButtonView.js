/**
 * Navbar Menu Button
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */
import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const hitSlopRange = {
  top: 7,
  right: 7,
  botton: 7,
  left: 7,
};

const NavbarMenuButton = ({ toggleSideMenu, user }) => (
  <TouchableOpacity
    onPress={toggleSideMenu}
    activeOpacity={0.7}
    style={{ top: -2 }}
    hitSlop={hitSlopRange}
  >
    <Icon name={(user && user.email) ? 'ios-contact' : 'ios-contact-outline'} size={30} color="#FFF" />
  </TouchableOpacity>
);

NavbarMenuButton.propTypes = {
  toggleSideMenu: PropTypes.func.isRequired,
  user: PropTypes.shape({
    email: PropTypes.string,
  }),
};

NavbarMenuButton.defaultProps = {
  user: null,
};

/* Export Component ==================================================================== */
export default NavbarMenuButton;
