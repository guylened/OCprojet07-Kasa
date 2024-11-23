import paysage1 from '../assets/paysage1.png'
import paysage2 from '../assets/paysage2.png'
import '../styles/banner.scss'

export function Banner1() {
    return (
    <>
      <div className="banner">
      <img src={paysage1}  alt="bannière paysage" />  
       <h1 className='bannerTitle'>Chez vous, partout et ailleurs</h1>               
      </div>
      
    </>
  )
}



export function Banner2() {
    return (
    <>
      <div className="banner">
      <img src={paysage2}  alt="bannière paysage" style={{opacity:0.7}} />                    
      </div>
      
    </>
  )
}

