import './App.css';
import BigSnakes from './components/bigSnakes';
import SmallSnakes from './components/littlesnakes';

function App() {
  return (
    <div className="App">
      <h1>Hello Snake fans!</h1>
      <div className='container'>
      <BigSnakes/>
      <SmallSnakes/>
      </div>

    </div>
  );
}

export default App;
