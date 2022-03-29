import styled from 'styled-components';
import Head from 'next/head';

const StyledDiv = styled.div`
    background-color: none;
    border: 1px solid #EF476F;
    border-radius: 15px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0.5rem 1rem;
    position: fixed;
    height: auto;
    &>div {
        margin: 0.5rem 0;
    }
    `;
    
const StyledInput = styled.input`
    border: solid #EF476F;
    border-radius: 5px;
    padding: 0.5rem;
    width: 100%;
    height: 40px;
    font-size: 1rem;
    font-weight: thin;
    color: #414141;
    &:focus {
        outline: none;
        box-shadow: #EF476F 0px 0px 1px 1px;
        color: black;
    }
`;

const StyledButton = styled.button`
    border: none;
    background-color: #EF476F;
    color: white;
    padding: 0.5rem;
    width: 80%;
    height: 40px;
    font-size: 1rem;
    font-weight: bold;
    margin-left: 50%;
    transform: translate(-50%, 0);
    border-radius: 100px;
    &:hover {
        background-color: #ff1c51;
        cursor: pointer;
    }
`;

const StyledA = styled.a`
    font-size: 1rem;
    font-weight: bold;
    text-decoration: none;
    &:hover {
        text-decoration: underline;
    }
`;

const login: React.FC = () => {
    return (
        <>
        <Head>
            <title>Teknikapan-login</title>
            <meta name="description" content="En hemsida som recenserar och erbjuder professionell hjälp inom de senaste områdena för dator- och IT-produkter" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
            <div>
                <h1>Login</h1>
            </div>

            <StyledDiv>
                <form>
                    <label>
                        <StyledInput type="text" placeholder="Username" />
                    </label>
                    <label>
                        <StyledInput type="password" placeholder="Password" />
                    </label>
                    <StyledButton type="submit">Logga in</StyledButton>
                </form>

                <div>
                    <p>
                        <StyledA href="/">Glömt lösenordet?</StyledA>
                    </p>
                    <p>
                        <StyledA href="/">Inget konto?</StyledA>
                    </p>
                </div>
            </StyledDiv>
        </>
    );
}

export default login;