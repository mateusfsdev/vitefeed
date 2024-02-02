import { Chats } from 'phosphor-react'
import styles from './user.module.css'


export function User() {
  return (
  <div className={styles.main}>
    <div className={styles.content}>
      <h1>Obrigado por chegar até aqui!</h1>
      <p>manda um recado ai pra gente, bora começar um projeto juntos!</p>

      <input className={styles.cap} type="email" placeholder='Digite seu E-mail' />
      <input className={styles.cap} type="text" placeholder='Digite o assunto' />
      <input className={styles.capgg}type="text" placeholder='...mais' />

      <a className={styles.malito}href="mateusfdev@outlook.com">
        Enviar
        <Chats size={20} />
      </a>
    </div>
  </div>
  )
}