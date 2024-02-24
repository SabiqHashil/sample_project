// Filename - App.js
import "./App.css";

function App() {
  return (
    <div className="App">
     <nav id="nav">
        <div class="navTop">
          <div class="navItem1">
            <h1>GVC Student Records</h1>
            <a class="prefrontpage" href="home.jsx">
              <i class="fas fa-chevron-left"></i>Home
            </a>
            <a class="prefrontpage" href="previous-page.html">
              <i class="fas fa-chevron-left"></i> Previous Page
            </a>
            <a  class="prefrontpage" href="next-page.html">
              Next Page <i class="fas fa-chevron-right"></i>
            </a>
          </div>

          <div class="navItem3">
           
          </div>

          <div class="navItem2">
            <img class="adminicon" src="https://images.shiksha.com/mediadata/images/1591177136phplF67P8.jpeg" alt="" />
          </div>
        </div>
      </nav>
    </div>
  );
}

export default App;
