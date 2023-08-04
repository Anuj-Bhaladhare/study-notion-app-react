import { Route, Router } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <Router>
           <Route path='/' element={<Home />}/>
           <Route path='/dashboard' element={<Dashboard />}/>
           <Route path='/login' element={<Login />}/>
           <Route path='/signup' element={<Signup />}/>
        </Router>
      </div>
    </div>
  );
}

export default App;
