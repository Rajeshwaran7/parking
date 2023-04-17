import './App.css';
import Navbar from './Nav/Navbar';
import Login from './Login/Login';
import Register from './Register/Register';
import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import AddSlot from './Slot/AddSlot';
import ShowView from './Slot/SlotView';
import Admin from './Admin/Admin';
import AdminNav from './Admin/AdminNav';
function App() {
  return (
    <Router>
        <Navbar />
         <AdminNav />   
  <Routes>
    <Route path='/add-slot' element={<AddSlot />}/>
    <Route path='/show-slot' element={<ShowView />}/>
    <Route path='/login' element={<Login />}/>
    <Route path='/register' element={<Register />}/>
    <Route path='/admin' element={<Admin />} />
  </Routes>
    </Router>


  );
}

export default App;
