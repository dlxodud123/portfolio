import logo from './logo.svg';
import './App.css';
import {Route, Routes} from 'react-router-dom';
import Potfolio from './potfolio';
import Header from './header';
function App() {
  return (
    <>
    <Routes>
      <Route path='/potfolio' element={<Potfolio></Potfolio>}></Route>
    </Routes>
    </>
  );
}

export default App;
