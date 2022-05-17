import { useState } from 'react'
import './style.css'

export default function Post  (props) {
  // Passo5
  const [curtido, setCurtido] = useState(false)
  const [numeroCurtidas, setNumeroCurtidas] = useState(0)
  const [comentando, setComentando] = useState(false)
  const [numeroComentarios, setNumeroComentarios] = useState(0)
  const [comentarios, setComentario] = useState([])
  const [inputComentario, setInputComentario] = useState("")

  // Passo7
  const onClickCurtida = () => {
    if (curtido) {
      setCurtido(!curtido)
      setNumeroCurtidas(numeroCurtidas - 1)

    } else {
      setCurtido(!curtido)
      setNumeroCurtidas(numeroCurtidas + 1)
    }
  }

  const onClickComentario = () => {
    setComentando(!comentando)
  }

  const onChangeComentario = (event) => {
    setInputComentario(event.target.value)
  }

  const enviaComentario = (comentario) => {

    const listaDeComentarios = [...comentarios, comentario]
    setComentario(listaDeComentarios)
    setComentando(false)
    setNumeroComentarios(numeroComentarios + 1)
    setInputComentario("")
  }

  const caixaDeComentario = comentando ? (
    <div>
      <label htmlFor={"comentario"} >Mensagem: </label>

      <input
        id={"comentario"}
        value={inputComentario}
        onChange={onChangeComentario}
      />

      <button onClick={() => { enviaComentario(inputComentario) }}>Enviar</button>
    </div>

  ) : (

    comentarios.map((comentario, index) => {
      return (
        <div key={index}>
          <p>{comentario}</p>
        </div>
      )
    })
  )

  return (
    <main>
      <header>
        <figure>
          <img src={props.fotoUsuario} alt={'Imagem do usuario'} />
          <br />
          <span>{props.nomeUsuario}</span>
        </figure>
      </header>
      <hr />
      <main>
        <figure>
          <p>{`"Acordar para quem você é requer desapego de quem você imagina ser" (Alan Watts)`}</p>
          <img src={props.fotoPost} alt={'Imagem do post'} />
        </figure>
      </main>
      <hr />
      <footer>
        <section>

          <span>Número de curtidas: {numeroCurtidas}</span>
          <br />
          <button onClick={onClickCurtida} >
            {numeroCurtidas === 0 ? "Curtir" : "Descurtir"}
          </button >
        </section>

        <section>
          <br />
          <span>Número de comentários: {numeroComentarios}</span>
          <br />
          <button onClick={onClickComentario}>

            {comentando ? "Fechar comentário" : "Adicionar comentário"}
          </button>
          <h4>Comentários</h4>
          {caixaDeComentario}
        </section>
      </footer>
    </main>
  );
};