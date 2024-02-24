// Filename - App.js
import "./App.css";

function App() {
  return (
    <div className="App">
      <nav id="nav">
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#news">News</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li class="alogo">
            <img
            class="logo"
              src="https://www.gracevalleycollege.com/images/logo.jpg"
              alt=""
            />
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default App;
