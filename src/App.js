import logo from './logo.svg';
import './App.css';
import HomePage from './page/HomePage';
import { Route, Routes } from 'react-router';
import Hero from './page/Hero';
import Login from './page/Login';
import Signup from './page/Signup';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/hero' element={<Hero/>}/>


      </Routes>



    </div>
  );
}

export default App;
