import styles from "./Sobrebanner.module.css";
import fotominha from "../../assets/file.png";

export default function Sobrebanner() {
    return (
        <main>
            <div className={styles.fotocapa}>
                <h2 className={styles.tituto_fotocapa}>Sobre mim</h2>
            </div>

            <div className={styles.container_sobremim}>
                <div>
                    <img src={fotominha} className={styles.fotoSobreMim} alt="Foto Jhon" />

                    <p className={styles.paragrafo}>
                        ■ Olá, sou João Victor e sou um desenvolvedor Full Stack com experiência nas seguintes tecnologias: HTML, CSS, JavaScript, React.js, PHP, Laravel, Git e GitHub.
                    </p>
                    <p className={styles.paragrafo}>
                        ■ Minha abordagem para o desenvolvimento de software é centrada na qualidade, no cumprimento dos prazos e na colaboração com a equipe. Sou apaixonado por aprender novas tecnologias e acompanhar as melhores práticas de desenvolvimento.
                    </p>
                    <p className={styles.paragrafo}>
                        ■ Estou sempre em busca de desafios que me permitam aprimorar minhas habilidades e contribuir para projetos inovadores. Tenho facilidade de adaptação e sou capaz de trabalhar em equipe, colaborando de forma efetiva para alcançar os objetivos do projeto.
                    </p>
                </div>
            </div>
        </main>

    )
}