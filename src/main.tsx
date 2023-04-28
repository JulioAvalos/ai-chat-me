import React from 'react'
import ReactDOM from 'react-dom/client'
import { TerminalContextProvider } from "react-terminal";
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <TerminalContextProvider>
          <App />
      </TerminalContextProvider>
  </React.StrictMode>,
)
