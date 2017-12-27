/**
 * All Done View
 *  - Confirmation page for the 'track score' flow, offering options to view
 *    game stats or go back to the home page.
 */
import React from 'react';
import { H1 } from 'native-base';
import PropTypes from 'prop-types';

import { JumboButton, Spacer, WizardPage } from '@components/ui/';

const AllDone = ({ game }) => (
  <WizardPage>
    <H1>All Done!</H1>
    <Spacer size={20} />
    <JumboButton title="View Stats" subtitle={`View your stats for ${game}`} />
  </WizardPage>
);

AllDone.propTypes = {
  game: PropTypes.string.isRequired,
};

export default AllDone;

