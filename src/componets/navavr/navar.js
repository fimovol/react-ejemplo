import estilo from './navar.module.css';

export default function navar() {
    return (
        <>
        <header className={estilo.header}>
            <h1 className={estilo.logo}><a className={estilo.a} href="#">el portafolio de javier</a></h1>
            <ul className={estilo.mainnav}>
                <li><a className={estilo.a} href="#">casa</a></li>
                <li><a className={estilo.a} href="#">sobre mi</a></li>
                <li><a className={estilo.a} href="#">Portfolio</a></li>
                <li><a className={estilo.a} href="#">contactame</a></li>
            </ul>
        </header> 
        </>
    );
}
