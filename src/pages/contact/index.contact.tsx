

import { Sidebar } from '../../components/Sidebar'
import { User } from '../../components/User'
import { Header } from '../../components/Header'


import styles from './contact.module.css'
import '../../global.css'



export function Contact() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          <User />

        </main>  
   
      </div>
    </div>
  )
}
