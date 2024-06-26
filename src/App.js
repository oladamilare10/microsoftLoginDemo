import './App.css';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home2 from './pages/Home2';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/user/:email' element={<Home2/>} />
        <Route path='/' element={<Home/>} />
        <Route path='/:msofficestraw' element={<Home/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
