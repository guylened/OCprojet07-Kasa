import "../styles/index.scss";
import PropTypes from "prop-types";
import {RatingScale} from "./housingRate.jsx"

export const HostSection = ({data}) => {
        
    const nameArray = data.host.name.split(" ")

    return (
    <div className="hostSection" >
        <div className="hostProfil">
        <div className="hostName">{nameArray[0]}<br/>{nameArray[1]}</div>        
        <img className="hostPicture" src={data.host.picture} alt="Photo de l'hôte" />
        </div>
        <RatingScale scaleValue={data.rating} id={data.id}/>        
    </div>
    )
}

HostSection.propTypes = {
    data: PropTypes.shape({
        id:PropTypes.string.isRequired,
        rating: PropTypes.string.isRequired,
        host: PropTypes.shape({ 
            name: PropTypes.string.isRequired,      
            picture: PropTypes.string.isRequired,
        })             
    }).isRequired,
  };

