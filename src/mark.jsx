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
    gobtained: "A+",
    gpoints: "8",
    credit: "6.8",
    cpoint: "54.5",
    status: "Passed",
  },
  {
    si: "2",
    paper: "Transaction",
    attendence: "95%",
    seminar: "pass",
    assignment: "pass",
    internal: "pass",
    total: "100%",
    gobtained: "A+",
    gpoints: "8",
    credit: "6.8",
    cpoint: "54.5",
    status: "Passed",
  },
  {
    si: "3",
    paper: "Foundation",
    attendence: "95%",
    seminar: "pass",
    assignment: "pass",
    internal: "pass",
    total: "100%",
    gobtained: "A+",
    gpoints: "8",
    credit: "6.8",
    cpoint: "54.5",
    status: "Passed",
  },
  {
    si: "4",
    paper: "HTMl",
    attendence: "95%",
    seminar: "pass",
    assignment: "pass",
    internal: "pass",
    total: "100%",
    gobtained: "A+",
    gpoints: "8",
    credit: "6.8",
    cpoint: "54.5",
    status: "Passed",
  },
  {
    si: "5",
    paper: "Malayalam",
    attendence: "95%",
    seminar: "pass",
    assignment: "pass",
    internal: "pass",
    total: "100%",
    gobtained: "A+",
    gpoints: "8",
    credit: "6.8",
    cpoint: "54.5",
    status: "Passed",
  },
  {
    si: "6",
    paper: "Discrete",
    attendence: "95%",
    seminar: "pass",
    assignment: "pass",
    internal: "pass",
    total: "100%",
    gobtained: "A+",
    gpoints: "8",
    credit: "6.8",
    cpoint: "54.5",
    status: "Passed",
  },
];

const mark = () => {
  return (
    <div>
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
          <th>Grade Obtained</th>
          <th>Grade Points</th>
          <th>Credit</th>
          <th>Credit Ppoint (C x G)</th>
          <th>Status</th>
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
              <td>{val.gobtained}</td>
              <td>{val.gpoints}</td>
              <td>{val.credit}</td>
              <td>{val.cpoint}</td>
              <td class="pass">{val.status}</td>
            </tr>
          );
        })}
      </table>

      <div class="grid">
        <h3 class="sgpa">SGPA: 9.8%</h3>
        <h3 class="grade">Grade: O+</h3>
      </div>
    </div>
  );
};

export default mark;
