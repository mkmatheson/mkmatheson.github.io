import { type RouteConfig, index, route } from '@react-router/dev/routes';

export default [
  index('routes/toe-touching.tsx'),
  route('chord-generator', './chord-generator/src/App.tsx')
] satisfies RouteConfig;
