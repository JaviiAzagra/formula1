
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import DriverDetail from './components/DriverDetail/DriverDetail';
import Navbar from './components/Navbar/Navbar';
import TeamDetail from './components/TeamDetail/TeamDetail';
import Upnavbar from './components/Upnavbar/Upnavbar';
import Drivers from './pages/Drivers/Drivers';
import Teams from './pages/Teams/Teams';

function App() {
  return (
    <div className="App">
        <Upnavbar/>
        <Navbar/>
        <Routes>
          <Route path="/drivers" element={<Drivers/>}/>
          <Route path="/teams" element={<Teams/>}/>
          <Route path='/drivers/:id' element={<DriverDetail/>}/>
          <Route path='/teams/:id' element={<TeamDetail/>}/>
        </Routes>
    </div>
  );
}

export default App;
