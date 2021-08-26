import React, {Fragment} from 'react';
import './index.css'
import Baixo from './baixo'
import GrayImg from './grayimag'

const Main=(props)=>{
    return(
        <Fragment>
            
            <h1>{props.nome}</h1>
            <p>{props.descri}</p>
            <GrayImg img_url={props.img_url}/>
            <Baixo/>
        </Fragment>
            )
};
export default Main;