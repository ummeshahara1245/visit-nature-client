import './App.css';
import Home from './pages/Home/Home/Home';
import OrderReview from './pages/OrderReview/OrderReview';
import OrderPlace from './pages/OrderPlace/OrderPlace';
import Footer from './Shares/Footer/Footer';
import Header from './Shares/Header';
import LoginPage from './pages/Login/LoginPage/LoginPage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Dashboard from './pages/DashBoard/Dashboard/Dashboard';
import AuthProvider from './contexts/AuthProvider';
import PrivateRoute from './pages/Login/PrivateRoute/PrivateRoute';
import Booking from './pages/Booking/Booking';
import AddService from './pages/DashBoard/AddService/AddService';
import ManageBookings from './pages/DashBoard/MannageBooking/MannageBooking';
import Blog from './pages/Blog/Blog';
import AboutUs from './pages/AboutUs/AboutUs';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Header />
        <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/blog">
              <Blog />
            </Route>
            <Route path="/about">
              <AboutUs />
            </Route>
            <Route path="/login">
              <LoginPage />
            </Route>
            <PrivateRoute path="/dashboard">
              <Dashboard />
            </PrivateRoute>
            <PrivateRoute path="/addService">
              <AddService />
            </PrivateRoute>
            <PrivateRoute path="/manageBookings">
              <ManageBookings />
            </PrivateRoute>
            <PrivateRoute path="/orderReview/:id">
              <OrderReview />
            </PrivateRoute>
            <PrivateRoute path="/booking">
              <Booking />
            </PrivateRoute>
            <PrivateRoute path="/orderPlace">
              <OrderPlace />
            </PrivateRoute>
          </Switch>
        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;
