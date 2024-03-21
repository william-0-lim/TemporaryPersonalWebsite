import './App.css';
import RoundAppBar from './components/AppBar';

function App() {
  return (
    <div className="App">
      <div className="appBar">
        <RoundAppBar />
      </div>

      <header className="App-header">
        <div class="introText">
            <h1>Hi, I'm William.</h1>
            <p>Software Developer</p>
            <p>University of British Columbia: B.SC. in Computer Science</p>
            <p1>“Copy-and-Paste was programmed by programmers for programmers actually.”</p1>
        </div>

      </header>
    </div>
  );
}

export default App;
