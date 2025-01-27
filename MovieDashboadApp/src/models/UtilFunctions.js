export const FilterRules = (movieOrSeries, searchParam) =>
  movieOrSeries.name.toLowerCase().includes(searchParam.toLowerCase());
// movieOrSeries.director.filter((item) => item.toLowerCase().includes(searchParam.toLowerCase()));
// movieOrSeries.actor.toLowerCase().includes(searchParam.toLowerCase());
// movieOrSeries.award toLowerCase().includes(searchParam.toLowerCase());

export const TruncateStrings = (string, length) => {
  if (string.length > length) {
    return string.substring(0, length) + "...";
  }
  return string;
};
