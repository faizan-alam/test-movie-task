import { MOVIES_DATA } from "../constants";

export const searchDataByKeyWord = (value = "", ratings = [], genres = []) =>
  new Promise((res, rej) => {
    if (!value?.length) {
      res([]);
      return;
    }

    const response = MOVIES_DATA.filter((row) => {
      const isTitleMatched = row.title
        .toLocaleLowerCase()
        .trim()
        .includes(String(value).trim().toLocaleLowerCase());

      const isRatingMatched =
        ratings.includes(row.rating) || ratings.includes("Any rating");
      const isGenresMatched =
        genres.includes(row.category) || genres.includes("Any genre");

      return isTitleMatched && isRatingMatched && isGenresMatched;
    });

    res(response);
  });
