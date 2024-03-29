
import { Fanfuria } from '../projects/Fanfuria';
import { Pokedex } from '../projects/Pokedex';
import { Discord } from '../projects/Discord';
import { Timer } from '../projects/Timer';
import { Tweed } from '../projects/Tweed';

import Calculator from '../projects/Calc';
import Imccalc from '../projects/Imccalc';
import styles from './Projects.module.css'

export default function Projects() {
return (
  <>
    <div className={styles.wrappergrid}>
      <Calculator/>
      <Imccalc/>
    </div>
    <div className={styles.wrapper}>
      <Timer />
    </div>
    <div className={styles.wrapper}>
      <Pokedex/>
    </div>
    <div className={styles.wrapper}>
      <Discord/>
    </div>
    <div className={styles.wrapper}>
      <Fanfuria />
      
    </div>
    <div className={styles.wrapper}>
      <Tweed/>
    </div>
  </>
)
}