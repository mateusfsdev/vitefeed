
import { BrowserRouter } from 'react-router-dom'
import { Router } from './router.tsx'
import './global.css'

export function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  )
}

