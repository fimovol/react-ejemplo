import estilo from './botones.module.scss'

export default function Boton({name}){
    return(
        name.map((nombre) => 
            <button className={estilo.learnmore}>{nombre}</button>
        )
    )
}