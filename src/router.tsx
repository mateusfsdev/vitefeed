
import { Routes, Route } from 'react-router-dom'
import { Skills } from './pages/skills/index.skills'
import { Contact } from './pages/contact/index.contact'
import { Home } from './pages/Home/index.home'

export function Router() {
  return(
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/contato" element={<Contact />}></Route>
      <Route path="/projetos" element={<Skills />}></Route>
    </Routes>
  )
}