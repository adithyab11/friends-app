import logo from './logo.svg';
import './App.css';
import AddFriend from './components/AddFriend';
import View from './components/View';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<AddFriend/>}/>
        <Route path='/view' element={<View/>}/>

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
