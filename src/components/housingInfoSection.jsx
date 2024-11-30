import "../styles/index.scss";
import PropTypes from "prop-types";

export const TitleSection = ({data}) => {

    return (
    <div className="titleSection" >
        <div className="title">{data.title}</div>
        <div className="location">{data.location}</div>
        <div className="tagSection">
        {data.tags.map((tag, idx) => {
                    return (
                        <div key={`tag${data.id}${idx +1}`} className="tag">{tag}</div>
                    )
                })}
        </div>
        
    </div>
    )
}

TitleSection.propTypes = {
    data: PropTypes.shape({
    id:PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      tags: PropTypes.arrayOf(PropTypes.string).isRequired,
      title: PropTypes.string.isRequired,
    }).isRequired,
  };