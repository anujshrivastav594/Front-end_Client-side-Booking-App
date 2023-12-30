import { Link } from "react-router-dom";
import "./searchItem.css";

const SearchItem = ({newItem}) => {//also props can be use so props.newItem return same thing,here we acces through item only as we are not passing props
  return (
    <div className="searchItem">
      <img
        src={newItem.photos[0]}
        alt=""
        className="siImg"
      />
      <div className="siDesc">
        <h1 className="siTitle">{newItem.name}</h1>
        <span className="siDistance">{newItem.distance}m from center</span>
        <span className="siTaxiOp">Free airport taxi</span>
        <span className="siSubtitle">
          Studio Apartment with Air conditioning
        </span>
        <span className="siFeatures">
          {newItem.shortDesc}
        </span>
        <span className="siCancelOp">Free cancellation </span>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="siDetails">
        {newItem.rating && <div className="siRating">
          <span>Excellent</span>
          <button>{newItem.rating}</button>
        </div>}
        <div className="siDetailTexts">
          <span className="siPrice">${newItem.cheapestPrice}</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          <Link to={`/hotels/${newItem._id}`}>
          <button className="siCheckButton">See availability</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
