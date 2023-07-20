import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navigation from './Components/Navigation';
import Footer from './Components/Footer';
import Categories from './Components/Categories/Categories';
import ToDos from './Components/ToDos/ToDos';
import NotFound from './Components/NotFound';
import AuthProvider from './contexts/AuthContext';
import Login from './Components/Auth/Login'

function App() {
  return (
    <div className="App">
      <AuthProvider>

        <Router>

          <Navigation/>

          <Routes>
            <Route path='/' element={<ToDos/>} />
            <Route path='/ToDos' element={<ToDos/>} />
            <Route path='/Categories' element={<Categories/>} />
            <Route path='/Login' element={<Login/>} />

            <Route path='*' element={<NotFound/>} />
          </Routes>

          <Footer/>
        </Router>
      </AuthProvider>
    </div>
  )
}

export default App;
