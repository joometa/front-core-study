import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
// import './index.css'
import '@styles/global.css'
import { AlertContextProvider } from '@components/contexts/AlertContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AlertContextProvider>
      <App />
    </AlertContextProvider>
  </React.StrictMode>,
)
