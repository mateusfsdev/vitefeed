

import { Sidebar } from '../../components/Sidebar'
import { Header } from '../../components/Header'
import { Main } from '../../components/Main'


import styles from './skills.module.css'
import '../../global.css'
import Projects from '../../components/Projects'
import { Footer } from '../../components/Footer'


export function Skills() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          <Main />
          <Projects/>
        </main>
      </div>
      <Footer/>
    </div>
  )
}
