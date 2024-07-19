import React from "react";
import Header from "../components/layouts/header";
import Card from "../components/common/card";

import mar from "../imgs/mar.png";
import wave from "../imgs/wave.svg";
import siaprepsMonitor from "../imgs/siaprepsMonitor.svg";
import satelite from "../imgs/satelite.svg";
import lupa from "../imgs/lupa.svg";
import mapa from "../imgs/mapa.svg";

export default function Index(){
    return(
        <>
            <section className="header_container">
                <img src={mar} alt="Imagem de fundo" className="bg_img"/>
                <Header/>
                <article className="article_header_container">
                    <img src={siaprepsMonitor} alt="Imagem de um monitor da siapreps" />
                    <h2>
                        INOVAÇÃO TECNOLÓGICA ALIADA À SUSTENTABILIDADE AMBIENTAL
                    </h2>
                    <p>
                        Sistema de Inteligência Artificial em Pesquisa Ambiental
                        Inovação em Rastreabilidade e Modelagem Ecológica. Otimização e Adequação ESG dos Setores Produtivos.
                    </p>
                </article>
                <footer className="footer_header_container">
                    <img src={wave} alt="Ondas do rodapé"/>
                    <article>
                        <div>
                            <h2 className="title">
                                Inovação
                            </h2>
                            <p className="content">
                                1° colocada na pré-incubação de Rio Grande (2021)
                            </p>
                        </div>
                        <span className="tracejado"></span>
                        <div>
                            <h2 className="title">
                                Aceleração
                            </h2>
                            <p className="content">
                                Pelo governo estadual do RS
                            </p>
                        </div>
                        <span className="tracejado tr2"></span>
                        <div>
                            <h2 className="title">
                                Impacto
                            </h2>
                            <p className="content">
                                Startup destaque no Innovativa
                            </p>
                        </div>
                    </article>
                </footer>
            </section>
            <main>
                <section className="helps">

                    <div className="helps_container">
                        <article className="helps_article">
                            <h2 className="title">
                                Como a SIAPESQ pode te ajudar?
                            </h2>
                            <p className="content">
                                Veja nossa variedade de benefícios
                            </p>
                        </article>
                        <Card
                            photo={satelite}
                            title="Rastreamento de espécies"
                            content="Podemos fazer o rastreamento da espécie animal que você pesquisa, basta entrar em contato!"
                        />
                        <Card
                            photo={lupa}
                            title="Análise Ambiental"
                            content="Baixe nossas predições, e faça o uso offline de onde vocês estiver pelo seu computador"
                        />
                        <Card
                            photo={mapa}
                            title="Predição"
                            content="Com base nos dados registrados no Copernicus podemos fazer predição via satellite de onde uma espécie animal pode estar localizada"
                        />
                    </div>
                    <h3>
                        Conheça nossos produtos
                    </h3>
                </section>
            </main>
        </>
    )
}