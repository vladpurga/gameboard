import React, { Component } from 'react';
import { ScrollView, TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux';
import {
  Container,
  Content,
  Spinner,
  Header,
  Item,
  Input,
  Icon,
  Separator,
  List,
  Button,
  Text,
} from 'native-base';
import PropTypes from 'prop-types';
import firebase from 'react-native-firebase';

import ThumbnailLink from '@components/ui/ThumbnailLink';
import BigListItem from '@components/BigListItem';

import config from '../../config';

/**
 * isFavouriteGame - given a set of favourite games, determines whether
 * the given game id is a favourite.
 *
 * @param favouriteGames - a set of favourite games.
 * @param gameId - the game id to check.
 * @returns true if the game is a favourite, false otherwise.
 */
function isFavouriteGame(favouriteGames, gameId) {
  return (favouriteGames || []).some(g => g.id === gameId);
}

const renderGame = (game) => {
  const {
    id,
    name,
    isFavourite,
    onFavourite,
    onSelect,
  } = game;
  const leftContent = (
    <View style={{ flexDirection: 'row', alignItems: 'stretch' }}>
      <TouchableOpacity style={{ justifyContent: 'center', paddingRight: 12 }} onPress={onFavourite}>
        { isFavourite
          ? <Icon style={{ fontSize: 21, color: '#fcca6a' }} type="FontAwesome" name="star" />
          : <Icon style={{ fontSize: 21, color: '#cccccc' }} type="FontAwesome" name="star-o" />
        }
      </TouchableOpacity>
      <ThumbnailLink small uri={game.id ? `${config.apiRoot}/games/${game.id}/thumbnail` : null} />
    </View>
  );
  const rightContent = (
    <Icon style={{ fontSize: 21, color: '#cccccc' }} name="arrow-forward" />
  );
  return (
    <BigListItem
      key={id}
      text={name}
      leftContent={leftContent}
      rightContent={rightContent}
      onPress={onSelect}
      style={{ height: 54 }}
    />
  );
};

class WhatGame extends Component {
  static componentName = 'WhatGame';

  static propTypes = {
    favouriteGames: PropTypes.arrayOf(PropTypes.object).isRequired,
    recentGames: PropTypes.arrayOf(PropTypes.object).isRequired,

    //  Called when the user selects a game.
    onSelectGame: PropTypes.func.isRequired,
  }

  static defaultProps = {
  }

  state = {
    loading: false,
    searchText: null,
    results: null,
  };

  search = async () => {
    this.setState(previousState => ({ ...previousState, loading: true }));

    //  Hit the search API.
    const safeSearch = this.state.searchText.replace(' ', '+');
    try {
      const response = await fetch(`https://us-central1-gameboard-560d5.cloudfunctions.net/api/search?q=${safeSearch}`);
      const { status } = response;

      //  If we don't have a valid status, set the error.
      if (status !== 200) {
        this.setState(previousState => ({
          ...previousState,
          loading: false,
          error: true,
          results: null,
        }));
        return;
      }

      //  We've got a response, add each result to the list.
      const data = await response.json();
      const results = data.map(d => d);
      this.setState(previousState => ({
        ...previousState,
        loading: false,
        results,
      }));
    } catch (err) {
      //  TODO error toast.
      this.setState(previousState => ({
        ...previousState,
        loading: false,
        error: true,
        results: null,
      }));
    }
  }

  toggleFavourite = (game) => {
    const {
      uid,
    } = firebase.auth().currentUser;

    const add = this.props.favouriteGames.some(fg => fg.id === game.id) === false;

    firebase.firestore()
      .collection('users')
      .doc(uid)
      .update({
        favouriteGames: add
          ? [...this.props.favouriteGames, game]
          : [...this.props.favouriteGames.filter(fg => fg.id !== game.id)],
      });
  }

  renderRecent = (recent) => {
    if (!recent) return null;

    return (
      <View>
        <Separator bordered>
          <Text>Recent</Text>
        </Separator>
        {recent.map(game => renderGame({
          id: game.id,
          name: game.name,
          isFavourite: game.isFavourite,
          onFavourite: () => this.toggleFavourite(game),
          onSelect: () => this.props.onSelectGame(game),
        })) }
      </View>
    );
  }

  renderFavourites = (favourites) => {
    if (!favourites) return null;
    return (
      <View>
        <Separator bordered>
          <Text>Favourites</Text>
        </Separator>
        {favourites.map(game => renderGame({
          id: game.id,
          name: game.name,
          isFavourite: true,
          onFavourite: () => this.toggleFavourite(game),
          onSelect: () => this.props.onSelectGame(game),
        })) }
      </View>
    );
  }

  renderResults = (favouriteGames, results, loading) => {
    if (!results && !loading) return null;
    return (
      <View>
        <Separator bordered>
          <Text>Results</Text>
        </Separator>
        { loading && <Spinner /> }
        { results && results.map(game => renderGame({
          id: game.id,
          name: game.name,
          isFavourite: isFavouriteGame(favouriteGames, game.id),
          onFavourite: () => this.toggleFavourite(game),
          onSelect: () => this.props.onSelectGame(game),
        })) }
      </View>
    );
  }

  renderError = () => {
    if (!this.state.error) return null;
    return <Text>An error occured: {this.state.error}</Text>;
  }

  render = () => {
    const { favouriteGames, recentGames } = this.props;
    const { results, loading } = this.state;

    return (
      <Container>
        <Header searchBar rounded>
          <Item>
            <Input
              placeholder="Search"
              onChangeText={searchText => this.setState(s => ({ ...s, searchText }))}
              value={this.state.searchText}
            />
          </Item>
          <Button transparent onPress={() => this.search()}>
            <Text>Search</Text>
          </Button>
        </Header>
        <ScrollView>
          <Content>
            <List>
              { this.renderResults(favouriteGames, results, loading) }
              { this.renderFavourites(favouriteGames) }
              { this.renderRecent(recentGames) }
            </List>
            { this.renderError() }
          </Content>
        </ScrollView>
      </Container>
    );
  }
}

function mapStateToProps(state) {
  //  Get the recent games. While we're at it, check if they are favourites.
  const { favouriteGames } = state.user;
  const recentGameIds = [];
  const recentGames = [];
  state.history.playedGames.forEach((playedGame) => {
    const { id, name } = playedGame.game;
    if (recentGameIds.indexOf(id) !== -1 || id === undefined) return;
    //  We don't need to show recent games if they are already faves.
    if (isFavouriteGame(favouriteGames, id)) return;
    recentGameIds.push(id);
    recentGames.push({
      id,
      name,
    });
  });

  return {
    favouriteGames: favouriteGames.sort((g1, g2) => (g1.name.localeCompare(g2.name))),
    recentGames: recentGames.sort((g1, g2) => (g1.name.localeCompare(g2.name))),
  };
}

export default connect(mapStateToProps)(WhatGame);
