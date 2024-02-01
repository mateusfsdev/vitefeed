import { useState } from 'react'
import styles from './Calc.module.css'

export default function Calculator() {
  const[numb, setNumb]=useState(0)
  const[oldNumb, setoldNumb]=useState(0)
  const[operator, setOperator]=useState()

  function inputNumb(e) {
    var input = e.target.value;
    if(numb === 0){
      setNumb(input)
    }else {
      setNumb(numb + input)
    }
  }

  
  function porcent() {
    setNumb(numb / 100)
  }
  
  function tryOpetator(){
    if(numb > 0) {
      setNumb(-numb)
    }else
    setNumb(Math.abs(numb))
  }
  
  function operatorHandle(e){
    var operatorInput = e.target.value
    setOperator(operatorInput)
    setoldNumb(numb)
    setNumb(0)
  }
  function calc(){
    if(operator == '/') {
      setNumb(oldNumb / numb)
    }else if(operator == '*') {
      setNumb(oldNumb * numb)
    }else if(operator == '-') {
      setNumb(oldNumb - numb)
    }else if(operator == '+') {
      setNumb(oldNumb + numb)
    }

  }

  function clear(e) {
    setNumb(0)
  }

  return (
    <div className={styles.wrapper}>
      <br/>

      <h1 className={styles.result}>{numb}</h1>

      <button
       className={styles.steel} onClick={clear}>
        AC</button>
      <button
       className={styles.steel} onClick={tryOpetator}>
        +/-</button>
      <button
       className={styles.steel} onClick={porcent}>
        %</button>
      <button
       className={styles.operators} onClick={operatorHandle} value='/'>
        /</button>
      <button
       className={styles.button} onClick={inputNumb} value={7}>
        7</button>
      <button
       className={styles.button} onClick={inputNumb} value={8}>
        8</button>
      <button
       className={styles.button} onClick={inputNumb} value={9}>
        9</button>
      <button
       className={styles.operators} onClick={operatorHandle} value='*'>
        X</button>
      <button
       className={styles.button} onClick={inputNumb} value={4}>
        4</button>
      <button
       className={styles.button} onClick={inputNumb} value={5}>
        5</button>
      <button
       className={styles.button} onClick={inputNumb} value={6}>
        6</button>
      <button
       className={styles.operators} onClick={operatorHandle} value='-'>
        -</button>
      <button
       className={styles.button} onClick={inputNumb} value={1}>
        1</button>
      <button
       className={styles.button} onClick={inputNumb} value={2}>
        2</button>
      <button
       className={styles.button} onClick={inputNumb} value={3}>
        3</button>
      <button
       className={styles.operators} onClick={operatorHandle} value='+'>
        +</button>
      <button
        className={styles.button} onClick={inputNumb} value={0}>
          0</button>
      <button
        className={styles.button} onClick={inputNumb} value={'.'}>
          ,</button>
      <button
        className={styles.double} onClick={calc}>
          =</button>

    </div>
  )
}