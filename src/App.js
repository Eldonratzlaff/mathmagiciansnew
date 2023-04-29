import './App.css';
import calculator from './components/calculator';
import Quotes from './components/quotes';

const App = () => (
  <div className="App">
    <header className="App-header">
      {calculator()}

      <Quotes />
    </header>
  </div>
);

export default App;
