import { type RouteConfig, index, route } from '@react-router/dev/routes';

export default [
  index('./App.tsx'),
  route('toe-touching', './toe-touching/toe-touching.tsx'),
  route('chord-generator', './chord-generator/src/App.tsx'),
  route('guitar-note-guesser', './guitar-note-guesser/src/App.tsx'),
] satisfies RouteConfig;
