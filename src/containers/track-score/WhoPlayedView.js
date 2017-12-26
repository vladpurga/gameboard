/**
 * Who Played View
 *  - Used to select who played in the game which you are tracking a score for.
 */
import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Field, FieldArray, reduxForm } from 'redux-form';
import { Button, H1, Icon } from 'native-base';
import PropTypes from 'prop-types';

import { Spacer, WizardPage } from '@components/ui/';


import validate from './validate';
import renderInput from './render-input';

const styles = StyleSheet.create({
  playerContainer: {
    padding: 8,
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
      id: Math.random(),
      name: `Player ${fields.length + 1}`,
      rank: null,
    };

    return (
      <View>
        {fields.map((player, index) =>
          (
            <View style={styles.playerContainer} key={fields.get(index).id}>
              <View style={{ flexDirection: 'row' }}>
                <View style={{ flex: 1 }}>
                  <Field
                    name={`${player}.name`}
                    type="text"
                    component={renderInput}
                    placeholder="Player Name"
                  />
                </View>
                <View style={{ flex: 0 }}>
                  <Button
                    transparent
                    light
                    onPress={() => fields.remove(index)}
                  >
                    <Icon name="trash" style={{ fontSize: 32, color: 'black' }} />
                  </Button>
                </View>
              </View>
            </View>
          ),
        )}
        <Button
          rounded
          light
          style={{ margin: 20, alignSelf: 'center' }}
          onPress={() => fields.push(newPlayer)}
        >
          <Icon name="add" style={{ fontSize: 32, color: 'black' }} />
        </Button>
      </View>
    );
  }

  render = () => {
    const { handleSubmit, previousPage, game } = this.props;

    return (
      <WizardPage
        onPrevious={previousPage}
        onNext={handleSubmit}
      >
        <H1>Who Played {game}?</H1>
        <Spacer size={20} />
        <FieldArray name="players" component={this.renderPlayers} />
      </WizardPage>
    );
  }
}

export default reduxForm({
  form: 'trackScore',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount

  validate,
})(WhoPlayed);

