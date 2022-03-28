import styled from 'styled-components';

const StyledNavbar = styled.nav`
    background-color: #fff;
    border-bottom: 1px solid #e5e5e5;
    display: flex;
    justify-content: space-between;
    padding: 0.5rem 1rem;
    position: fixed;
    top: 0;
    width: 100%;
`;

interface NavbarProps {
    children: React.ReactNode;
}

const Navbar: React.FC = ({ children }) => {
    return <StyledNavbar>{children}</StyledNavbar>;
}

export default Navbar;