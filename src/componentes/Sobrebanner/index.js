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
                    <p className={styles.paragrafo}>
                        ■ Atualmente sou estagiário na NOVACAP desde outubro de 2022. E estou a procura de uma nova oportunidade de desenvolvedor júnior.
                    </p>
                    <p className={styles.paragrafo}>
                    é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.
                    </p>
                </div>
            </div>

        </main>

    )
}