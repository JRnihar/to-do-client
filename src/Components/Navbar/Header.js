import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Header = () => {
    const [user] = useAuthState(auth)
    const navigate = useNavigate()
    const handleSignOut = () => {

        signOut(auth);
        navigate('/home')
    }
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" className=' bg-white shadow-sm'>
                <Container>
                    <Navbar.Brand className='logo'>My TO-Do-APP</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link className='text-dark' as={Link} to="/">Home</Nav.Link>

                            
                                <Nav.Link className='text-dark' as={Link} to="todoFrom">TO-DO-From</Nav.Link>

                            <Nav.Link className='text-dark' as={Link} to="todoData">TO-DO-Data</Nav.Link>

                            {user ?
                                <button onClick={handleSignOut} className='btn btn-primary rounded-pill ms-3'><i class="fa-solid fa-arrow-right-from-bracket"></i> LogOut</button>
                                :
                                <Nav.Link className='text-dark' as={Link} to="Login">LogIn</Nav.Link>}
                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );
};

export default Header;