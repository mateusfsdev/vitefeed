
import Calculator from '../projects/Calc';
import Imccalc from '../projects/Imccalc';
import { Pokedex } from '../projects/Pokedex';
import styles from './Projects.module.css'

// import { Container } from './styles';
export default function Projects() {
return (

<>
<div className={styles.wrappergrid}>
    <Calculator/>
    <Imccalc/>
  </div>
  <div className={styles.wrapper}>
    <Pokedex/>
  </div>
  <div className={styles.wrapper}>
    <Pokedex/>
  </div>
  <div className={styles.wrapper}>
    <Pokedex/>
  </div>
  <div className={styles.wrapper}>
    <Pokedex/>
  </div>


</>
)
}