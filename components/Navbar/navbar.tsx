import styled from 'styled-components';

const StyledNavbar = styled.nav`
    background-color: blue;
    border-bottom: 1px solid #e5e5e5;
    display: flex;
    justify-content: space-between;
    padding: 0.5rem 1rem;
    position: fixed;
    z-index: 1;
    top: 0;
    width: 100%;
`;

interface NavbarProps {
    children: React.ReactNode;
}

const Navbar: React.FC = ({ children }) => {
    return <><StyledNavbar>Hey </ StyledNavbar>{children}</>;
}

export default Navbar;