import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';
import styled from 'styled-components';

const AppStyle = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;

.page-section-container {
  width: 40vw;
  margin: 10px 0;
}

.page-section-container > h3 {
  text-align: center;
  margin-bottom: 20px;
}

h2 {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}
`

function App() {
  return (
    <AppStyle>
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://media-exp1.licdn.com/dms/image/C4E03AQEXt4HTpGxS4Q/profile-displayphoto-shrink_800_800/0/1635048912962?e=1655942400&v=beta&t=vQEx0iTaOJPRS9qe-BbFsQjbW9NypxEiAQTZSNHI0mE" 
          nome="Thiago Vernizzi" 
          descricao="Olá, sou Thiago Vernizzi, atuo como Desevolvedor Jr. pela RD - Raia Drogasil e estudo no Bootcamp Web Full Stack pela Labenu."
        />
        
        <ImagemButton 
          imagem="https://cdn-icons-png.flaticon.com/512/6819/6819501.png" 
          texto="Ver mais"
        />

        <CardPequeno 
          imagem="data:image/png;base64,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"
          email="Email: thiago.vernizzi@gmail.com"
          mailto="mailto:thiago.vernizzi@gmail.com"
        />

        <CardPequeno 
          imagem="data:image/png;base64,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"
          endereco="Endereço: Rua Padre Eustáquio, 1579"
        />
        
        </div>

      

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://upload.wikimedia.org/wikipedia/commons/a/ac/Logo_Raiadrogasil.png" 
          nome="RD - Raia Drogasil" 
          descricao="Tech Lead" 
        />
        
        <CardGrande 
          imagem="https://yt3.ggpht.com/ytc/AKedOLSH-PUg_wTvKW7xAKL4PsXFV85N9Ys341g0WSVd=s900-c-k-c0x00ffffff-no-rj" 
          nome="Labenu" 
          descricao="Instrutor"
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
          link='https://facebook.com'
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
          link='https://twitter.com'
        />        
      </div>
    </AppStyle>
  );
}

export default App;
