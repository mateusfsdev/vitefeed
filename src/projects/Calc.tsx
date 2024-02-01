import { useState } from 'react'
import styles from './Calc.module.css'

export default function Calculator() {
  const[numb, setNumb]=useState(0)
  return (
    <div className={styles.wrapper}>
      <br/>

      <h1 className={styles.result}>{numb}</h1>

      <button className={styles.steel}>AC</button>
      <button className={styles.steel}>+/-</button>
      <button className={styles.steel}>%</button>
      <button className={styles.operators}>/</button>
      <button className={styles.button}>7</button>
      <button className={styles.button}>8</button>
      <button className={styles.button}>9</button>
      <button className={styles.operators}>X</button>
      <button className={styles.button}>4</button>
      <button className={styles.button}>5</button>
      <button className={styles.button}>6</button>
      <button className={styles.operators}>-</button>
      <button className={styles.button}>1</button>
      <button className={styles.button}>2</button>
      <button className={styles.button}>3</button>
      <button className={styles.operators}>+</button>
      <button className={styles.button}>0</button>
      <button className={styles.button}>,</button>
      <button className={styles.double}>=</button>

    </div>

  )
  }