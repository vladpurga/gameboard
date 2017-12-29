import moment from 'moment';

export default function gameStats(playedGames) {
  const total = playedGames.length;

  //  Get the most recent timestamp.
  const mostRecentTimestamp = playedGames.reduce((acc, val) => {
    if (val.createdAt > acc) return val.createdAt;
    return acc;
  }, 0);

  const mostRecent = mostRecentTimestamp === 0
    ? 'Never'
    : moment.unix(mostRecentTimestamp / 1000).fromNow();

  return {
    played: total,
    lastPlayed: mostRecent,
  };
}
