
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import FavList from './components/FavList/FavList';
import  Navbar2  from './components/Navbar/Navbar';

function App() {
  return (
    <div className='App'>
       <Navbar2/>

      <Routes>
        <Route path='/' exact element={<Home />} />
         <Route path='/FavList' exact element={<FavList/>} />ath


      </Routes>
    </div>
  );
}

export default App;
