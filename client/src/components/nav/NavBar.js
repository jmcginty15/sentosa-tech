import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import brandLogo from '../../images/sentosa-logo.jpg';
import brandImage from '../../images/sentosa-title.jpg';
import './NavBar.css';

// Navbar component
const NavBar = () => {
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const toggleOpen = () => setOpen(!open);

    let logoHeight = null;
    if (window.innerWidth <= 300) logoHeight = 20;
    else if (window.innerWidth <= 768) logoHeight = 30;
    else logoHeight = 40;

    const handleClick = (route) => {
        if (open) toggleOpen();
        navigate(route);
    }

    return (
        <div className="NavBar">
            <Navbar id="Nav" dark expand="md" fixed="top">
                <NavbarBrand href="/"><span className="NavBar-brand">
                    <img src={brandLogo} height={logoHeight * 1.5} alt="brand-logo-1" />
                    <img src={brandImage} height={logoHeight} alt="brand-logo-2" />
                </span></NavbarBrand>
                <NavbarToggler onClick={toggleOpen} />
                <Collapse isOpen={open} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem className="NavBar-item">
                            <NavLink onClick={() => handleClick('/consulting-services')}><span className="NavBar-link">Consulting Services</span></NavLink>
                        </NavItem>
                        <NavItem className="NavBar-item">
                            <NavLink onClick={() => handleClick('/about')}><span className="NavBar-link">About Us</span></NavLink>
                        </NavItem>
                        <NavItem className="NavBar-item">
                            <NavLink onClick={() => handleClick('/reports')}><span className="NavBar-link">Sentosa Reports</span></NavLink>
                        </NavItem>
                        <NavItem className="NavBar-item">
                            <NavLink onClick={() => handleClick('/publishing')}><span className="NavBar-link">Sentosa Publishing</span></NavLink>
                        </NavItem>
                        <NavItem className="NavBar-item">
                            <NavLink onClick={() => handleClick('/product-offerings')}><span className="NavBar-link">Product Offerings</span></NavLink>
                        </NavItem>
                        <NavItem className="NavBar-item">
                            <NavLink onClick={() => handleClick('/technology-partners')}><span className="NavBar-link">Technology Partners</span></NavLink>
                        </NavItem>
                        <NavItem className="NavBar-item">
                            <NavLink onClick={() => handleClick('/ontology-works')}><span className="NavBar-link">Ontology Works</span></NavLink>
                        </NavItem>
                        <NavItem className="NavBar-item">
                            <NavLink onClick={() => handleClick('/jobs')}><span className="NavBar-link">Job Opportunities</span></NavLink>
                        </NavItem>
                        <NavItem className="NavBar-item">
                            <NavLink onClick={() => handleClick('/contact')}><span className="NavBar-link">Contact Us</span></NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    )
}

export default NavBar;