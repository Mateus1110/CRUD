import React, { useEffect, useState } from 'react'
import './Tabela.css'

export default function TabelaUsers({ content }) {
    
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
                        <td className="nodata" colSpan="5">Sem dados</td>
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
