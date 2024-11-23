import { NavLink } from "react-router-dom";
import '../styles/footer-header.scss'
import logoK from '../assets/redLogo/Vector.svg';
import logoM from '../assets/redLogo/Group.svg';
import logoS from '../assets/redLogo/Vector2.svg';
import logoA from '../assets/redLogo/Vector3.svg';



export function Header() {

    return (<div className='contentHeader'>
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
    </div>) 

}

export default Header