import "../styles/index.scss";
import PropTypes from "prop-types";

export const RatingScale = ({scaleValue, id}) => { 	
    const redStar = Array(5).fill(<i className={`fa-xl fa-solid fa-star fa-style-r`}  aria-hidden="true"></i>)
    const greyStar =  Array(5).fill(<i className={`fa-xl fa-solid fa-star fa-style-g`}  aria-hidden="true"></i>)
	
	return (
        <div className="housingRating">		
			{redStar.slice(5-scaleValue).map((redStar, idx) => {
                      return <span key={`${id}redStar${idx+1}`}>{redStar}</span>
                    })}
                    {greyStar.slice(scaleValue).map((greyStar, idx) => {
                      return <span key={`${id}greyStar${idx+1}`}>{greyStar}</span>
                    })}
		</div>
	)
}

RatingScale.propTypes = {
    id: PropTypes.string.isRequired,
    scaleValue: PropTypes.string.isRequired,
  };