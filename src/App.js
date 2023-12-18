import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from './components/Dashboard';
import Logout from './components/Logout';
import About from './components/About';
import Membership from './components/Membership';
import Technology from './components/Technology';
import Project from './components/Project';
import CreateProject from './components/CreateProject';
import Module from './components/Module';
import Scrolltotop from './Scrolltotop';
import Signin from './components/Signin';
import Signup from './components/Signup';


function App() {
  return (
    <div className="App"> 
      <Router>
      <Scrolltotop/>
        <Routes>
          <Route path='/' element={<Signin/>}/>
          <Route path='/Signup' element={<Signup/>}/>
          <Route path='/Dashboard' element={<Dashboard/>}/>
          <Route path='/Logout' element={<Logout/>}/>
          <Route path='/About' element={<About/>}/>
          <Route path='/Membership' element={<Membership/>}/>
          <Route path='/Technology' element={<Technology/>}/>
          <Route path='/Module' element={<Module/>}/>
          <Route path='/Project' element={<Project/>}/>
          <Route path='/CreateProject' element={<CreateProject/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
