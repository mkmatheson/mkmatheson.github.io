import { type RouteConfig, index, route } from '@react-router/dev/routes';

export default [
  index('./App.tsx'),
  // route('daily-goals', './daily-goals/src/App.tsx'),
  route('chord-generator', './chord-generator/src/App.tsx'),
  route('guitar-note-guesser', './guitar-note-guesser/src/App.tsx'),
  route('daily-set', './components/DailyChord.tsx')
] satisfies RouteConfig;
