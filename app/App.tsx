import { entries } from './const';

const App = () => {
  return (
    <div>
      {entries.map((entry) => {
        return (
          <div>
            <h2>
              <strong>{new Date(entry.timestamp).toLocaleString()}</strong>
            </h2>
            <div>{entry.entry}</div>
            <br />
          </div>
        );
      })}
    </div>
  );
};

export default App;
