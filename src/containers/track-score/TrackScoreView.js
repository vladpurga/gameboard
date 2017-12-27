/**
 * Track Score View
 *  - Contains a multi-screen form to let the user track the score for a game.
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  View,
} from 'react-native';

// Containers
import WhatGame from './WhatGameContainer';
import WhoPlayed from './WhoPlayedContainer';
import WhoWon from './WhoWonContainer';
import AddScores from './AddScoresContainer';
import AllDone from './AllDoneView';

const styles = StyleSheet.create({
  // Tab Styles
  tabContainer: {
    flex: 1,
    marginTop: 30,
  },
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

class TrackScore extends Component {
  static componentName = 'TrackScore';

  static propTypes = {
    trackScore: PropTypes.func.isRequired,
  }

  static defaultProps = {
  }

  constructor() {
    super();

    this.state = {
      page: 1,
    };
  }

  componentWillReceiveProps() {
  }

  nextPage = (values) => {
    console.log('next page', values);
    this.setState({ page: this.state.page + 1 });
  }

  previousPage = (values) => {
    console.log('previous page', values);
    this.setState({ page: this.state.page - 1 });
  }

  handleSubmit = (values) => {
    console.log('submit', values);
    this.props.trackScore(values);
    this.setState({ done: true, game: values.game, page: null });
  }

  render = () => {
    const { done, game, page } = this.state;

    return (
      <View style={styles.tabContainer}>
        { done === true &&
        <AllDone game={game} />
        }
        { page === 1 &&
        <WhatGame onSubmit={this.nextPage} />
        }
        { page === 2 &&
        <WhoPlayed
          onSubmit={this.nextPage}
          previousPage={this.previousPage}
        />
        }
        { page === 3 &&
        <WhoWon
          onSubmit={this.nextPage}
          previousPage={this.previousPage}
        />
        }
        { page === 4 &&
        <AddScores
          onSubmit={this.handleSubmit}
          previousPage={this.previousPage}
        />
        }
      </View>
    );
  }
}

export default TrackScore;
