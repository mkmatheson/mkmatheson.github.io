import { useEffect, useState } from 'react';

const App = () => {
  const [data, setData] = useState<{ timestamp: string; entry: string }[]>([]);

  useEffect(() => {
    let ignore = false;
    console.log(process.env.NODE_ENV);
    if (process.env.NODE_ENV === 'development' && !ignore) {
      import('./data/journal.json').then((data) => {
        if (data['default']) {
          setData(data['default'] as { timestamp: string; entry: string }[]);
        }
      });
      return () => {
        ignore = true;
      };
    }
    fetch('https://cdn.jsdelivr.net/gh/mkmatheson/data@latest/journal.json')
      .then((response) => response.json())
      .then((json) => {
        if (!ignore) {
          setData(json);
        }
      });
    return () => {
      ignore = true;
    };
  }, []);

  let prevDate: string | Date = '';
  return (
    <div>
      {data.map((entry) => {
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
