import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Login from './components/Login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={
          <div className="min-h-screen">
            <Navbar />
            <main>
              <Hero />
              <Services />
            </main>
          </div>
        } />
      </Routes>
    </Router>
  );
}

export default App;
