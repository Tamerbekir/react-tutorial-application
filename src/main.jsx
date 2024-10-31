import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Button from './pages/Button'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Button
      color='success'
      onMouseEnter={(event) => event.target.style.backgroundColor = 'red'}
      onMouseLeave={(event) => event.target.style.backgroundColor = 'green'}
      onClick={() => console.log('clicked')}
    >
      My Button</Button>
    <App />
  </StrictMode>,
)
