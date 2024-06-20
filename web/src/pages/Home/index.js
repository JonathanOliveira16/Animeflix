import React, { useState, useEffect } from 'react';
import Header from '../../components/Header';
import Hero from '../../components/Hero';
import LancamentoSemanal from '../../components/LancamentoSemanal';
import Secao from '../../components/Secao';

import api from '../../services/api';


const Home = () => {

    const [principal, setPrincipal] = useState({});
    const [secoes, setSecoes] = useState([]);

    const getHome = async () => {
        try {
            const response = await api.get('/home');
            const res = response.data;

            if (res.error) {
                alert(res.message);
                return false;
            }

            setPrincipal(res.principal);
            setSecoes(res.secoes);

        } catch (erro) {
            alert(erro.message);
        }
    }

    useEffect(() => {
        getHome();
    }, [])

    return (
        <>
        <div class="container-fluid">
            <Header/>
    </div>
    <Hero anime={principal} />
    
    <div id="main-content">
        <LancamentoSemanal/>
        {secoes.map((secao) => (
            <Secao secao={secao}/>
        ))}
    </div>
    </>
    );
};

export default Home;