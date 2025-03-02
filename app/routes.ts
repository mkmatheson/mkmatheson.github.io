import { type RouteConfig, index, route } from '@react-router/dev/routes';

export default [
  index('./chord-generator/src/App.tsx'),
  route('chord-generator', 'routes/toe-touching.tsx')
  //   index('routes/toe-touching.tsx'),
  //   route('chord-generator', './chord-generator/src/App.tsx')
] satisfies RouteConfig;
