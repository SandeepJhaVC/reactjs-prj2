import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Components/Home.jsx'
import Header from './Components/Header.jsx'
import Footer from './Components/Footer.jsx';
import Videos from './Components/Videos.jsx'
import Login from './Components/Login.jsx';
import Signup from './Components/SignUp.jsx';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/videos' element={<Videos />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
