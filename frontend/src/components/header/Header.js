import 'bootstrap/dist/css/bootstrap.min.css'
import Nav from 'react-bootstrap/Nav';
import Image from 'react-bootstrap/Image';
import logo from '../../res/logo.svg';
import { NavLink } from 'react-router-dom';
import { NavDiv } from './Header.styles';

const Header = () => {
    return (
        <header style={{ height: 60 }} className="d-flex bg-light justify-content-between">
           
            <div className="d-flex mx-4">
                <Image style={{ maxWidth: 40 }} src={logo} />
                <a className="navbar-brand my-2 mx-4 text-dark">Security&Order66</a>
            </div>
            
            <NavDiv className="d-flex">
                <Nav>
                    <Nav.Item>
                        <NavLink className="nav-link bg-light border-0 text-dark py-3" to={'/bedroom'}>Bedroom</NavLink>
                    </Nav.Item>
                    <Nav.Item>
                        <NavLink className="nav-link bg-light border-0 text-dark py-3" to={'/kitchen'}>Kitchen</NavLink>
                    </Nav.Item>
                </Nav>
            </NavDiv>
        </header>
    );
}

export default Header;