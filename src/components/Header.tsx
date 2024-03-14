import styles from './Header.module.css'


export function Header() {
  return (
  <header className={styles.header}>

      <a href="/">
        <h1>PortifyFeed</h1>
      </a>
  </header>
  )
}