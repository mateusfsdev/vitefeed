import styles from './Timer.module.css'

export function Timer() {
  return (
    <div className={styles.wrapper}>
    <div className={styles.container}>
      <h1>Timer</h1>
    </div>
    <div className={styles.countdown}>
      <span>0</span>
      <span>1</span>
      <div> : </div>
      <span>0</span>
      <span>0</span>
    </div>

  </div>
  )
}