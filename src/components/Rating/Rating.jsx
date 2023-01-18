import React from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const Rating = ({ rating }) => {
  const stars = React.useMemo(() => {
    const items = [];
    for (let i = 1; i <= 10; i++) {
      if (i <= rating) {
        items.push(<FaStar />);
      } else if (i - rating <= 0.5 && i - rating > 0) {
        items.push(<FaStarHalfAlt />);
      } else {
        items.push(<FaRegStar />);
      }
    }

    return items;
  }, [rating]);

  return (
    <div>
      {stars.map((star, index) => (
        <span key={index}>{star}</span>
      ))}
    </div>
  );
};

export default Rating;
