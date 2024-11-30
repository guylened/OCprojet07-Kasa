import "../styles/index.scss";
import PropTypes from "prop-types";

export const HostSection = ({data}) => {

    return (
    <div className="hostSection" >
        <div className="hostProfil">
        <div className="hostName">{data.host.name}</div>        
        <img className="hostPicture" src={data.host.picture} alt="Photo de l'hôte" />
        </div>
    </div>
    )
}

HostSection.propTypes = {
    data: PropTypes.shape({
        id:PropTypes.string.isRequired,
        host: PropTypes.shape({ 
            name: PropTypes.string.isRequired,      
            picture: PropTypes.string.isRequired,
        })  
      
    }).isRequired,
  };


  /*<div className="housingRating">
        {data.tags.map((tag, idx) => {
                    return (
                        <div key={`tag${data.id}${idx +1}`} className="tag">{tag}</div>
                    )
                })}
        </div>*/