/**
 * Who Played View
 *  - Used to select who played in the game which you are tracking a score for.
 */
import React, { Component } from 'react';
import { FieldArray, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  View,
  TouchableOpacity,
} from 'react-native';

// Components
import {
  Text,
  Card,
} from '@components/ui/';

import validate from './validate';

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'blue',
    color: 'white',
    height: 30,
    lineHeight: 30,
    marginTop: 10,
    textAlign: 'center',
    width: 250,
  },
  input: {
    borderColor: 'black',
    borderWidth: 1,
    height: 37,
    width: 250,
  },
});

class WhoPlayed extends Component {
  static componentName = 'WhoPlayed';

  static propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    previousPage: PropTypes.func.isRequired,
    game: PropTypes.string.isRequired,
  }

  static defaultProps = {
  }

  componentWillReceiveProps() {
  }

  renderPlayers = ({ fields }) => {
    //  If you press 'add player', this is wht you add...
    const newPlayer = {
      name: `Player ${fields.length + 1}`,
    };

    return (
      <View>
        <TouchableOpacity onPress={() => fields.push(newPlayer)}>
          <Text style={[styles.button]}>Add Player</Text>
        </TouchableOpacity>
        {fields.map(player =>
          (<Card title={player.name}>
            <View>
              <Text h1>{player.name}</Text>
              <Text>Name: { player.name }</Text>
            </View>
          </Card>),
        )}
      </View>
    );
  }

  render = () => {
    const { handleSubmit, previousPage, game } = this.props;

    return (
      <View>
        <Text h1>Who Played {game}?</Text>
        <FieldArray name="players" component={this.renderPlayers} />
        <TouchableOpacity onPress={handleSubmit}>
          <Text style={[styles.button]}>Next</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={previousPage}>
          <Text style={[styles.button]}>Back</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default reduxForm({
  form: 'trackScore',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount

  validate,
})(WhoPlayed);

