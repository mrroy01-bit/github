import './App.css'
import { Route, Routes } from 'react-router-dom'
import '../src/assets/Animation.css'

import Home from './Pages/Home'
import SinIn from './Pages/SinIn';
import SinUp from './Pages/SinUp';

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<SinIn />} />
      <Route path='/sinup' element={<SinUp />} />

    </Routes>
    </>
  );
}

export default App
