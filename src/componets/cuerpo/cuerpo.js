import estilo from './cuerpo.module.css'

export default function Accordeon({acordeon}){
    function S4() {
        return (((1+Math.random())*0x10000)|0).toString(16).substring(1); 
    }
    // then to call it, plus stitch in '4' in the third group
    const guid = () => (S4() + S4() + "-" + S4() + "-4" + S4().substr(0,3) + "-" + S4() + "-" + S4() + S4() + S4()).toLowerCase();
    
    return(
        acordeon.map((iterador) => {
            const clave=guid()
            return(
                <div className={estilo.row}>
                    <div className={estilo.col}>
                        <div className={estilo.tabs}>
                            <div className={estilo.tab}>
                                <input className={estilo.input} type="checkbox" id={clave}></input>
                                <label className={estilo.tablabel} for={clave}>
                                    {iterador.titulo}
                                </label>
                                <div className={estilo.tabcontent}>
                                    {iterador.descrip}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })
    )
}