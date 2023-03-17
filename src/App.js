import Home from './components/Home';
import  NavBar  from './components/NavBar';
import FavList from './components/FavList';
import './App.css';
import {Routes,Route} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/favList' element={<FavList />}></Route>
      </Routes>
    </div>
  );
}

export default App;
