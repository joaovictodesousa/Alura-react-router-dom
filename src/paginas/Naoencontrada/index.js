import { Link } from 'react-router-dom'

import foto from '../../assets/erro.png'
import styles from './Naoencontrada.module.css'

export default function Naoencontrada() {
    return (
        <div>
            <img src={foto} alt="Foto do não encontrado" className={styles.imagem_404} />

            <div className={styles.botaoContainer}>
                <Link to="/">Voltar</Link>
            </div>
        </div>
    )
}