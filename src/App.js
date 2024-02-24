// Filename - App.js
import "./App.css";

// Example of a data array that
// you might receive from an API
const data = [
  {
    si: "1",
    paper: "English",
    attendence: "95%",
    seminar: "pass",
    assignment: "pass",
    internal: "pass",
    total: "100%",
  },
  {
    si: "2",
    paper: "Transaction",
    attendence: "95%",
    seminar: "pass",
    assignment: "pass",
    internal: "pass",
    total: "100%",
  },
  {
    si: "3",
    paper: "Foundation",
    attendence: "95%",
    seminar: "pass",
    assignment: "pass",
    internal: "pass",
    total: "100%",
  },
  {
    si: "4",
    paper: "HTMl",
    attendence: "95%",
    seminar: "pass",
    assignment: "pass",
    internal: "pass",
    total: "100%",
  },
  {
    si: "5",
    paper: "Malayalam",
    attendence: "95%",
    seminar: "pass",
    assignment: "pass",
    internal: "pass",
    total: "100%",
  },
  {
    si: "6",
    paper: "Discrete",
    attendence: "95%",
    seminar: "pass",
    assignment: "pass",
    internal: "pass",
    total: "100%",
  },
];

function App() {
  return (
    <div className="App">

      <h2>Semester VI</h2>
      <table className="center">
        <tr>
          <th>SI No.</th>
          <th>Name of the Paper</th>
          <th>Attendence</th>
          <th>Seminar</th>
          <th>Assignment</th>
          <th>Internal Exam</th>
          <th>Total</th>
        </tr>
        {data.map((val, key) => {
          return (
            <tr key={key}>
              <td>{val.si}</td>
              <td>{val.paper}</td>
              <td>{val.attendence}</td>
              <td>{val.seminar}</td>
              <td>{val.assignment}</td>
              <td>{val.internal}</td>
              <td>{val.total}</td>
            </tr>
          );
        })}
      </table>

      
    </div>
  );
}

export default App;
