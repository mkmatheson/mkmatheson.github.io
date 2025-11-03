import { entries } from './const';

const App = () => {
  let prevDate: string | Date = '';
  return (
    <div>
      {entries.map((entry) => {
        const date = new Date(entry.timestamp);
        const dateString = date.toDateString();
        let dateHeader: any = '';
        if (prevDate !== dateString) {
          prevDate = dateString;
          dateHeader = <h1>{dateString}</h1>;
        }
        return (
          <div>
            <h1 style={{ fontSize: '20px' }}>
              <strong>{dateHeader}</strong>
            </h1>
            <h3>
              <strong>{new Date(entry.timestamp).toLocaleTimeString()}</strong>
            </h3>
            <div>{entry.entry}</div>
            <br />
          </div>
        );
      })}
    </div>
  );
};

export default App;
