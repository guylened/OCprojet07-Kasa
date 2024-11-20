import '../styles/Footer-Header.css'
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
        <div className='nav'>
        <navLink>Accueil</navLink>
        <navLink>A propos</navLink>
        </div>  
    </div>

}

export default Header