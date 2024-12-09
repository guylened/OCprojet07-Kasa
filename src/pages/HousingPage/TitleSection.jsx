import "../../styles/index.scss";
import PropTypes from "prop-types";

export const TitleSection = ({data}) => {

    return (
    <div className="titleSection" >
        <div className="title">{data.title}</div>
        <div className="location">{data.location}</div>
        <div className="tagSection">
        {data.tags.map((tag) => {
                    return (
                        <div key={tag} className="tag">{tag}</div>
                    )
                })}
        </div>
        
    </div>
    )
}

TitleSection.propTypes = {
    data: PropTypes.shape({    
      location: PropTypes.string.isRequired,
      tags: PropTypes.arrayOf(PropTypes.string).isRequired,
      title: PropTypes.string.isRequired,
    }).isRequired,
  };