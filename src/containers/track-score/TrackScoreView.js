/**
 * Track Score View
 *  - Contains a multi-screen form to let the user track the score for a game.
 */
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
} from 'react-native';

// Consts and Libs
import { AppStyles } from '@theme/';

// Containers
import WhatGame from './WhatGameContainer';
import WhoPlayed from './WhoPlayedContainer';

const styles = StyleSheet.create({
  // Tab Styles
  tabContainer: {
    flex: 1,
    marginLeft: 30,
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
  }

  static defaultProps = {
  }

  constructor() {
    super();

    this.nextPage = this.nextPage.bind(this);
    this.previousPage = this.previousPage.bind(this);

    this.state = {
      page: 1,
    };
  }

  componentWillReceiveProps() {
  }

  nextPage(values) {
    console.log('next page', values);
    this.setState({ page: this.state.page + 1 });
  }

  previousPage(values) {
    console.log('previous page', values);
    this.setState({ page: this.state.page - 1 });
  }

  render = () => {
    const { page } = this.state;

    return (
      <View style={styles.tabContainer}>
        <ScrollView
          automaticallyAdjustContentInsets={false}
          style={[AppStyles.container]}
        >
          { page === 1 &&
          <WhatGame onSubmit={this.nextPage} />
          }
          { page === 2 &&
          <WhoPlayed
            onSubmit={this.nextPage}
            previousPage={this.previousPage}
          />
          }

        </ScrollView>
      </View>
    );
  }
}

export default TrackScore;
