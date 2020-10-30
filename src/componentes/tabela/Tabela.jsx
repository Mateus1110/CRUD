import React from 'react'
import './Tabela.css'

export default function Tabela(props) {
    return (
        <div className="table-area">
            <table id="table">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>nome</th>
                        <th>createdAt</th>
                        <th>updatedAt</th>
                    </tr>
                </thead>
                <tbody id="tbody">
                </tbody>
            </table>
        </div>
    );
}
