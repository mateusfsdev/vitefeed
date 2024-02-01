
import Calculator from '../projects/Calc';
import Imccalc from '../projects/Imccalc';
import styles from './Projects.module.css'

// import { Container } from './styles';
export default function Projects() {
return (

  <div className={styles.wrapper}>
    <Calculator/>
    <Imccalc/>
  </div>

)
}