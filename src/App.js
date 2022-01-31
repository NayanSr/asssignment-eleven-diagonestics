
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AboutUs from './components/AboutUs/AboutUs';
import ServiceDetails from './components/Details/ServiceDetails';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login/Login';
import NotFound from './components/NotFound/NotFound';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Services from './components/Services/Services';
import Upcomming from './components/Upcomming/Upcomming';
import AuthProvider from './context/AuthProvider';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/service' element={<Services />} />
            <Route path='/upcomming' element={<PrivateRoute>
              <Upcomming />
            </PrivateRoute>} />
            <Route path='/aboutus' element={<AboutUs />} />
            <Route path='/login' element={<Login />} />
            <Route path='/service/:serviceId' element={<PrivateRoute>
              <ServiceDetails />
            </PrivateRoute>} />
            <Route path='*' element={<NotFound />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
