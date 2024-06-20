import React from "react";

const LancamentoSemanal = () => {

    return (
        <section>
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h5 class="text-white">Lançamento Semanal</h5>
                </div>
            </div>
        </div>
        <div class="col-12">
            <ul class="anime_lista">
                <li class="anime">
                    <img class="img-fluid" src={require("../../assets/animes/001.jpg")}/>
                    <div class="anime_info">
                        <div class="col-12">
                            <a href="#" class="btn-custom-round btn btn-light rounded-circle">
                                <span class="mdi mdi-play"></span>
                            </a>
                            <a href="#" class="btn-custom-round border-white btn rounded-circle">
                                <span class="mdi mdi-thumb-up text-white"></span>
                            </a>
                            <a href="#" class="btn-custom-round border-white btn rounded-circle">
                                <span class="mdi mdi-thumb-down text-white"></span>
                            </a>
                            <a href="#" class="btn-custom-round border btn-white btn rounded-circle">
                                <span class="mdi mdi-plus text-white"></span>
                            </a>
                        </div>
                        <p>T4:EP13 <text>"Desafiante e o Mais Forte"</text></p>
                    </div>
                </li>
            </ul>
        </div>
    </section>

    );
}

export default LancamentoSemanal;