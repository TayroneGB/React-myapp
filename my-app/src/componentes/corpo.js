import React, {Fragment} from 'react'
import Perfil from './perfil'
import './estilo.css'
import Foto from './Foto'

const Corpo = () =>{
    return(
        <Fragment>
            <div class='meio'>
            <Foto img_url="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/FullMoon2010.jpg/280px-FullMoon2010.jpg" />
            <Foto img_url="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Artist%27s_concept_of_collision_at_HD_172555.jpg/800px-Artist%27s_concept_of_collision_at_HD_172555.jpg"/>

            <Perfil
            nome='Tay'
            idade='27'
            sexo='Masculino'
            /> 
           

            </div>       
        </Fragment>
    )
}

export default Corpo;
