import styles from './About.module.css'


export function About(){
  return(

      <div className={styles.content}>
        <h1>Olá, Seja bem-vindo ao meu portfólio,
          sou Mateus Felipe desenvolvedor frontend
        </h1><br />

        <h3>Estou na caminhada da vida de cafe e code ja a alguns meses</h3>
        <br />
        <p>aqui é um espacinho especial no famoso world wide web que separei para colocar meu conhecimento em jogo e mostrar tudo o que vim estudando durante minha jornada de desenvolvedor </p>
        <br />
        <p>bom, tenho 27 anos e migrei da area logistica industrial a dois anos com um foco em frontend e mobile, atualmente estudando Nodejs e Reative Native. </p>
        <br />
        <p>Conheça um pouco mais do meus trabelhos na area de projetos que esta disponivel clicando
          <a href="/projects"> aqui ⚡ </a>
        </p>
        <br />
        
      </div>


  )
}