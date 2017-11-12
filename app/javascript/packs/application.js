/* eslint no-console:0 */
// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
//
// To reference this file, add <%= javascript_pack_tag 'application' %> to the appropriate
// layout file, like app/views/layouts/application.html.erb


import Turbolinks from 'turbolinks';
Turbolinks.start();

import WebpackerReact from 'webpacker-react';

import { injectGlobal } from 'styled-components';

injectGlobal`
  body, html {
    margin: 0;
    padding: 0;
    background: #667db6; /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #667db6, #0082c8, #0082c8, #667db6); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #667db6, #0082c8, #0082c8, #667db6); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    font-family: sans-serif;
  }
  html, body {
    height: 100%
  }
`

import Timeline from 'pages/timeline/TimeLine';
import NewSession from 'pages/sessions/NewSession';
import User from 'pages/user';
import UserProfile from 'pages/UserProfile';

WebpackerReact.setup({Timeline, NewSession, User, UserProfile});
