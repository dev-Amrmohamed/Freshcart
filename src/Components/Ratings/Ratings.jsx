import { faStar, faStarHalfAlt } from "@fortawesome/free-regular-svg-icons";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Ratings({ ratings }) {
  function handelIcons(item) {
    if (ratings > item) {
      return solidStar;
    }
    if (ratings >= item - 0.5) {
      return faStarHalfAlt;
    } else {
      return faStar;
    }
  }
  return (
    <>
      <div className="icons text-amber-400">
        {[1, 2, 3, 4, 5].map((item) => (
          <FontAwesomeIcon icon={handelIcons(item)} key={item} />
        ))}
      </div>
    </>
  );
}
