import React from 'react';
import ReactDOM from 'react-dom/client';

import { App } from './templates/App/index.jsx';
import { MyThemeProvider } from './styles/MyThemeProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MyThemeProvider>
      <App>Hello World</App>
    </MyThemeProvider>
  </React.StrictMode>,
);
