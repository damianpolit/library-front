import React from 'react'
import {
  BrowserRouter as Router,
  useRoutes,
} from "react-router-dom";
import { ThemeProvider } from 'styled-components';

import theme from './themes/default';
import LoginPage from './pages/LoginPage/index';

const Routers = () => {
  let routes = useRoutes([
    { path: "/login", element: <LoginPage /> },
  ]);
  return routes;
}

const App = () => {

  return (
    <ThemeProvider theme={theme}>
    <Router>
      <Routers/>
    </Router>
</ThemeProvider>
  )
}


export default App;
