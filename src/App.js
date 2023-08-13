import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Home from './pages/Home';
import WatchList from './pages/WatchList';
import Starred from './pages/Starred';
import Header from './component/Header';
import AddNewMovie from './pages/AddNewMovie';
import SingleMovie from './pages/SingleMovie'
function App() {
  return (
    <div className="App">
      <header>
        <Header />
        <ToastContainer
          position="top-center"
          autoClose={800}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      </header>
      <main>
      <Routes>
          <Route path='/' element={<Home></Home>} />
          <Route path='/watchlist' element={<WatchList/>}  />
          <Route path='/starred' element={<Starred/>}  />
          <Route path = '/newmovie' element={<AddNewMovie/>}/>
          <Route path = '/movie/:movieId' element={<SingleMovie/>}/>
       </Routes>
      
      </main>
    </div>
  );
}

export default App;
