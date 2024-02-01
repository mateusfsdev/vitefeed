

import { Sidebar } from './components/Sidebar'
import { Header } from './components/Header'
import { Main } from './components/Main'


import styles from './App.module.css'
import './global.css'
import Projects from './components/Projects'

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          <Main />
          <Projects />
        </main>
        <footer>
          
        </footer>
      </div>
    </div>
  )
}

