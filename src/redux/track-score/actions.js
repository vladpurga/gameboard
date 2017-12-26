/**
 * Track Score Actions
 */
import { Firebase, FirebaseRef } from '@constants/';

export function trackScore(gameResult) {
  // if (Firebase === null) return () => new Promise(resolve => resolve());
  const currentUser = Firebase.auth().currentUser;
  const UID = currentUser ? currentUser.uid : null;

  const playedGame = {
    ...gameResult,
    uidScorer: UID,
  };

  const ref = FirebaseRef.child('played-games');
  ref.push(playedGame);

  return {
    type: 'TRACK_SCORE',
    playedGame,
  };
}

export function noop() { }
