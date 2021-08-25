import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from '../src/assets/themes.styles';
import App from '../src/modules/App/App.module';
import './index.scss';

const Wrapper = () => (
  <React.StrictMode>
    <ThemeProvider theme={lightTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

ReactDOM.render(<Wrapper />, document.getElementById('root'));
