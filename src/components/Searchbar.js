import React from 'react';
const {useState} = React;
//El error  esta en este import (Pense dejar api.js dentro del src)
import {searchPokemon} from '../../Api.js';

const Searchbar = () =>{

    const [search, setSearch] = useState('');

    const onChange = (e) =>{
        setSearch (e.target.value);
    }

    const onClick = async (e) =>{
        const data = await searchPokemon(search);
        console.log(data);
    }


    return (
        <div>
            <input 
            placeholder="Busca tu Pokemon..." 
            onChange={onChange}
            />
        <div> 
            <button onClick={onClick}> Buscar </button>
        </div>
        </div>
    )
    
}

export default Searchbar;