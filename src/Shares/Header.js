import React, { useState } from 'react';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
import UserInfoModal from '../pages/User/UserInfoModal/UserInfoModal';
import './Header.css';

const Header = () => {
    const [toggle, setToggle] = useState(false);
    const { user, logout } = useAuth();

    return (
        <div className="header-wrapper shadow-sm sticky-top">
            <Navbar collapseOnSelect expand="lg" bg="white" variant="light" className="py-2">
                <Container>
                    <Navbar.Brand as={Link} to="/" className="fw-bold fs-3 text-success">
                        <i className="fas fa-leaf me-2"></i>visitNature
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto align-items-center">
                            {/* নেভিগেশন লিংকসমূহ */}
                            <Nav.Link as={NavLink} to="/" className="nav-item-custom">Home</Nav.Link>
                            <Nav.Link as={NavLink} to="/blog" className="nav-item-custom">Blog</Nav.Link>
                            <Nav.Link as={NavLink} to="/about" className="nav-item-custom">About Us</Nav.Link>
                            <Nav.Link as={NavLink} to="/dashboard" className="nav-item-custom">Dashboard</Nav.Link>

                            {/* ইউজার অথ সেকশন */}
                            <div className="auth-section ms-lg-4 d-flex align-items-center">
                                {user?.email ? (
                                    <div className="d-flex align-items-center bg-light rounded-pill pr-1">
                                        <span className="d-none d-xl-inline text-muted me-2 ps-3">
                                            Hi, <strong>{user.displayName?.split(' ')[0]}</strong>
                                        </span>
                                        <img
                                            onClick={() => setToggle(true)}
                                            className="user-avatar shadow-sm"
                                            src={user?.photoURL || 'https://i.ibb.co/mR49v81/user.png'}
                                            alt="profile"
                                        />
                                        <Button
                                            onClick={logout}
                                            variant="outline-danger"
                                            size="sm"
                                            className="ms-3 rounded-pill px-3 d-none d-md-block"
                                        >
                                            <i className="fas fa-sign-out-alt me-1"></i> Log Out
                                        </Button>
                                    </div>
                                ) : (
                                    <Link to="/login" className="login-btn">
                                        <i className="fas fa-user-circle me-2"></i> Login
                                    </Link>
                                )}
                            </div>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            {/* ইউজার ইনফো মোডাল */}
            <UserInfoModal toggle={toggle} setToggle={setToggle} />
        </div>
    );
};

export default Header;