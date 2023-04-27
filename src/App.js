import './App.css';
import calculator from './components/calculator';

const App = () => (
  <div className="App">
    <header className="App-header">
      {calculator()}

    </header>
  </div>
);

export default App;
