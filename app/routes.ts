import { type RouteConfig, index, route } from '@react-router/dev/routes';

export default [
  index('./toe-touching/toe-touching.tsx'),
  route('chord-generator', './chord-generator/src/App.tsx')
] satisfies RouteConfig;
