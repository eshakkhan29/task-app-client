import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import Tasks from './components/Tasks/Tasks';
import Todo from './components/To-do/Todo';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Calendars from './components/Calendars/Calendars';
import RequireAuth from './components/RequireAuth/RequireAuth';

function App() {
  return (
    <>
      <div className='lg:w-8/12 mx-auto'>
        <Header></Header>
        <Routes>
          <Route path='/' element={
            <RequireAuth>
              <Todo></Todo>
            </RequireAuth>
          }></Route>
          <Route path='/task' element={
            <RequireAuth>
              <Tasks></Tasks>
            </RequireAuth>
          }></Route>
          <Route path='/calender' element={<Calendars></Calendars>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
        </Routes>
        <ToastContainer />
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
