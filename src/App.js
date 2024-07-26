import logo from './logo.svg';
import './App.css';
import {Route, Routes} from 'react-router-dom';
import Potfolio from './potfolio';
function App() {
  return (
    <>
    <h1>리액트 프로젝트 배포 김준형</h1>
    <Routes>
<Route path='/potfolio' element={<Potfolio></Potfolio>}></Route>
    </Routes>
    </>
  );
}

export default App;
