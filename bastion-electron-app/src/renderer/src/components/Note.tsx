export default function Note(): JSX.Element {
    return (
        <article className="note">
            <div className="circle" id="red"/>
            <div className="circle" id="green"/>

            <div id="limit-alert">
                <span className="note-title">Fecha em 23/07</span>
            </div>
        
            <p className="note-content">Criar um novo formato para empresa </p>
            <span className="note-date">Ínicio: 12/07/2024</span>
        </article>
    )
}