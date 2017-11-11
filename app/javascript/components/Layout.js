import React from 'react';

import { Provider, Toolbar, NavLink, Container } from 'rebass';

import styled from 'styled-components';

const PageContainer = styled(Container)`
  background-color: rgba(255,255,255,0.9);
  margin: 2em;
  padding: 3em;
`

const Layout = ({children}) => (
  <Provider>
    <Toolbar>
      <NavLink href="/">Twetter</NavLink>
      <NavLink ml="auto" href="/logout">Log Out</NavLink>
    </Toolbar>
    <PageContainer>
      {children}
    </PageContainer>
  </Provider>
);

export default Layout;
