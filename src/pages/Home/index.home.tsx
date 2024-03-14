

import { Sidebar } from '../../components/Sidebar'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'



import styles from './home.module.css'
import '../../global.css'
import { About } from '../../components/About'
import Projects from '../../components/Projects'
import { User } from '../../components/User'


export function Home() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar/>
          <About />      
      </div>
      <main>
      <Projects/>
        <User/>
      </main>
      
          <Footer/>
      
    </div>
  )
}
