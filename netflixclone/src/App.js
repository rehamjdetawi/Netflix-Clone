
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home'
function App() {
  return (
    <div className='App'>

      <Routes>
        <Route path='/trending' exact element={<Home />} />


      </Routes>
    </div>
  );
}

export default App;
