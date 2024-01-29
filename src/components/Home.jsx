import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className='div'>
            <Link to="/juego">
              <button className="IniciarJuego">Iniciar juego</button>
            </Link>
        </div>
      );
    }

export default Home