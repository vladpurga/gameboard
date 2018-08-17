/* global it expect */
import loadingMessage from './loading-message';

it('should be able to return a loading message', () => {
  const message = loadingMessage();
  expect(message).not.toEqual(null);
});
