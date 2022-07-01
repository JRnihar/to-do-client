import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Home/Footer';
import Home from './Components/Home/Home';


// import Login from './Components/Login/Login/Login';
// import Login from './Components/Home/Login';
import Header from './Components/Navbar/Header';
import EditTask from './Components/TodoFrom/EditTask';

import ToData from './Components/TodoFrom/ToData';
import TodoFrom from './Components/TodoFrom/TodoFrom';

function App() {
  return (
    <div >

      <Header></Header>
      <Routes>
        <Route path='/home' element={
          
            <Home></Home>
          
        }></Route>
        <Route path='editTask/:id' element={<EditTask></EditTask>}></Route>
       
        <Route path='/todoFrom' element={
         
            <TodoFrom></TodoFrom>
         
        }></Route>
        <Route path='/todoData' element={
         
            <ToData></ToData>
         
        }></Route>
        
      </Routes>
      <Footer></Footer>
    </div >
  );
}

export default App;
