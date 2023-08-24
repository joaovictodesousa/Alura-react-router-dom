import { Link } from 'react-router-dom'
import styles from './Menu.module.css'
import MenuLink from '../MenuLink';

export default function Menu() {
    return (
        <header>
            <nav className={styles.navegacao}> {/* lembrando que tem que colocar esse style primeiro para fazer a importação */}
                <MenuLink to="/">
                    Inicio
                </MenuLink>
                <MenuLink to="/joao">
                    João
                </MenuLink>
                {/* No contexto do React Router, a propriedade to é usada para definir o destino (URL) para o qual um link deve apontar */}
                <MenuLink to="/sobremim">
                    Sobre Mim
                </MenuLink>
                {/* Esse link subistitui a tag 'a' e o 'to' subistitui o 'href' */}
            </nav>
        </header>
    )

    // Esse comando da linha 14 é simplismente um if e else, ele esta dizendo que se a URL atual for a página inicial ("/"), adiciona a classe adicional styles.linkDestacado
}
