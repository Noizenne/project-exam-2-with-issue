import styled from "styled-components";

export const StyledNav = styled.nav`
    color: ${({theme}) => theme.colors.white};
    width: 70%;
    margin: auto;
    padding-top: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    box-shadow: 0px 8px 10px -10px #1b1b1b;  
    z-index: 1001;
    
    img {
        width: 240px;
    }

    
`