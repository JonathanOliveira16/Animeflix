import React from "react";
import Anime from '../Anime/index';

const Secao = ({secao}) => {

    return (
        <section>
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h5 class="text-white">{secao[0]?.generos[0]}</h5>
                    </div>
                </div>
            </div>
            <div class="col-12">
                <ul class="anime_lista">
                {secao.map((anime) => (
            <Anime anime={anime}/>
        ))}
                </ul>
            </div>
        </section>

    );
}

export default Secao;