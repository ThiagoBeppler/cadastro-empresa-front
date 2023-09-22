import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import ListarEmpresas from './components/ListarEmpresas/ListarEmpresas.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <App /> */}
    <ListarEmpresas/>
  </React.StrictMode>,
)
