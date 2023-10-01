import styles from './Banner.module.css';
import foto_joao from 'assets/foto_joao.jpg'

export default function Banner() {
    return (
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>
                    Olá, mundo!
                </h1>
                <p className={styles.paragrafo}>
                    Boas vindas ao meu espaço pessoal! <br/> Olá! Sou João Victor, desenvolvedor Full Stack com especialidade em HTML | CSS | JavaScript |React.js | PHP | Laravel| Bootstrap | MySQL | PostgreSQL | Git | Github. :)
                </p>
            </div>

            <div className={styles.imagens}>

            <img className={styles.foto_joao} src={foto_joao} alt='Minha foto' />
            
            </div>
        </div>
    )
}