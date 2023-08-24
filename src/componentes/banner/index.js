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
                    Boas vindas ao meu espaço pessoal! Eu sou João Victor, programador Full Stack. Aqui compartilho vários conhecimentos, espero que aprenda algo novo :)
                </p>
            </div>

            <div className={styles.imagens}>

            <img className={styles.foto_joao} src={foto_joao} aria-hidden={true} alt='Minha foto' />
            
            </div>
        </div>
    )
}