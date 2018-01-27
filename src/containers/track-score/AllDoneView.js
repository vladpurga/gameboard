/**
 * All Done View
 *  - Confirmation page for the 'track score' flow, offering options to view
 *    game stats or go back to the home page.
 */
import React from 'react';
import { H1 } from 'native-base';
import PropTypes from 'prop-types';
import { Actions } from 'react-native-router-flux';

import { JumboButton, Spacer, WizardPage } from '@components/ui/';

const AllDone = ({ game, gameStatsHandler }) => (
  <WizardPage>
    <H1>All Done!</H1>
    <Spacer size={20} />
    <JumboButton
      title={`${game} Stats`}
      subtitle={`View your stats for ${game}`}
      onPress={() => gameStatsHandler(game)}
    />

    <Spacer size={20} />
    <JumboButton
      title="Home"
      subtitle="Back to the Home Screen"
      onPress={() => Actions.home({ type: 'reset' })}
    />

  </WizardPage>
);

AllDone.propTypes = {
  game: PropTypes.string.isRequired,
  gameStatsHandler: PropTypes.func.isRequired,
};

export default AllDone;

