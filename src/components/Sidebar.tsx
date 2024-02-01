import { Chats } from 'phosphor-react'
import { Avatar } from './Avatar';
import html from '../assets/htmltech.png'
import js from '../assets/javascript.png'
import css from '../assets/csstech.png'
import reactjs from '../assets/reacttech.png'
import vite from '../assets/vitetech.png'
import  link from '../assets/linkedin.svg'
import  github from '../assets/github.svg'
import  about from '../assets/about.svg'
import  pro from '../assets/projects.svg'

import styles from './Sidebar.module.css'

export function Sidebar() {
  return(
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1552308995-2baac1ad5490?q=50&w=300&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"  />


      <div className={styles.profile}>
        <Avatar  src='https://github.com/mateusfsdev.png' />

        <strong>Mateus F Dev</strong>
        <span>Developer frontend ㊗㊙</span>
  
      <nav className={styles.links}>
        <a href="/">
          <img className={styles.about} src={about} alt="" />
        </a>
        <a href="https://github.com/mateusfsdev" target='_blank'>
          <img className={styles.git} src={github} alt="" />
        </a>
        <a href="https://www.linkedin.com/in/mateus-felipe-70b49611a/ " target='_blank'>
          <img className={styles.link} src={link} alt="" />
        </a>
        <a href="/projects" target='_blank'>
          <img className={styles.pro} src={pro} alt="" />
        </a>
      </nav>
      <span>techhnologias mais usadas:</span>
      </div>

      <section className={styles.tech}>
        <img className={styles.html} src={html}alt="" />
        <img className={styles.css} src={css} alt="" />
        <img className={styles.js} src={js} alt="" />
        <img className={styles.vite} src={vite} alt="" />
        <img className={styles.react} src={reactjs} alt="" />    
      </section>

      <footer>
        <a href="malito:mateusfdev@outlook.com">
          <Chats size={20} />
          Enviar E-mail
        </a>
      </footer>
    </aside>

  );
}