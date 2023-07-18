import React, { useContext } from 'react'
import { ThemeContext } from '../../App';

import { Container } from './styles';

export default function Footer({ onToogleTheme}) {
  const theme = useContext(ThemeContext)

  console.log(theme)

  return (
    <Container>
      <span>JStack's Blog. Todos os direitos reservados.</span>
      <button type="button" onClick={theme.onToogleTheme} >{theme.selectedTheme === 'dark' ? '🌞' : '🌚'}</button>
    </Container>
  );
}