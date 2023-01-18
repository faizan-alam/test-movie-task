import React from "react";
import { DropDown } from "../../components/DropDown";
import { InputAutoComplete } from "../../components/InputAutoComplete";
import { Movie } from "../../components/Movie";
import { Rating } from "../../components/Rating";
import { GENRE_DATA, RATING_DATA } from "../../constants";
import { searchDataByKeyWord } from "../../services/api";

import "./styles.scss";

const Search = () => {
  const [data, setData] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState("");
  const [ratings, setRatings] = React.useState(["Any rating"]);
  const [genres, setGenres] = React.useState(["Any genre"]);

  const handleInputChange = async () => {
    try {
      const response = await searchDataByKeyWord(searchValue, ratings, genres);
      setData(response);
    } catch (error) {
      console.log(
        "🚀 ~ file: Search.jsx:10 ~ handleInputChange ~ error",
        error
      );
    }
  };

  React.useEffect(() => {
    handleInputChange();
  }, [genres, ratings, searchValue]);

  const handleRenderMovie = (item) => {
    return (
      <Movie
        key={item.title}
        category={item.category}
        rating={item.rating}
        title={item.title}
      />
    );
  };

  const handleRenderRating = (item) => {
    return <Rating rating={item} />;
  };

  const handleChangeGenre = (genre, isChecked) => {
    if (isChecked) {
      setGenres((pre) => [...pre, genre]);
      return;
    }
    const filterData = genres.filter((row) => row !== genre);
    setGenres(filterData);
  };
  const handleChangeRating = (rating, isChecked) => {
    if (isChecked) {
      setRatings((pre) => [...pre, rating]);
      return;
    }

    const filterData = ratings.filter((row) => row !== rating);
    setRatings(filterData);
  };

  return (
    <div className="search-root-container">
      <InputAutoComplete
        data={data}
        onTextChange={setSearchValue}
        placeholder="Enter movie name"
        onItemRender={handleRenderMovie}
      />
      <div className="search-drop-down">
        <DropDown
          data={RATING_DATA}
          placeholder="Rating"
          onItemRender={handleRenderRating}
          selected={ratings}
          onChange={handleChangeRating}
        />
        <DropDown
          data={GENRE_DATA}
          placeholder="Genre"
          selected={genres}
          onChange={handleChangeGenre}
        />
      </div>
    </div>
  );
};

export default Search;
