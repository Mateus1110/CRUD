import React, { useState } from 'react';
import './Update_field.css'

function Update_field(props) {
    const[name, setName] = useState([])

    function call_update_row(event){
        event.preventDefault()
        props.update_row(name);        
    }
    
    if (props.show === false){
        return null
    }else{
        return (
            <section className='update-area'>
                <form onSubmit={call_update_row} onChange={(event) => setName(event.target.value)} className='input-area' action="">
                    <label htmlFor="update-input" className="input-label">Inserir:</label>
                    <input type="text" id='update-input' placeholder='Insira um nome' className="input-name"/>
                    <button className="submit-btn">Atualizar</button>
                </form>
            </section>
        );
    }
}

export default Update_field;