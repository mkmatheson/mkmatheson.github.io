import '../../app/toe-touching.css';

const currentYear = 2025;

const completedDays: { [key: number]: number[] } = {
  1: [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31
  ],
  2: [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28
  ],
  3: [1],
  4: [],
  5: [],
  6: [],
  7: [],
  8: [],
  9: [],
  10: [],
  11: [],
  12: []
};

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

const Day = ({ day, month }: { day: number; month: number }) => {
  const today = new Date();
  const classes = ['day'];
  if (
    today.getFullYear() === currentYear &&
    today.getMonth() === month &&
    today.getDate() === day
  ) {
    classes.push('today');
  }
  if (
    completedDays[month + 1].length > 0 &&
    completedDays[month + 1].includes(day)
  ) {
    classes.push('completed');
  }
  return <div className={classes.join(' ')}>{day}</div>;
};

const Month = ({
  monthName,
  monthIdx
}: {
  monthName: string;
  monthIdx: number;
}) => {
  const firstDayOfMonth = new Date(currentYear, monthIdx, 1);
  const lastDayOfMonth = new Date(currentYear, monthIdx + 1, 0);
  const numDaysInMonth = lastDayOfMonth.getDate();
  const firstDayOfWeek = firstDayOfMonth.getDay();

  return (
    <div className="month">
      <h3>{monthName}</h3>
      <div className="days">
        {Array.from({ length: firstDayOfWeek }).map((_) => (
          <div className="day" />
        ))}
        {Array.from({ length: numDaysInMonth }).map((_, day) => (
          <Day day={day + 1} month={monthIdx} />
        ))}
      </div>
    </div>
  );
};

const Calendar = () => {
  return (
    <div id="calendar">
      {months.map((monthName, idx) => (
        <Month monthName={monthName} monthIdx={idx} />
      ))}
    </div>
  );
};

const ToeTouching = () => {
  return (
    <div>
      <div>
        <h1>Did McKay Try Touching His Toes Every Day For a Full Year?</h1>
        <h3 className="subtitle">
          A red slash through the date means McKay tried touching his toes that
          day
        </h3>

        <h3 id="streak"></h3>
        <h3>Consecutive days without doomscrolling: 0</h3>
        <h3>Max no-scroll streak: 23</h3>
      </div>
      <Calendar />
    </div>
  );
};

export default ToeTouching;
