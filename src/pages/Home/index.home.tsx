

import { Sidebar } from '../../components/Sidebar'
import { Header } from '../../components/Header'



import styles from './home.module.css'
import '../../global.css'
import { About } from '../../components/About'


export function Home() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          <About />
        </main>
        <footer>
          
        </footer>
      </div>
    </div>
  )
}
