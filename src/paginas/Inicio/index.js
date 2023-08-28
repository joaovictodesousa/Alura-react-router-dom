import Banner from "componentes/banner";
import styles from "./Inicio.module.css";

import posts from "json/posts.json"; 
import Post from "../../componentes/Post";
//Os dois imports apagados são porque eu peguei os cardis do bootstrap

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