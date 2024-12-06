import "../styles/index.scss";
import PropTypes from "prop-types";

export const Rating = ({value, id}) => { 	
    const redStar = Array(5).fill(<i className={`fa-solid fa-star fa-style-r`}  aria-hidden="true"></i>)
    const greyStar =  Array(5).fill(<i className={`fa-solid fa-star fa-style-g`}  aria-hidden="true"></i>)
	
	return (
        <div className="rating">		
			{redStar.slice(5-value).map((redStar, idx) => {
                      return <span key={`${id}redStar${idx+1}`}>{redStar}</span>
                    })}
                    {greyStar.slice(value).map((greyStar, idx) => {
                      return <span key={`${id}greyStar${idx+1}`}>{greyStar}</span>
                    })}
		</div>
	)
}

Rating.propTypes = {
    id: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  };