import React, {useState, useEffect} from 'react';

const Header = (hideMenu) => {

    const [user, setUser] = useState({});

    const logout = () => {
        localStorage.clear();
        window.location.reload();
    }

    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem('@user')));
    }, []);

        return (
            <header class="row">
            <div class="col-2"></div>
            <h1 className='text-white'>Animeflix</h1>
           {!hideMenu && <div class="col-8">
                <ul class="menu_list">
                    <li>
                        <a href="#">Início</a>
                    </li>
                    <li>
                        <a href="#">Animes</a>
                    </li>
                    <li>
                        <a href="#">Ultimos Episodios</a>
                    </li>
                    <li>
                        <a href="#">Minha Lista</a>
                    </li>
                </ul>
            </div>
        }
        {!hideMenu && <div className="col-2 text-right">
            <a onClick={logout} className="text-white">
                Olá, {user?.nome}. Sair
            </a>
        </div>
    }
        </header>
        );
}

export default Header;