import html from '../assets/htmltech.png'
import js from '../assets/javascript.png'
import css from '../assets/csstech.png'
import reactjs from '../assets/reacttech.png'
import vite from '../assets/vitetech.png'


import styles from './Skills.module.css'


export function SkillsTools() {
  return (
    <div>   
      <div className={styles.box}>
        <section className={styles.tech}>
          <img className={styles.html} src={html}alt="" />
          <img className={styles.css} src={css} alt="" />
          <img className={styles.js} src={js} alt="" />
          <img className={styles.vite} src={vite} alt="" />
          <img className={styles.react} src={reactjs} alt="" />    
        </section>
      </div>
    </div>
  
  )
}