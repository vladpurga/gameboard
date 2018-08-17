const messages = [
  'Unpacking meeples...',
  'Clearing space on the table...',
  'Watching ShutUpAndSitDown...',
  'Trawling through BoardGameGeek...',
];

export default function loadingMessage() {
  const index = Math.floor(Math.random() * messages.length);
  return messages[index];
}
