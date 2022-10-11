import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './pages/Header';
import News from './pages/News';
import News2 from './pages/News2';
import Athletes from './pages/Athletes';
import Sports from './pages/Sports';
import Live from './pages/Live';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Medals from './pages/Medals';
import Events from './pages/Events';
import SignupUpdate from './Update/SignupUpdate';
import AthletesUpdate from './Update/AthletesUpdate';
import MedalsUpdate from './Update/MedalsUpdate';
import GoLive from './pages/GoLive';
import GuestLive from './pages/GuestLive';
import WatchLive from './pages/WatchLive';

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
        <Route exact path="/medals" element={<Medals />} />
        <Route exact path="/events" element={<Events />} />     
        <Route exact path="/user/:id" element={<SignupUpdate />} /> 
        <Route exact path="/athlete/:id" element={<AthletesUpdate />}/>  
        <Route exact path="/medal/:id" element={<MedalsUpdate />} />
        <Route exact path="/golive" element={<GoLive />} />
        <Route exact path="/live.html" element={<WatchLive />} />
        <Route exact path="/nolive" element={<GuestLive />} />
      </Routes>
    </Router>
    </div>
  );
};

export default App;


