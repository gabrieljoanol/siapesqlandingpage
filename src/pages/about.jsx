import React from "react";
import siapesq from "../imgs/siapesq.png";
import equipe from "../imgs/equipe.png"; 
import talles from "../imgs/talles.png";
import Header from "../components/layouts/header";


export default function About() {
    return (
        <>
            <Header/>
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
