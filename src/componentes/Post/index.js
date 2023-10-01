import Card from 'react-bootstrap/Card';
import styles from './Post.module.css';
import Button from 'react-bootstrap/Button';
import capa1 from '../../assets/posts/1/capa.png';
import capa2 from '../../assets/posts/2/capa.png';
import capa3 from '../../assets/posts/3/capa.png';
import capa4 from '../../assets/posts/4/capa.png';
import capa5 from '../../assets/posts/5/capa.png';
import capa6 from '../../assets/posts/6/capa.png';
import capa7 from '../../assets/posts/7/capa.png';
import capa8 from '../../assets/posts/8/capa.png';
import Rodape from 'componentes/Rodape';
import { Link } from 'react-router-dom';



export default function Post() {
    return (

        <div>
            <div className={styles.cards}>
                <Card className={styles.cards_solo}>
                    <Card.Img variant="top" src={capa1} />
                    <Card.Body>
                        <Card.Title>Titulo do Artigo</Card.Title>
                        <a variant="primary" className={styles.botao_ver_mais} href="#">Ler</a>
                    </Card.Body>
                </Card>

                <Card className={styles.cards_solo}>
                    <Card.Img variant="top" src={capa2} />
                    <Card.Body>
                        <Card.Title>Titulo do Artigo</Card.Title>
                        <Card.Text>

                        </Card.Text>
                        <a variant="primary" className={styles.botao_ver_mais} href="#">Ler</a>
                    </Card.Body>
                </Card>

                <Card className={styles.cards_solo}>
                    <Card.Img variant="top" src={capa3} />
                    <Card.Body>
                        <Card.Title>Titulo do Artigo</Card.Title>
                        <Card.Text>

                        </Card.Text>
                        <a variant="primary" className={styles.botao_ver_mais} href="#">Ler</a>
                    </Card.Body>
                </Card>

                <Card className={styles.cards_solo}>
                    <Card.Img variant="top" src={capa4} />
                    <Card.Body>
                        <Card.Title>Titulo do Artigo</Card.Title>
                        <Card.Text>

                        </Card.Text>
                        <a variant="primary" className={styles.botao_ver_mais} href="#">Ler</a>
                    </Card.Body>
                </Card>
            </div>

            {/* QUEBRA DE PAGINA */}

            <div className={styles.cards}>
                <Card className={styles.cards_solo}>
                    <Card.Img variant="top" src={capa5} />
                    <Card.Body>
                        <Card.Title>Titulo do Artigo</Card.Title>
                        <Card.Text>

                        </Card.Text>
                        <a variant="primary" className={styles.botao_ver_mais} href="#">Ler</a>
                    </Card.Body>
                </Card>

                <Card className={styles.cards_solo}>
                    <Card.Img variant="top" src={capa6} />
                    <Card.Body>
                        <Card.Title>Titulo do Artigo</Card.Title>
                        <Card.Text>

                        </Card.Text>
                        <a variant="primary" className={styles.botao_ver_mais} href="#">Ler</a>
                    </Card.Body>
                </Card>

                <Card className={styles.cards_solo}>
                    <Card.Img variant="top" src={capa7} />
                    <Card.Body>
                        <Card.Title>Titulo do Artigo</Card.Title>
                        <Card.Text>

                        </Card.Text>
                        <a variant="primary" className={styles.botao_ver_mais} href="#">Ler</a>
                    </Card.Body>
                </Card>

                <Card className={styles.cards_solo}>
                    <Card.Img variant="top" src={capa8} />
                    <Card.Body>
                        <Card.Title>Titulo do Artigo</Card.Title>
                        <Card.Text>

                        </Card.Text>
                        <a variant="primary" className={styles.botao_ver_mais} href="#">Ler</a>
                    </Card.Body>
                </Card>
            </div>
            <Rodape />
        </div>
    );
}


