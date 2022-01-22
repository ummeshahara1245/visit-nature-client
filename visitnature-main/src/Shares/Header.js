import React,{useState} from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
import UserInfoModal from '../pages/User/UserInfoModal/UserInfoModal';

const Header = () => {
    const [toggle, setToggle] = useState(false);
    const {user, logout} = useAuth();
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                <Navbar.Brand href="#home">visitNature</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto">
                    <Link className="no-underline font-medium px-2 pt-1 text-white mx-2 rounded transition duration-500 ease-in-out hover:bg-green-500 text-lg" to="/">Home</Link>
                    <Link className="no-underline font-medium px-2 pt-1 text-white mx-2 rounded transition duration-500 ease-in-out hover:bg-green-500 text-lg" to="/blog">Blog</Link>
                    <Link className="no-underline font-medium px-2 pt-1 text-white mx-2 rounded transition duration-500 ease-in-out hover:bg-green-500 text-lg" to="/about">About Us</Link>
                    <Link className="no-underline font-medium px-2 pt-1 text-white mx-2 rounded transition duration-500 ease-in-out hover:bg-green-500 text-lg" to="/dashboard">Dashboard</Link>

                    
                    {
                        user?.email ? 
                        <div className="md:flex justify-center items-center">
                            <h6 className="text-white ml-4">Hi! {user.displayName}</h6>
                            <img onClick={() => setToggle(true)} className="w-10 h-10 ml-4 rounded-full border-2 border-gray-300" src={user?.photoURL} alt="" />
                            <button onClick={logout} className="rounded hover:bg-blue-500 md:block hidden  transition duration-300 ease-in-out text-white font-semibold border-2 border-green-500 px-2 ml-2"><i className="fas fa-sign-out-alt"></i> Log Out</button>
                        </div>
                        :<Link className="no-underline text-white px-2 bg-blue-500 text-lg rounded" to="/login"><i class="fas fa-sign-in-alt"></i> Login</Link>
                    }
                </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>
            <UserInfoModal toggle={toggle} setToggle={setToggle} />
        </div>
    );
};

export default Header;