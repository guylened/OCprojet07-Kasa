import paysage1 from '../assets/paysage1.png'
import '../styles/banner.scss'

function App() {
    return (
    <>
      <div className="banner">
      <img src={paysage1}  alt="bannière paysage" />  
       <h1 className='bannerTitle'>Chez vous, partout et ailleurs</h1>               
      </div>
      
    </>
  )
}


export default App
