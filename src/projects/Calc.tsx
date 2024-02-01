import { useState } from 'react'
import styles from './Calc.module.css'

export default function Calculator() {
  const[numb, setNumb]=useState(0)

  function inputNumb(e){
    var input = e.target.value;
    setNumb(numb + input)

  }

  function clear(e){
    setNumb(0)
  }
  return (
    <div className={styles.wrapper}>
      <br/>

      <h1 className={styles.result}>{numb}</h1>

      <button className={styles.steel} onClick={clear}>AC</button>
      <button className={styles.steel}>+/-</button>
      <button className={styles.steel}>%</button>
      <button className={styles.operators}>/</button>
      <button className={styles.button} onClick={inputNumb} value={7}>7</button>
      <button className={styles.button} onClick={inputNumb} value={8}>8</button>
      <button className={styles.button} onClick={inputNumb} value={9}>9</button>
      <button className={styles.operators}>X</button>
      <button className={styles.button} onClick={inputNumb} value={4}>4</button>
      <button className={styles.button} onClick={inputNumb} value={5}>5</button>
      <button className={styles.button} onClick={inputNumb} value={6}>6</button>
      <button className={styles.operators}>-</button>
      <button className={styles.button} onClick={inputNumb} value={1}>1</button>
      <button className={styles.button} onClick={inputNumb} value={2}>2</button>
      <button className={styles.button} onClick={inputNumb} value={3}>3</button>
      <button className={styles.operators}>+</button>
      <button className={styles.button} onClick={inputNumb} value={0}>0</button>
      <button className={styles.button}>,</button>
      <button className={styles.double}>=</button>

    </div>

  )
  }