import * as React from 'react';
import ReactDOM from 'react-dom';
import { StyledEngineProvider } from '@mui/material/styles';
import InviteUser from './InviteUser';

ReactDOM.render(
  <StyledEngineProvider injectFirst>
    <InviteUser />
  </StyledEngineProvider>,
  document.querySelector("#root")
);