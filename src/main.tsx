import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom' // Se você usa rotas
import App from './App'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* O basename deve ser o nome exato do seu repositório no GitHub */}
    <BrowserRouter basename="/sabor-da-hora-digital">
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)