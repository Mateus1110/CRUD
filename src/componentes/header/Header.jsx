import React, { Fragment, useEffect, useState } from 'react';
import axios from 'axios'
import './Header.css'

import StickyHeadTable from '../tabela/Tabela'

export default function Header() {
    
    const [name, setName] = useState([])
    const [content, setContent] = useState([])

    useEffect(() => load_table(), [])

    async function load_table(){
        console.log('atualizando tabela')
        try{
            const resposta = await axios.get('http://localhost:3333/users')
            setContent(resposta.data)
        }catch(erro){
            console.log(erro);
        }
    }

    async function add_row(event){
        event.preventDefault()
        try{
            await axios.post('http://localhost:3333/users', {username: name})
            load_table()
        }catch(erro){
            console.log(erro);
        }    
    }

    return (
        <Fragment>
            <header className='header'>
                <select id="select-table">
                    <option value="">Selecione a tabela</option>
                    <option value="users">Usuários</option>
                    <option value="projects">Projetos</option>
                </select>

                <form className="input-area" onSubmit={add_row} onChange={(evento) => setName(evento.target.value)}>
                    <label className='input-label' htmlFor="input-name">Inserir:</label>
                    <input type="text" className='input-name' id='input-name' placeholder='Insira um nome'></input>
                    <button className='submit-btn' id='input-btn'>Confirmar</button>
                </form>
            </header>
            <StickyHeadTable content={content} load_table={load_table}/>
        </Fragment>
    )
}
