import Homepage from './pages/Homepage';
import { Link } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div className="App">
    <Link to={Homepage} />
    </div>
  );
}

export default App;
