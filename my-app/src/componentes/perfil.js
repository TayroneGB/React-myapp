import React, {Fragment} from 'react'
import './estilo.css'
import Foto from './Foto'

const Perfil = (props) => {
    return(
    <Fragment ><div class='box'>
           
            <ul type='none'>
                <Foto img_url={props.img_url}/>
                <li><h3>{props.nome}</h3></li>
                <li>Idade:{props.idade}</li>
                <li>Sexo:{props.sexo}</li>
                
                
            </ul>
            </div>
    </Fragment>
    )
}

export default Perfil;