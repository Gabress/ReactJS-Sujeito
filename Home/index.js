import { Link } from "react-router-dom";

function Home () {
  return (
    <div>
      <h1>Pagina Home</h1>
      <span>Sujeito programador</span> <br/>
      <Link to="/sobre">Sobre</Link>
      <Link to="/contato">Contato</Link>
    </div>
  );
}
export default Home;
