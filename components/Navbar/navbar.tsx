import styled from 'styled-components';
import Image from 'next/image';
import back from '../../public/images/back.png';


const StyledImage = styled(Image)`
`;


const StyledNavbar = styled.nav`
    background-color: #EF476F;
    border-bottom: 1px solid #e5e5e5;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 1rem;
    position: fixed;
    top: 0;
    width: 100%;
    height: 80px;
    @media screen and (max-width: 768px) {
        display: none;
    }
`;

const NavbarMargin = styled.div`
    margin-top: 80px;
`;

const MobileNavbar = styled.div`
    background-color: #EF476F;
    border-bottom: 1px solid #e5e5e5;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 1rem;
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 80px;
    @media screen and (min-width: 768px) {
        display: none;
    }
`;

interface NavbarProps {
    children: React.ReactNode;
}

const Navbar: React.FC = ({ children }) => {
    return (
            <>
                <StyledNavbar>
                    <div>
                        <img src='' alt='Tillbakapil'></img>
                        <p>Tillbaka</p>
                    </div>
                    <div>
                        <img src='' alt='logotyp'></img>
                    </div>
                    <div>
                        <div><p>Logga In</p></div>
                    </div>
                </ StyledNavbar>
                <NavbarMargin />
                {children}
                <MobileNavbar>
                    <div>
                        <img src="" alt='Tillbakabild'></img>
                        <p>Tillbaka</p>
                    </div>
                    <div>
                        <img src='' alt='Hembild'></img>
                        <p>Hem</p>
                    </div>
                    <div>
                        <img src='' alt='Kontobild'></img>
                        <p>Konto</p>
                    </div>
                </ MobileNavbar>
            </>
        );
}

export default Navbar;