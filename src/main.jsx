import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import { AppRouter } from './core/router/AppRouter.jsx'
import { store } from './core/store/store.js'
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
)
