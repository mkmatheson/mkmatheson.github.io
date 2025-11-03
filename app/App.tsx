import { entries } from './const';

const App = () => {
  return (
    <div>
      {entries.map((entry) => {
        return (
          <div>
            <h2>{entry.timestamp.toString()}</h2>
            <div>{entry.entry}</div>
          </div>
        );
      })}
    </div>
  );
};
