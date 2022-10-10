
import './App.css';
import Review from './components/Review/Review';
import Home from './components/Home/Home';
import { Route, Routes } from 'react-router-dom';
import Notfound from './components/Notfound/Notfound';
import Header from './components/Header/Header';
import Dashboard from './components/Dashboard/Dashboard';
import Blogs from './components/Blogs/Blogs';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='review' element={<Review></Review>}></Route>
        <Route path='dashboard' element={<Dashboard></Dashboard>}></Route>
        <Route path='blogs' element={<Blogs></Blogs>}></Route>
        <Route path='*' element={<Notfound></Notfound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
