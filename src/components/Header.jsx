import { NavLink } from "react-router-dom";
import '../styles/footer-header.scss'
import logoK from '../assets/Vector.svg'
import logoM from '../assets/Group.svg'
import logoS from '../assets/Vector2.svg'
import logoA from '../assets/Vector3.svg'



function Header() {

    return <div className='contentHeader'>
        <div className="logoVecHeader">
            <img src={logoK} alt="Logo Kasa lettre K" />
            <img src={logoM} alt="Logo Kasa icone maison" />
            <img src={logoS} alt="Logo Kasa lettre S" />
            <img src={logoA} alt="Logo Kasa lettre A" />
        </div>
        <nav className='nav'>  
            <NavLink to="/">Accueil</NavLink>  
            <NavLink to="/about">A propos</NavLink>
        </nav>  
    </div>

}

export default Header