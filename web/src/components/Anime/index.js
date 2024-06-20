import React from 'react'

const Anime = ({anime}) => {


    return (
      <li class="anime">
                        <img class="img-fluid" src={anime.thumb}/>
                    </li>
    );

}

export default Anime;