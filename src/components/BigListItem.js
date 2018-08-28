import React from 'react';
import { StyleSheet, View } from 'react-native';
import {
  ListItem,
  Text,
} from 'native-base';
import PropTypes from 'prop-types';

//  Set a hex color, but add opacity. Useful for quickly checking layouts.
const col = val => (`#${val}00`);

const styles = StyleSheet.create({
  listItem: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: col('ffff00'),
  },
  listMiddle: {
    paddingLeft: 12,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: col('00ff00'),
  },
});

const BigListItem = (props) => {
  const {
    leftContent,
    text,
    rightContent,
    rightStyle,
    ...rest
  } = props;

  return (
    <ListItem {...rest}>
      <View style={styles.listItem}>
        <View style={{ flex: 0, backgroundColor: col('ff0000') }}>
          { leftContent }
        </View>
        <View style={styles.listMiddle}>
          <Text style={{ textAlign: 'left' }}>{text}</Text>
        </View>
        <View style={rightStyle}>
          { rightContent }
        </View>
      </View>
    </ListItem>
  );
};

BigListItem.propTypes = {
  leftContent: PropTypes.node,
  rightContent: PropTypes.node,
  rightStyle: PropTypes.shape({}),
  text: PropTypes.string.isRequired,
};

BigListItem.defaultProps = {
  leftContent: null,
  rightContent: null,
  rightStyle: null,
};

export default BigListItem;
