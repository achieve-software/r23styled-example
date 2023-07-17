import styled from 'styled-components';

const Nav = styled.nav`
display: flex;
justify-content: space-between;
align-items: center;
padding: 1rem;

background-color: ${({theme}) => theme.colors.primary};




@media (max-width:${({theme})=> theme.breakpoints.md}){
    text-align: center;
}
`;

export default Nav;
