
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Navbar from './components/Navbar/Navbar';
import Drivers from './pages/Drivers/Drivers';
import Teams from './pages/Teams/Teams';

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Routes>
          <Route path="/drivers" element={<Drivers/>}/>
          <Route path="/teams" element={<Teams/>}/>
        </Routes>
    </div>
  );
}

export default App;
