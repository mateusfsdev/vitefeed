import { useState } from 'react'
import styles from './Imccalc.module.css'

export default function Calculator() {
  const [weight, setWeight] = useState("")
  const [height, setHeight] = useState("")
  const [ result, setResult] = useState('...')

  const calculateImc = () => {
    const imc = +weight / (+height * +height)
    const formatedImc = imc.toFixed(2)
    setResult(formatedImc)
  }


  return (
    <div className={styles.wrapper}>
      <br/>
      <h1 className={styles.result}>seu IMC é {result}</h1>
      
      <input
      title=''
      type="number" value={weight}
      placeholder='Digite seu peso'
      onChange={(e) => setWeight (e.target.value)}
      />

      <input
      type="number" value={height}
      placeholder='Digite sua altura'
      onChange={(e) => setHeight (e.target.value)}
      />

      <button
        className={styles.double} onClick={calculateImc}>
          Calcular IMC</button>

    </div>
  )
}