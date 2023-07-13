import styled, { css } from 'styled-components';

export const Subtitle = styled.small`
    display: block;
`

export const Container = styled.article`
    margin-bottom: 24px;
    
    ${({removed}) => css`
        opacity: ${ removed ? 0.5 : 1 };
        color: ${ removed ? 'red' : '#fff'}
    `}
`