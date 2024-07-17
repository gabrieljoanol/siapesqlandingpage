import React from "react";
import "../style/home.css";
import logo from "../imagens/logo.png";
import siapesq from "../imagens/siapesq.png";
import equipe from "../imagens/equipe.png"; 
import talles from "../imagens/talles.png";


function Home() {
    return (
        <>
            <header>
                <div className="container">
                    <div className="links-esquerda">
                        <a href="#">Siapreps</a>
                        <a href="#">Phytobloom</a>
                    </div>
                    <div className="logo">
                        <img id="logo" src={logo} alt="Logo" />
                    </div>
                    <div className="links-direita">
                        <a href="#">Sobre nós</a>
                        <a href="#">Contato</a>
                    </div>
                </div>
            </header>

            <div className="corpo">
                <div className="imagemsiapesq">
                    <img className="sistema-img" src={siapesq} alt="Sistema" />
                    <div className="lorem">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos reiciendis aliquid explicabo commodi voluptas neque asperiores itaque sint, nulla fugit doloribus dolores iure officia facilis blanditiis quidem laboriosam libero ea.</p>
                    </div>
                </div>
            </div>
            <div className="imagempessoas">
                <img className="pessoas-img" src={equipe} alt="equipe" />
            </div>

            <div className="informacao-equipe">
                <h1>Conheça nossa equipe</h1>
            </div>

            <div className="cards">
                <div className="card">
                    <img src={talles} alt="Pessoa 1" />
                    <h3>Nome da Pessoa 1</h3>
                    <p></p>
                </div>
                
            </div>
        </>
    );
}

export default Home;
