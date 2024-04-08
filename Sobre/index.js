import { Link } from "react-router-dom";

function Sobre(){
    return (
        <div>
          <h1>Pagina Sobre</h1>
          <span>Pagina explicando sobre o Assunto</span>
          <br/>
          <Link to="/">Home</Link>
          <Link to="/sobre">Contato</Link>
        </div>
    );
}

export default Sobre;
