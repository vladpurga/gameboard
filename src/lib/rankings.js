//  rankings.js
//
//  Basic functions for dealing with rankings.

function rankedPlayers(players) {
  return players.filter(p => Number.isInteger(p.rank));
}

/**
 * nextFreeRank - given a set of players (any array of objects which contain
 * a 'rank' field) returns the next available rank. For example, if there are
 * no winners, rank '1' is returned, if there is a Winner, Second Place and
 * Third place then rank '4' is returned.
 *
 * @param players - array of objects which contain a 'rank' field.
 * @returns - the next available rank.
 */
function nextFreeRank(players) {
  //  If everyone is ranked, the only option is null (i.e. unranked).
  const ranked = rankedPlayers(players);
  if (ranked.length === players.length) return null;

  //  Otherwise the next available rank is one higher than the current highest.
  return ranked
    .reduce((acc, player) => (
      player.rank === acc ? acc + 1 : acc
    ), 1);
}

function rankName(rank) {
  switch (rank) {
    case 'null': return 'Losers';
    case '1': return 'Winners';
    case '2': return 'Second Place';
    case '3': return 'Third Place';
    case '4': return 'Fourth Place';
    case '5': return 'Fifth Place';
    case '6': return 'Sixth Place';
    case '7': return 'Seventh Place';
    case '8': return 'Eighth Place';
    case '9': return 'Ninth Place';
    case '10': return 'Tenth Place';
    default: return `Place ${rank}`;
  }
}

/**
 * rankPlayers - return the given players ordered by rank and name.
 *
 * @param players - any array of objects with a rank and name field.
 * @returns - a new collection of the players ranked by name and field.
 */
function rankPlayers(players) {
  const newArray = players.slice(0); // i.e. clone - as 'sort' is in-place
  return newArray.sort((a, b) => {
    if (a.rank === b.rank) {
      const aName = (a.name || '').toLowerCase();
      const bName = (b.name || '').toLowerCase();
      return bName - aName;
    }
    if (a.rank === null) return 1;
    if (b.rank === null) return -1;
    return b.rank < a.rank ? 1 : -1;
  });
}

module.exports = {
  rankedPlayers,
  nextFreeRank,
  rankName,
  rankPlayers,
};
