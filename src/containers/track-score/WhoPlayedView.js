/**
 * Who Played View
 *  - Used to select who played in the game which you are tracking a score for.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, FieldArray, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  View,
  ScrollView,
  ListView,
  RefreshControl,
  TextInput,
  TouchableOpacity
} from 'react-native';

// Consts and Libs
import { AppColors, AppStyles } from '@theme/';
import { ErrorMessages } from '@constants/';

// Containers
import RecipeCard from '@containers/recipes/Card/CardContainer';

// Components
import Error from '@components/general/Error';
import {
  Text,
  Card
} from '@components/ui/';
import validate from './validate';

const renderInput = ({ input: { onChange, ...restInput }}) => {
  return <TextInput style={styles.input} onChangeText={onChange} {...restInput} />
}

class WhoPlayed extends Component {
  static componentName = 'WhoPlayed';

  static propTypes = {
    previousPage: PropTypes.func.isRequired
  }

  static defaultProps = {
  }

  constructor() {
    super();
  }

  componentWillReceiveProps(props) {
  }

  renderPlayers({ fields }) { 

    const nextName = `Player ${fields.length + 1}`;
    
    return (
      <View>
        <TouchableOpacity onPress={() => fields.push({ name: nextName })}>
            <Text style={styles.button}>Add Player</Text>
          </TouchableOpacity>
        {fields.map((player, index) => 
          <Card title={player.name}>
            <View>
              <Text h1>Player</Text>
            </View>
          </Card>
        )}
      </View>
    );
  }

  render = () => {
    const { handleSubmit, previousPage, game } = this.props;

    return (
      <View>
          <Text h1>Who Played {game}?</Text>
          <FieldArray name="players" component={this.renderPlayers}/>
          <TouchableOpacity onPress={handleSubmit}>
            <Text style={styles.button}>Next</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={previousPage}>
            <Text style={styles.button}>Back</Text>
          </TouchableOpacity>
      </View>
    );
  }
}

export default reduxForm({
  form: 'trackScore',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount

  validate
})(WhoPlayed);

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'blue',
    color: 'white',
    height: 30,
    lineHeight: 30,
    marginTop: 10,
    textAlign: 'center',
    width: 250
  },
  input: {
    borderColor: 'black',
    borderWidth: 1,
    height: 37,
    width: 250
  }
})
