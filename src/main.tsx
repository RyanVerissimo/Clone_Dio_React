import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.js'

import { GlobalStyle } from './styles/global.js'

createRoot(document.getElementById('root') as Element | DocumentFragment).render(
  <StrictMode>
    <GlobalStyle />
    <App />
  </StrictMode>,
)
