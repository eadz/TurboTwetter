import React from 'react';

import { Provider, Toolbar, NavLink, Container, Column, Row } from 'rebass';

import styled from 'styled-components';

const PageContainer = styled(Container)`
  background-color: rgba(255,255,255,0.95);
  border-radius: 10px;
  margin: 2em;
  padding: 3em;
`

const Layout = ({children, logged_in, logged_in_user, sidebar}) => (
  <Provider>
    <Toolbar>
      <NavLink href="/">Twetter</NavLink>
      {logged_in && <NavLink ml="auto" href={`/users/${logged_in_user.username}`}>Profile</NavLink> }
      {logged_in && <NavLink href="/settings">Settings</NavLink> }
      {logged_in && <NavLink  href="/logout">Log Out</NavLink>}
    </Toolbar>
    <PageContainer>
      <Row>
        <Column style={{flex: 3}}>
          {children}
        </Column>

        {sidebar &&
          <Column style={{backgroundColor: 'rgba(100,0,0,0.1)', borderRadius: '5px'}}>
            {sidebar()}
          </Column>
        }

      </Row>
    </PageContainer>
  </Provider>
);

export default Layout;
