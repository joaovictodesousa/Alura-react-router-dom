import { Link } from 'react-router-dom';
import styles from './MenuLink.module.css';

export default function MenuLink({children, to}) {
    return (
        <Link className={styles.link} to={to}>
            {children} 
        </Link> 
    )
    //esse children de alguma forma está arrumando o cabecalho, pois quando tira ele é coloca a mão ele acaba replicando o numero
    //basicamente ele está servindo para fazer  dois ao mesmo tempo
}