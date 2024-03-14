
import { Header } from '../../components/Header'
import { Main } from '../../components/Main'


import styles from './skills.module.css'
import '../../global.css'
import Projects from '../../components/Projects'
import { Footer } from '../../components/Footer'
import { SkillsTools } from '../../components/Skills'


export function Skills() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>

          <Main />
          <SkillsTools/>
          <Projects/>

      </div>
      <Footer/>
    </div>
  )
}
