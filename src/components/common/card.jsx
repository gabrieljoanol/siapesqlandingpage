import React from "react";

export default function Card({photo,title,content}){
    return(
        <section className="card">
            <img src={photo} alt="foto descritiva"/>
            <h2 className="title">
                {title}
            </h2>
            <p className="content">
                {content}
            </p>
        </section>
    )
}