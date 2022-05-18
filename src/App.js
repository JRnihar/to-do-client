import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import RequireAuth from './Components/Login/RequireAuth';
// import Login from './Components/Login/Login/Login';
// import Login from './Components/Home/Login';
import Header from './Components/Navbar/Header';
import Register from './Components/Register/Register';
import ToData from './Components/TodoFrom/ToData';
import TodoFrom from './Components/TodoFrom/TodoFrom';

function App() {
  return (
    <div >

      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
       
        <Route path='/todoFrom' element={
          <RequireAuth>
            <TodoFrom></TodoFrom>
          </RequireAuth>
        }></Route>
        <Route path='/todoData' element={
          <RequireAuth>
            <ToData></ToData>
          </RequireAuth>
        }></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/singUp' element=

          {<Register></Register>}

        ></Route>
      </Routes>
    </div >
  );
}

export default App;
