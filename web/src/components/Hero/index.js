import React from "react";

const Hero = ({anime}) => {

    return(
        <div id="hero" class="container-fluid" style={{
            backgroundImage: `url(${anime.thumb})`,
        }}>
        <div class="container">
            <div class="row" id="hero_infos">
                <div class="col-6">
                    <h1 class="text-white">{anime?.nome}</h1>
                    <h2 class="text-white">Top 1 no Brasil</h2>
                    <p class="text-white">{anime.descricao?.substr(0, 190)}...</p>
                    <br/>
                    <button class="btn btn-lg btn-custom-white">Assistir</button>
                    <button class="btn btn-lg btn-custom-translucent">Mais Informações</button>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Hero;