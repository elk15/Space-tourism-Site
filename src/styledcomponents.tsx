import styled from "styled-components";

export const NavItem = styled.li`
    color: #fff;
    font-family: 'Barlow Condensed', 'sans serif';
    font-size: 16px;
    letter-spacing: 2px;
    height: 100%;
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;
    border-bottom: 3px solid transparent;
    transition: all .8s;


    &:hover{
        border-bottom: 3px solid rgb(255, 255, 255, 0.6);
    }
    
    span {
        font-weight: bold;
    }
`