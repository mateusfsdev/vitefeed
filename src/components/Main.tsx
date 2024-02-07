import styles from './Main.module.css'


export function Main(){
  return(
    <article className={styles.main}>
      <div className={styles.content}>
        <h1>Olá, Seja bem-vindo ao meu portfólio,
          sou Mateus Felipe desenvolvedor frontend
        </h1>
        <br />
        <p>
          Aqui é onde pretendo manter meus repositorio de cunho estudantil Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, delectus obcaecati. Eaque neque dolorem ab veniam hic assumenda saepe eos error blanditiis? Non minus ut pariatur recusandae animi deleniti fugiat?
        </p>
        <br />
        <p>Abaixo tem alguns projetos no qual me dediquuei de alguma forma seja em projetos de cunho educacional ou algm projeto pessoal 👇🏼👇🏼</p>
      </div>

    </article>
  )
}