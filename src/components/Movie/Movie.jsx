import React from "react";
import PropTypes from "prop-types";
import { Rating } from "../Rating";

import "./styles.scss";

const Movie = ({ title, rating, category }) => {
  return (
    <div className="root-movie-item-container" key={title}>
      <div className="title-container">
        <p className="title">{title}</p>
        <Rating rating={rating} />
      </div>
      <div className="action-container">{category}</div>
    </div>
  );
};

Movie.propTypes = {
  children: PropTypes.any,
};

export default Movie;
