import './App.css';

function App() {
  return (
    <div className="App">
      <h1>React Selenium Jenkins</h1>
      <p id="message">Welcome to the React application!</p>

      <button onClick={() => alert('Button clicked successfully!')}>
        Click Me
      </button>
    </div>
  );
}

export default App;