import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About';
import Home from './Pages/Home';
import PageNotFound from './Pages/PageNotFound';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
