import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <div id="logo">
          <p id="logoText">beauBarrier</p>
          <i id="pHolderIcon" class="fas fa-2x fa-user-astronaut"></i>
        </div>
        <div id="navLinks">
          <a href="#"><i id="portraitIcon" class="fas fa-2x  fa-portrait"></i></a>
          <a href="#"><i id="myStoryIcon" class="fas fa-2x fa-book"></i></a>
          <a href="#"><i id="githubIcon" class="fab fa-2x  fa-github"></i></a>
          <a href="#"><i id="emailIcon" class="fas fa-2x fa-at"></i></a>
        </div>
      </nav>

      <div className="mainWindow">
        <div className="main">

        </div>
      </div>
    </div>
  );
}

export default App;
