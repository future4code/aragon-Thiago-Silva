import React from 'react';
import './CardPequeno.css'

function CardPequeno(props) {
    return (
        <div className="littlecard-container">
            <img src={ props.imagem } />
            <div>
                <a target="_blank" href= { props.mailto }><p>{ props.email }</p></a>
                <p>{ props.endereco }</p>
            </div>
        </div>
    )
}

export default CardPequeno;