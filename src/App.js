import React from 'react';
import Topbar from './components/topbar/Topbar';
import Sidebar from './components/sidebar/Sidebar';
import './app.css';
import { Route,  BrowserRouter as Router, Routes} from "react-router-dom";
import Home from './pages/home/Home';
import UserList from "./pages/userList/UserList";
import User from './pages/user/User';
import NewUser from './pages/newUser/NewUser';


function App() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/users" element={<UserList/>} />
          <Route path="/user/:userId" element={<User/>} />
          <Route path="/newUser" element={<NewUser/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;