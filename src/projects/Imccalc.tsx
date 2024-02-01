import { useState } from 'react'
import styles from './Calc.module.css'

export default function Calculator() {
  const [weight, setWeight] = useState(0)
  const [height, setHeight] = useState(0)
  const [ result, setResult] = useState(0)

  const calculateImc = () => {
    const imc = weight / (height * height)
    const formatedImc = imc.toFixed(2)
    setResult(+formatedImc)

  }
  return (
    <div className={styles.wrapper}>
      <br/>
      <h1 className={styles.result}>{result}</h1>
      <input
      className={styles.value}
      type="number" value={weight}
      placeholder='Digite seu peso'
      onChange={(e) => setWeight (+e.target.value)}
      />

      <input
      className={styles.value}
      type="number" value={height}
      placeholder='Digite sua altura'
      onChange={(e) => setHeight (+e.target.value)}
      />

      <button
        className={styles.double} onClick={calculateImc}>
          Calcular IMC</button>

    </div>
  )
}