import styled from 'styled-components';
import themes from '../../styles/themes';

export const Nav = styled.nav `
    background-color: ${({ theme }) => theme.headerBackgroundColor};
    margin-top: 16px;
    padding: 16px;
    border-radius: 4px;

    a {
        color: ${({theme}) => theme.textColor};
        text-decoration: none;
        display: inline-block;

        & + a {
            margin-left: 16px;
        }
    }

    
`