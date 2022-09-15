import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './pages/Header';
import News from './pages/News';
import News2 from './pages/News2';
import Athletes from './pages/Athletes';
import Sports from './pages/Sports';
import Live from './pages/Live';
import Login from './pages/Login';
import Signup from './pages/Signup';


function App() {

  return (
<div>
 
    <Router>
      <Routes>
      <Route exact path="/" element={< Header/>} />
        <Route exact path="/news" element={<News />} />
        <Route exact path="/news2" element={<News2 />} />
        <Route exact path="/athletes" element={<Athletes />} />
        <Route exact path="/sports" element={<Sports />} />
        <Route exact path="/live" element={<Live />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Signup />} />
        
      </Routes>
    </Router>
    </div>
  );
};

export default App;


