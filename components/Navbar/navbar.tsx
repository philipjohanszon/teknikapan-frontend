import styled from 'styled-components';

const StyledNavbar = styled.nav`
    background-color: blue;
    border-bottom: 1px solid #e5e5e5;
    display: flex;
    justify-content: space-between;
    padding: 0.5rem 1rem;
    position: fixed;
    top: 0;
    width: 100%;
    height: 80px;
`;

const NavbarMargin = styled.div`
    margin-top: 80px;
`;

const MobileNavbar = styled.div`
    background-color: blue;
    border-bottom: 1px solid #e5e5e5;
    display: flex;
    justify-content: space-between;
    padding: 0.5rem 1rem;
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 80px;
`;

interface NavbarProps {
    children: React.ReactNode;
}

const Navbar: React.FC = ({ children }) => {
    return (
            <>
                <StyledNavbar>
                    Normal nav
                </ StyledNavbar>
                <NavbarMargin />
                {children}
                <MobileNavbar>
                    Mobile nav     
                </ MobileNavbar>
            </>
        );
}

export default Navbar;