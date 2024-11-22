import '../styles/footer-header.scss'
import logoK from '../assets/Vector.svg'
import logoM from '../assets/Group.svg'
import logoS from '../assets/Vector2.svg'
import logoA from '../assets/Vector3.svg'


function Footer() {

    return <div className='contentFooter'>
        <div className="logoVecFooter">
            <img src={logoK} alt="Logo Kasa lettre K" />
            <img src={logoM} alt="Logo Kasa icone maison" />
            <img src={logoS} alt="Logo Kasa lettre S" />
            <img src={logoA} alt="Logo Kasa lettre A" />
        </div>
        <p className="copyright">© 2020 Kasa. All rights reserved</p>

    </div>

}

export default Footer