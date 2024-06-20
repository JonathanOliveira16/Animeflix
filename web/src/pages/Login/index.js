import React, { useState } from 'react';
import Header from '../../components/Header';

import api from '../../services/api';

const Login = () => {
    const [credenciais, setCredenciais] = useState({
        email: '',
        senha: '',
    });

    const [novoUsuario, setNovoUsuario] = useState({
        nome: '',
        email: '',
        senha: '',
    });

    const [showCadastro, setShowCadastro] = useState(false);

    const login = async () => {
        try {
            const response = await api.post('/usuario/login', credenciais);
            const res = response.data;

            if (res.error) {
                alert(res.message);
                return false;
            }

            localStorage.setItem('@user', JSON.stringify(res.usuario));
            window.location.reload();
        } catch (erro) {
            alert(erro.message);
        }
    };

    const cadastrar = async () => {
        try {
            const response = await api.post('/usuario/cadastro', novoUsuario);
            const res = response.data;

            if (res.error) {
                alert(res.message);
                return false;
            }

            setShowCadastro(false);
            alert('Usuário cadastrado com sucesso!');
        } catch (erro) {
            alert(erro.message);
        }
    };

    return (
        <div className="bg-anime" style={{ position: 'absolute', height: '100%', width: '100%' }}>
            <div className="container-fluid">
                <Header hideMenu />
                <div id="login-form" className="col-4 offset-4">
                    <h1 className="text-white">Entrar</h1>
                    <br />
                    <input
                        type="email"
                        className="form-control"
                        placeholder="Email"
                        onChange={(e) => {
                            setCredenciais({
                                ...credenciais,
                                email: e.target.value
                            });
                        }}
                    />
                    <br />
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Senha"
                        onChange={(e) => {
                            setCredenciais({
                                ...credenciais,
                                senha: e.target.value
                            });
                        }}
                    />
                    <br />
                    <button className="btn btn-lg btn-block btn-danger" onClick={login}>Entrar</button>
                    <div className="mt-2">
                        <a href="#" onClick={() => setShowCadastro(true)}>Cadastro</a>
                    </div>
                </div>
                {showCadastro && (
                    <div id="cadastro-form" className="col-4 offset-4">
                        <h1 className="text-white">Cadastro</h1>
                        <br />
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Nome"
                            onChange={(e) => {
                                setNovoUsuario({
                                    ...novoUsuario,
                                    nome: e.target.value
                                });
                            }}
                        />
                        <br />
                        <input
                            type="email"
                            className="form-control"
                            placeholder="Email"
                            onChange={(e) => {
                                setNovoUsuario({
                                    ...novoUsuario,
                                    email: e.target.value
                                });
                            }}
                        />
                        <br />
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Senha"
                            onChange={(e) => {
                                setNovoUsuario({
                                    ...novoUsuario,
                                    senha: e.target.value
                                });
                            }}
                        />
                        <br />
                        <button className="btn btn-lg btn-block btn-success" onClick={cadastrar}>Cadastrar</button>
                        <div className="mt-2">
                            <a href="#" onClick={() => setShowCadastro(false)}>Voltar</a>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Login;
