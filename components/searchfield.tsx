import styled from 'styled-components';

const Placeholder = styled.div`
    position: center;
    width: 400px;
    display: flex;
    align-items: left;
    flex-direction: column;
    justify-content: center;
    margin-top: 100px;
    margin-left: auto;
    margin-right: auto;
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

const text = styled.p`
    font-size: 1rem;
    font-weight: bold;
    `;

const Select = styled.select`
    border: solid #EF476F;
    border-width: 0 0 2px;
    border-radius: 2px;
    padding: 0.5rem;
    width: 60%;
    height: 40px;
    font-size: 1rem;
    font-weight: bold;
    `;

const Wrap = styled.div`
    display: flex;
    flex-direction: inline;
    justify-content: space-between;
`;

const center = styled.div`
    text-align: center;
`;

const Searchfield: React.FC = ({ children }) => {
    return (
        <>  <Placeholder>
                <StyledInput></StyledInput>
                <Wrap>
                    <div className={center}>
                        <text>Eller välj kategori</text>
                    </div>
                    <Select>
                        <option>Kategori</option>
                    </Select>
                </Wrap>
            </Placeholder>
            {children}
        </>
    );
}

export default Searchfield;