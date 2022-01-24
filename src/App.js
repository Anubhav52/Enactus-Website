import HomeScreen from './screens/HomeScreen';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Milan from './screens/Milan';
import { Swajal } from './screens/Swajal';
import About from './components/About';
import Unnati from './screens/Unnati';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomeScreen />} />
        <Route path='/milan' element={<Milan />} />
        <Route path='/swajal' element={<Swajal />} />
        <Route path='/about' element={<About />} />
        <Route path='/unnati' element={<Unnati />} />
      </Routes>
    </Router>
  );
}

export default App;
