import Banner from "componentes/banner";
import styles from "./Inicio.module.css";

import posts from "json/posts.json";
import Post from "../../componentes/Post";

export default function Inicio() {
    return (
        <main>
            <Banner />
            <Post />
        </main>
    )
}
//Criei um json chamado jsconfig para melhorar nos diretorios da linha 1

//link da documentação abaixo
//https://create-react-app.dev/docs/importing-a-component/#absolute-imports