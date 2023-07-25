import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';

import {Nav} from "./styles"

import Header from '../Header';
import Footer from '../Footer';
import Routes from '../../routes';

export default function Layout({ onToogleTheme, selectedTheme }) {
  return (
    <BrowserRouter>
      <Header/>

      <Nav>
        <Link to="/"> HomePage </Link>
        <Link to="/posts"> Posts </Link>
        <Link to="/posts/123123123"> Post </Link>
      </Nav>

      <Routes/>
      <Footer/>
    </BrowserRouter>
  );
}
