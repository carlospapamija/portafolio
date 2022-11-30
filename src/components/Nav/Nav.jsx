import { BrowserRouter as Router, Link } from "react-router-dom";
import './Nav.css';

export default function Nav() {
  return (
    <div className='contenedor-nav'>
      <div className='mi-nombre'>Carlos Papamija</div>
      <div className='mi-profesion'><h1>React Developer</h1>
      </div>
      <Router>
        <div className='lista-nav'>
          <ul>
            <li>
              <Link className='link' to='/'>Inicio</Link>
            </li>
            <li>
              <Link className='link' to='/aboutme'>Sobre Mi</Link>
            </li><li>
              <Link className='link' to='/projects'>Proyectos</Link>
            </li>
            <li>
              <Link className='link' to='/contact'>Contacto</Link>
            </li>
          </ul>
        </div>
      </Router>
    </div>
  )
}

