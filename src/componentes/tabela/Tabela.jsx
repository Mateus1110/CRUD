import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Tabela.css'

export default function Tabela(props) {

    const [content, setContent] = useState([]);

    useEffect(() => { load_table() }, [])
    async function load_table(){
        try{
            const resposta = await axios.get('http://localhost:3333/users')
            setContent(resposta.data)
        }catch(erro){
            console.log(erro);
        }
    }
    
    function loadHTMLtable(content){
        const tbody = document.querySelector('#tbody')
    
        if (content.length === 0){
            tbody.innerHTML = '<tr><td class="nodata" colspan="5">Sem dados</td></tr>'
            return
        }
    
    }
    if (content.length === 0){
        return (
            <div className="table-area">
            <table id="table">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>nome</th>
                        <th>createdAt</th>
                        <th>updatedAt</th>
                        <th>Deletar</th>
                        <th>Atualizar</th>
                    </tr>
                </thead>
                <tbody id="tbody">
                    <tr>
                        <td class="nodata" colspan="5">Sem dados</td>
                    </tr>
                </tbody>
            </table>
        </div>
        )
    }
    else{
        return (
            <div className="table-area">
                <table id="table">
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>nome</th>
                            <th>createdAt</th>
                            <th>updatedAt</th>
                            <th>Deletar</th>
                            <th>Atualizar</th>
                        </tr>
                    </thead>
                    <tbody id="tbody">
                        {content.map((registro) => 
                            <tr key={registro.id}>
                                <td>{registro.id}</td>
                                <td>{registro.username}</td>
                                <td>{new Date(registro.created_at).toLocaleString()}</td>
                                <td>{new Date(registro.updated_at).toLocaleString()}</td>
                                <td><button className='delete-row-btn'>Deletar</button></td>
                                <td><button className='edit-row-btn'>Editar</button></td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        )
    }
}
